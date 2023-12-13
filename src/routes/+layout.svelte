<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";

  import "./styles/main.scss";
</script>

<Navbar />
<div class="main-container">
  <slot />
</div>

<style lang="scss">
  .main-container {
    margin: 0 auto;
    max-width: 43rem;
    padding: 0 1rem;
  }
</style>
