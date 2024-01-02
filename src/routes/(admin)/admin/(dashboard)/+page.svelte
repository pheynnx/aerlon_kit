<script lang="ts">
  import type { PageData, ActionData } from "./$types";
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import type { Post } from "@prisma/client";

  onMount(async () => {
    try {
      const response = await fetch("/api/posts", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      });

      posts = await response.json();
    } catch (error) {}
  });

  // export let data: PageData;

  //   export let form: ActionData;

  let posts: Post[] = [];
</script>

<h2>Admin</h2>

{#each posts as post}
  <div>
    <p>{post.id}</p>
    <p>{post.slug}</p>
    <p>{post.title}</p>
  </div>
{/each}

<form method="POST" action="?/logout" use:enhance>
  <button>Logout</button>
</form>
