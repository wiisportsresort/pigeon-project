<script lang="ts">
  import PigeonIcon from './PigeonIcon.svelte';
</script>

<style lang="scss">
  @import '../colors';

  nav {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
    height: 4rem;
    display: flex;
    align-items: center;
    vertical-align: middle;
    z-index: 2;
    // box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border-bottom: 0.25rem solid cool-gray(200);
    & > * {
      color: #333;
      margin-left: 0.75rem;
    }
  }

  // :global(nav > *) {
  //   color: #333;
  //   margin-left: 12px;
  // }

  a:first-of-type {
    text-decoration: none;
    transition: color 75ms linear;
    display: flex;
    vertical-align: middle;
    align-items: center;
    > span {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0;
      margin-left: 0.2rem;
    }
  }

  a:last-of-type {
    margin: 0;
    margin-left: 1.5rem;
    margin-top: 1px;
    text-decoration: none;
    display: flex;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    &:hover {
      font-weight: 500;
    }

    > span {
      height: 100%;
    }
  }
</style>

<nav>
  <a href="#/">
    <PigeonIcon />
    <span>pigeon</span>
  </a>

  <a href="#/about"><span>About</span></a>
</nav>
