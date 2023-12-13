<script lang="ts">
  import ThemeToggle from "./ThemeToggle.svelte";

  let scrollHeight: number;

  $: scrolled = scrollHeight >= 10;
</script>

<svelte:window bind:scrollY={scrollHeight} />

<div class:scrolled class="navigation-container">
  <nav class="navigation">
    <div>
      <a href="/" class="navigation-logo"><span>Aerlon</span></a>
    </div>
    <div class="navigation-links"></div>
    <div class="navigation-utilities">
      <ThemeToggle />
    </div>
  </nav>
</div>

<style lang="scss">
  .navigation-container {
    position: sticky;
    top: 0px;
    height: 55px;
    margin-bottom: 20px;
    transition: background 0.2s ease;

    &.scrolled {
      background-color: var(--navbar);
    }
  }

  .navigation {
    height: inherit;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-content: center;
    align-content: center;
    align-items: center;
    max-width: 43rem;
    padding: 0 1rem;
    margin: 0 auto;
  }

  .navigation-links {
    width: fit-content;
    display: flex;
    align-items: center;
  }

  //   .navigation-link {
  //     line-height: 1;
  //     color: #cdcdcd;
  //     text-decoration: none;
  //     font-size: 16px;
  //     padding: 0.5rem;
  //     margin: 0 3px;
  //     border-radius: 0.25rem;
  //   }

  .navigation-utilities {
    justify-content: end;
    display: grid;
  }

  .navigation-logo {
    font-size: 20px;
    text-decoration: none;
    font-weight: 600;
    color: #f78c6c;
  }
</style>
