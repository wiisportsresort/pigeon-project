<script lang="ts">
  import type { Hydrator, Post } from 'pigeon-generator';
  import { pop } from 'svelte-spa-router';
  import { fade } from 'svelte/transition';
  import IconButton from '../components/IconButton.svelte';
  import type { InteractivityType, PostCardType } from '../components/PostCard.svelte';
  import PostCard from '../components/PostCard.svelte';
  import { assert } from '../util';

  export let hydrator: Hydrator;
  export let params: { id: string | undefined } = { id: undefined };

  let currentPost = hydrator.getPost(params.id);
  $: currentPost = hydrator.getPost(params.id);

  const getParents = (...chain: Post[]): Post[] => {
    return chain[0].parent ? getParents(chain[0].parent, ...chain) : chain;
  };

  $: postChain = currentPost ? getParents(currentPost) : undefined;

  const getPostCardType = (post: Post): PostCardType => {
    if (postChain?.length === 1) return undefined;
    return postChain?.indexOf(post) === 0
      ? 'linked-bottom'
      : postChain?.indexOf(post) !== assert(postChain?.length) - 1
      ? 'linked-full'
      : 'linked-top';
  };

  const getInteractive = (post: Post): InteractivityType => {
    return post.id === assert(currentPost).id ? 'header' : 'full';
  };
</script>

<style lang="scss">
  @import '../colors';

  #post {
    max-width: 860px + 32px;
    margin: 0 auto;
  }

  header {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    #back-button-wrapper {
      margin-right: 4px;
    }
  }
</style>

<div in:fade={{ duration: 100 }}>
  <div id="post">
    {#if currentPost}
      <header>
        <div id="back-button-wrapper">
          <div on:click={pop}>
            <IconButton icon="arrow-left" size={32} iconSize={20} />
          </div>
        </div>
        <span>Post by <b>@{currentPost.author?.username}</b> ({params.id})</span>
      </header>
      {#each assert(postChain) as post}
        <PostCard {post} interactive={getInteractive(post)} type={getPostCardType(post)} />
      {/each}
    {:else}
      <h3>Post not found: <code>{params.id}</code></h3>
    {/if}
  </div>
</div>
