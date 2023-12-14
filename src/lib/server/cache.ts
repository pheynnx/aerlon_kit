import type { Post, PrismaClient } from "@prisma/client"
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import { getHighlighter, bundledLanguages } from "shikiji";

type CachePost = {
    metaList: Post[],
    postMap: Record<string, Post>,
}

let cache: CachePost;

const shiki = await getHighlighter({
    themes: ["material-theme-palenight", "min-light"],
    langs: [...Object.keys(bundledLanguages)]
})

const marked = new Marked(
    markedHighlight({
        highlight(code, lang) {
            try {
                const cody = shiki.codeToHtml(code, {
                    lang,
                    themes: {
                        light: "min-light",
                        dark: 'material-theme-palenight'
                    },
                    cssVariablePrefix: "--theme-",
                    defaultColor: '',
                    transformers: [
                        {
                            pre(hast) {
                                return {
                                    type: "element",
                                    tagName: "pre",
                                    properties: {
                                        class: "shiki"
                                    },
                                    children: hast.children
                                }
                            },
                        }
                    ],
                })

                return cody
            } catch (error) {
                return
            }
        }
    }),
    {
        renderer: {
            code(code, lang, escaped) {
                return `<div class="code-block"><span class="language-name">${lang}</span>${escaped ? code : code}</div>`;
            },
        }
    }
);

export async function InitCache(prisma: PrismaClient) {
    console.log("Cache is building...")

    const posts = await prisma.post.findMany()

    posts.sort((a, b) => {
        const timeComparison = b.date.getTime() - a.date.getTime();

        if (timeComparison === 0) {
            return a.title.localeCompare(b.title)
        }

        return timeComparison
    })

    let metaList: Post[] = [];
    let postMap: Record<string, Post> = {};

    posts.forEach(async p => {
        p.markdown = await marked.parse(p.markdown)

        p.categories.sort((a, b) => a.localeCompare(b))

        if (p.published) {
            metaList.push(p)

            postMap[p.slug] = p
        }
    })

    console.log("Cache built!")

    cache = {
        metaList,
        postMap
    }
}

export { cache };