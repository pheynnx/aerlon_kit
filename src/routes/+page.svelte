<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#each data.posts as post, index}
  <div>
    <a href={`/blog/${post.slug}`}><p>{post.title}</p></a>
    <p>{post.date}</p>
    <p>{post.postSnippet}</p>
    <!-- <p>{@html post.markdown}</p> -->
    <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
  </div>
{/each}
