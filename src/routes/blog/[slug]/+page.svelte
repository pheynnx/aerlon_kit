<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1>{data.post.title}</h1>

{#each data.post.categories as category, index}
  <p>{category}</p>
{/each}

{@html data.post.markdown}
