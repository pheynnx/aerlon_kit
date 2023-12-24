<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="error-container">
  <h2>{$page.status}</h2>
  <h4>{$page.error.message}</h4>
</div>

<style lang="scss">
  .error-container {
    display: grid;
    justify-content: center;
    text-align: center;
  }
</style>
