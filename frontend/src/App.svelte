<script lang="ts">
  import { Hydrator, hydratorData } from 'pigeon-generator';
  import type { RouteDefinition } from 'svelte-spa-router';
  import Router from 'svelte-spa-router';
  import { wrap } from 'svelte-spa-router/wrap';
  import AppBar from './components/AppBar.svelte';
  import Loading from './components/Loading.svelte';
  import NotFound from './pages/NotFound.svelte';

  const hydrator = new Hydrator(hydratorData);
  hydrator.hydrate();

  const routes: RouteDefinition = {
    '/': wrap({
      asyncComponent: () => import('./pages/Home.svelte'),
      loadingComponent: Loading,
      props: { hydrator },
    }),
    '/user/:username': wrap({
      asyncComponent: () => import('./pages/User.svelte'),
      loadingComponent: Loading,
      props: { hydrator },
    }),
    '/user/:username/followers': wrap({
      asyncComponent: () => import('./pages/Followers.svelte'),
      loadingComponent: Loading,
      props: { hydrator },
    }),
    '/user/:username/following': wrap({
      asyncComponent: () => import('./pages/Following.svelte'),
      loadingComponent: Loading,
      props: { hydrator },
    }),
    '/post/:id': wrap({
      asyncComponent: () => import('./pages/Post.svelte'),
      loadingComponent: Loading,
      props: { hydrator },
    }),
    '*': NotFound,
  };
</script>

<style lang="scss" global>
  @import './normalize';
  @import './colors';

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: blue-gray(50);
  }

  main {
    margin: 0.5rem;
    margin-top: 4rem;
  }
</style>

<AppBar />
<main>
  <Router {routes} />
</main>
