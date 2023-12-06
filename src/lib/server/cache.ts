import type { Post, PrismaClient } from "@prisma/client"
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import { getHighlighter, renderToHtml } from "shiki";

type CachePost = {
    metaList: Post[],
    postMap: Record<string, Post>,
}

let cache: CachePost;

const shi = await getHighlighter({ theme: "dracula-soft" })


const marked = new Marked(
    markedHighlight({
        highlight(code, lang) {
            try {
                const tokens = shi.codeToThemedTokens(code, lang)
                const html = renderToHtml(tokens, {
                    elements: {
                        pre({ _className, _style, children }) {
                            return `${children}`
                        },
                        code({ _className, _style, children }) {
                            return `${children}`
                        },
                    }
                })

                return html
            } catch (error) {
                return
            }
        }
    }),
    {
        renderer: {
            code(code, lang, escaped) {
                return `<div class="hello"><span>Some stuff here</span><pre><code class="language-${lang}">${escaped ? code : code}</code></pre></div>`;
            },
        }
    }
);

export async function InitCache(prisma: PrismaClient) {
    console.log("Cache is building...")

    const posts = await prisma.post.findMany()

    posts.sort((a, b) => {
        const timeComparison = a.date.getTime() - b.date.getTime();

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