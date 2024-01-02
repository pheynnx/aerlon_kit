<script lang="ts">
  import type { PageData, ActionData } from "./$types";
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";

  // export let data: PageData;

  export let form: ActionData;
</script>

<h1>Login admin</h1>

<form method="POST" use:enhance>
  <label>
    Password
    <input name="password" type="password" />
  </label>
  <label>
    Pin
    <input name="pin" type="password" />
  </label>
  <button>Log in</button>
</form>

{#if form?.error}
  <div>{form.error}</div>
{/if}
