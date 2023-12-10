<script lang="ts">
  import type { PageData } from "./$types";
  import Card from "./Card.svelte";

  export let data: PageData;
</script>

{#each data.posts as post, _index}
  <Card {post}></Card>
{/each}
