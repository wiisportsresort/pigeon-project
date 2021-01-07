<script lang="ts">
  import Icon from './Icon.svelte';
</script>

<style lang="scss">
  nav {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #444;
    height: 48px;
    display: flex;
    align-items: center;
    z-index: 2;
  }

  :global(nav > *) {
    color: white;
    margin-left: 12px;
  }

  a {
    text-decoration: none;
    font-weight: 600;
    transition: color 75ms linear;
  }
</style>

<nav>
  <Icon icon="twitter" />
  <a href="#/">Definitely not the popular bird social media platform</a>
</nav>
