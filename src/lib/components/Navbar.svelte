<script lang="ts">
  import { browser } from "$app/environment";

  import ThemeToggle from "./ThemeToggle.svelte";

  let scrollHeight: number;

  $: scrolled = scrollHeight >= 10;
</script>

<svelte:window bind:scrollY={scrollHeight} />

<div class:scrolled class="navigation-container">
  <nav class="navigation">
    <div></div>
    <div class="navigation-center">
      <a class="navigation-logo" href="/"
        ><span>{`{`}</span><span style="color: #3b8eed;">aerlon</span><span
          >{`}`}</span
        ></a
      >
    </div>
    <div class="navigation-utilities">
      {#if browser}
        <ThemeToggle />
      {/if}
    </div>
  </nav>
</div>

<style lang="scss">
  .navigation-container {
    z-index: 5;
    position: sticky;
    top: 0px;
    height: 55px;
    margin-bottom: 20px;
    transition: background 0.2s ease;

    &.scrolled {
      background-color: var(--navbar);
      border-bottom: 1px solid var(--navbar-border);
    }
  }

  .navigation {
    height: inherit;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-content: center;
    align-content: center;
    align-items: center;
    // max-width: 43rem;
    // padding: 0 1rem;
    margin: 0 auto;
  }

  .navigation-center {
    margin-top: -5px;
  }

  .navigation-logo {
    text-decoration: none;
    color: var(--logo);
    font-size: 30px;
    font-weight: 600;
  }

  .navigation-utilities {
    justify-content: end;
    display: grid;
  }
</style>
