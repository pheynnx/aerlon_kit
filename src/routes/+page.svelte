<script lang="ts">
  import type { PageData } from "./$types";
  import Card from "./Card.svelte";

  export let data: PageData;
</script>

<h2 class="posts-main-label">Blog</h2>
<h3 class="posts-label">Featued Posts</h3>
{#each data.posts as post, _index}
  {#if post.featured}
    <Card {post} featured={true}></Card>
  {/if}
{/each}

<h3 class="posts-label">Latest Posts</h3>
{#each data.posts as post, _index}
  {#if !post.featured}
    <Card {post} featured={false}></Card>
  {/if}
{/each}

<style lang="scss">
  .posts-main-label {
    font-size: 20px;
  }

  .posts-label {
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 17px;
    font-weight: 500;
  }
</style>
