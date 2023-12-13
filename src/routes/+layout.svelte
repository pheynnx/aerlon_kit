<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";

  import "./styles/main.scss";
</script>

<Navbar />
<div class="main-container">
  <slot />
</div>

<style lang="scss">
</style>
