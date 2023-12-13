<script lang="ts">
  import type { PageData } from "./$types";

  import "./markdown.scss";

  export let data: PageData;
</script>

<div class="blog-container">
  <h1 class="blog-title">{data.post.title}</h1>

  <div class="blog-categories">
    {#each data.post.categories as category, _index}
      <div class="blog-category"><span>{category}</span></div>
    {/each}
  </div>

  <div class="blog-markdown">
    {@html data.post.markdown}
  </div>
</div>

<style lang="scss">
  .blog-container {
    margin: 0 auto;
    max-width: 56rem;
    padding: 0 1rem;
  }

  .blog-title {
    text-align: center;
    margin: 0;
    margin-bottom: 15px;
    line-height: 1;
  }

  .blog-categories {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    margin-bottom: 15px;
  }

  .blog-category {
    color: #fff;
    text-decoration: none;
    margin: 0;
    border-radius: 0.25rem;
    background-color: #5e8cff;
    // border: 1px solid #f78c6c;
    font-size: 12px;
    line-height: 1;
    padding: 4px 7px 5px 7px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
</style>
