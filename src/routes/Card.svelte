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
        color: #e45d34;
      }

      .card-header-date {
        padding-bottom: 5px;
      }

      .card-category {
        background-color: #e45d34;
        border: 1px solid transparent;
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
      color: #5e8cff;
    }
  }

  .card-header-date {
    font-size: 12px;
    padding-bottom: 8px;
  }

  .card-snippet {
    font-size: 14px;
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
    color: #fff;
    text-decoration: none;
    margin: 0;
    border-radius: 0.25rem;
    background-color: #26448d;
    border: 1px solid #5e8cff;
    font-size: 12px;
    line-height: 1;
    padding: 4px 7px 5px 7px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
</style>
