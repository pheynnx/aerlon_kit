<script lang="ts">
  import type { Post } from "@prisma/client";
  import dayjs from "dayjs";

  export let post: Post;
</script>

<div class="card-container">
  <div class="card-header">
    <a class="card-header-title" href={`/blog/${post.slug}`}>
      <span>{post.title}</span>
    </a>
    <span class="card-header-date">
      {dayjs(post.date).format("MMMM D, YYYY")}
    </span>
  </div>

  <div class="card-snippet">
    <p>{post.postSnippet}</p>
  </div>

  <div class="card-categories">
    {#each post.categories as category, _index}
      <div class="card-category"><span>{category}</span></div>
    {/each}
  </div>
</div>

<br />

<style lang="scss">
  .card-container {
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
  }

  .card-header {
    display: grid;
    // padding-bottom: 5px;
  }

  .card-header-title {
    color: var(--font);
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    justify-self: center;
    width: fit-content;
    padding-bottom: 5px;

    &:hover {
      color: #5e8cff;
    }
  }

  .card-header-date {
  }

  .card-snippet {
  }

  .card-categories {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
  }

  .card-category {
  }
</style>
