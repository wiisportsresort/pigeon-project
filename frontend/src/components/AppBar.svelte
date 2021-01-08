<script lang="ts">
  import PigeonIcon from './PigeonIcon.svelte';
</script>

<style lang="scss">
  @import '../colors';

  nav {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    height: 48px;
    display: flex;
    align-items: center;
    z-index: 2;
    // box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border-bottom: 2px solid blue-gray(200);
  }

  :global(nav > *) {
    color: #333;
    margin-left: 12px;
  }

  a {
    text-decoration: none;
    font-weight: 600;
    transition: color 75ms linear;
    display: flex;
    align-items: center;
  }
</style>

<nav>
  <a href="#/">
    <PigeonIcon />
    pigeon
  </a>
</nav>
