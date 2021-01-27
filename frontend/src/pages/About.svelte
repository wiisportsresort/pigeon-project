<script lang="ts">
  import { fade } from 'svelte/transition';
  import Link from '../components/Link.svelte';
</script>

<style lang="scss">
  @import '../colors';

  #about {
    margin: 0 auto;
    flex-grow: 1;
    max-width: 700px;
  }
</style>

<div in:fade={{ duration: 100 }} id="about">
  <h1>About</h1>

  <p>
    This is <strong>Pigeon</strong>, a mock social media website modeled after Twitter, Reddit, and
    the like, made for a school project. Users can make <strong>posts</strong> and
    <strong>comments</strong> in reply.
  </p>

  <p>
    You can start on the <Link to="#/">Home</Link> page and look through the list of latest posts there.
    Clicking on one will bring you to the posts's unique page (at <code>/#/post/&lt;id&gt;</code>),
    where you can view its comments.
  </p>

  <p>
    Clicking on a profile image or the username on a post will bring you to their page (at <code
      >/#/user/&lt;username&gt;</code
    >). You can view their bio, followers/folowees, join date, posts, comments, and media posts
    there.
  </p>

  <p>
    I used <Link ext to="https://svelte.dev">Svelte</Link> to make components, which were written in
    <Link ext to="https://typescriptlang.org">TypeScript</Link>. Hosting is done with
    <Link ext to="https://nginx.org">nginx</Link>
    (many problems but eventually it worked). The source code is available at
    <Link ext to="https://github.com/wiisportsresort/pigeon-project">GitHub</Link>.
  </p>
</div>
