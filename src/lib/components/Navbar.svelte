<script>
  import ThemeToggle from "./ThemeToggle.svelte";
</script>

<nav class="navigation">
  <div></div>
  <div class="navigation-links">
    <a href="/">
      <svg
        class="navigation-logo"
        width="100%"
        height="100%"
        viewBox="0 0 210 181"
        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
        ><g
          ><path
            class="upper"
            d="M0,180.436l105.174,-180.436l35.46,57.894l-70.679,123.025l-69.955,-0.483"
          ></path><path
            class="lower"
            d="M140.634,57.894l68.749,122.301l-68.508,0.241l-23.881,-42.214l23.64,-80.328Z"
          ></path><path
            d="M116.994,138.222l-10.92,-20.072l34.561,-60.255l-23.641,80.327"
            style="fill:#5a4424;"
          ></path></g
        ></svg
      ></a
    >
  </div>
  <div class="navigation-utilities">
    <ThemeToggle />
  </div>
</nav>

<style lang="scss">
  .navigation {
    position: sticky;
    top: 0px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #f78c6c;
    margin-bottom: 20px;
    background-color: var(--navbar);
    // box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 4px;
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
    height: 30px;

    .upper {
      fill: #5e8cff;
      transition: all 0.6s;
    }

    .lower {
      fill: #f78c6c;
      transition: all 0.6s;
    }
  }
</style>
