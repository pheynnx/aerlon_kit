<script lang="ts">
  import type { Post } from "@prisma/client";
  import dayjs from "dayjs";

  export let featured: boolean;

  export let post: Post;
</script>

<div class="card-container" class:featured>
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
    padding: 5px;
    border-radius: 0.5rem;

    &.featured {
      background-color: #5e8cff2c;
      border: 1px solid #5e8cff;
    }
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
    font-size: 14px;
    margin: 0;
    padding: 0 2px;
    line-height: 1.7;

    p {
      margin: 5px 0;
    }
  }

  .card-categories {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    margin-bottom: 4px;
  }

  .card-category {
    color: #fff;
    text-decoration: none;
    margin: 0;
    border-radius: 0.25rem;
    background-color: #795145;
    border: 1px solid #f78c6c;
    font-size: 12px;
    line-height: 1;
    padding: 4px 7px 5px 7px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
</style>
