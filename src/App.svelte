<script lang="ts">
  import type { RouteDefinition } from 'svelte-spa-router';
  import Router from 'svelte-spa-router';
  import { wrap } from 'svelte-spa-router/wrap';
  import Loading from './components/Loading.svelte';
  import AppBar from './components/AppBar.svelte';
  import Home from './pages/Home.svelte';


  const routes: RouteDefinition = {
    '/': Home,
    '/page2': wrap({
      asyncComponent: () => import('./pages/Page2.svelte'),
      loadingComponent: Loading,
    }),
    '/page3': wrap({
      asyncComponent: () => import('./pages/Page3.svelte'),
      loadingComponent: Loading,
    }),
  };
</script>

<style lang="scss" global>
  @import 'modern-normalize/modern-normalize';

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    margin: 8px;
    margin-top: 64px;
  }
</style>

<AppBar />
<main>
  <Router {routes} />
</main>
