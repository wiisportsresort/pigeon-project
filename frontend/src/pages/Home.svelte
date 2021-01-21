<script lang="ts">
  import type { Hydrator } from 'pigeon-generator';
  import { fade } from 'svelte/transition';
  import PostCard from '../components/PostCard.svelte';

  export let hydrator: Hydrator;
</script>

<style lang="scss">
  #home {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    max-width: 700px;
  }
</style>

<div in:fade={{ duration: 100 }} id="home">
  <h1>Pigeon</h1>
  <div class="posts">
    {#each hydrator.posts
      .filter(p => !p.parent)
      .sort(({ timestamp: a }, { timestamp: b }) => a.getDate() - b.getDate()) as post}
      <PostCard {post} interactive="full" />
    {/each}
  </div>
</div>
