<script lang="ts">
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
  import "./styles/main.scss";
</script>

<ThemeToggle />

<div>
  <h2>Top Level</h2>
</div>

<slot />
