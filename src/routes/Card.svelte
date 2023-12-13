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

  {#if featured}
    <div class="card-snippet">
      <p>{post.postSnippet}</p>
    </div>
  {/if}

  <div class="card-categories">
    {#each post.categories as category, _index}
      <div class="card-category"><span>{category}</span></div>
    {/each}
  </div>
</div>

<style lang="scss">
  .card-container {
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
    padding: 5px;
    border-radius: 0.5rem;
    margin-bottom: 10px;

    &.featured {
      // background-color: #5e8cff7c;
      // border: 1px solid #5e8cff;

      .card-header-title:hover {
        color: #42b883;
      }

      .card-header-date {
        padding-bottom: 5px;
      }

      .card-category {
        color: var(--category-featured-font);
        background-color: var(--category-featured);
        border: 1px solid var(--category-featured-border);
      }
    }
  }

  .card-header {
    display: grid;
    // padding-bottom: 5px;
  }

  .card-header-title {
    color: var(--font);
    font-size: 21px;
    font-weight: 600;
    text-decoration: none;
    justify-self: center;
    width: fit-content;
    padding-bottom: 2px;

    &:hover {
      color: #42b883;
    }
  }

  .card-header-date {
    font-size: 12px;
    padding-bottom: 8px;
  }

  .card-snippet {
    font-size: 15px;
    margin: 0;
    padding: 0 2px;
    line-height: 1.4;

    p {
      margin: 0;
      padding-bottom: 10px;
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
    color: var(--catefory-font);
    text-decoration: none;
    margin: 0;
    border-radius: 0.25rem;
    background-color: var(--category);
    font-weight: 600;
    font-size: 13px;
    line-height: 1;
    padding: 4px 7px 5px 7px;
  }
</style>
