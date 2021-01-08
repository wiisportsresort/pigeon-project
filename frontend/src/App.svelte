<script lang="ts">
  import type { RouteDefinition } from 'svelte-spa-router';
  import Router from 'svelte-spa-router';
  import { wrap } from 'svelte-spa-router/wrap';
  import AppBar from './components/AppBar.svelte';
  import Loading from './components/Loading.svelte';
  import Home from './pages/Home.svelte';
  import NotFound from './pages/NotFound.svelte';
  import { Hydrator, hydratorData } from 'pigeon-generator';

  const hydrator = new Hydrator(hydratorData);
  hydrator.hydrate();
  console.log(hydrator);

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
    '*': NotFound,
  };
</script>

<style lang="scss" global>
  @import 'normalize';

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
