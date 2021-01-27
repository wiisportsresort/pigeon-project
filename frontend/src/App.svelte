<script context="module" lang="ts">
  export const hydrator = new Hydrator(hydratorData);
  hydrator.hydrate();
</script>

<script lang="ts">
  import { Hydrator, hydratorData } from 'pigeon-generator';
  import type { RouteDefinition } from 'svelte-spa-router';
  import Router from 'svelte-spa-router';
  import { wrap } from 'svelte-spa-router/wrap';
  import AppBar from './components/AppBar.svelte';
  import Loading from './components/Loading.svelte';
  import NotFound from './pages/NotFound.svelte';

  const routes: RouteDefinition = {
    '/': wrap({
      asyncComponent: () => import('./pages/Home.svelte'),
      loadingComponent: Loading,
      props: { hydrator },
    }),
    '/about': wrap({
      asyncComponent: () => import('./pages/About.svelte'),
      loadingComponent: Loading,
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
    margin-top: 6rem;
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 100;
    font-display: swap;
    src: url('fonts/Inter-ThinItalic.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url('fonts/Inter-ExtraLight.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 200;
    font-display: swap;
    src: url('fonts/Inter-ExtraLightItalic.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('fonts/Inter-Light.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url('fonts/Inter-LightItalic.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('fonts/Inter-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('fonts/Inter-Italic.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('fonts/Inter-Medium.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: url('fonts/Inter-MediumItalic.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('fonts/Inter-SemiBold.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url('fonts/Inter-SemiBoldItalic.woff2') format('woff2');
  }
</style>

<AppBar />
<main>
  <Router {routes} />
</main>
