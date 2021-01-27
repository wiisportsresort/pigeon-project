<script lang="ts">
  import type { Hydrator, Post } from 'pigeon-generator';
  import { pop } from 'svelte-spa-router';
  import { fade } from 'svelte/transition';
  import IconButton from '../components/IconButton.svelte';
  import LargePostCard from '../components/LargePostCard.svelte';
  import type { PostCardType } from '../components/PostCard.svelte';
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

  const isCurrent = (post: Post) => post.id === assert(currentPost).id;
</script>

<style lang="scss">
  @import '../colors';

  #post {
    max-width: 700px;
    margin: 0 auto;
  }

  header {
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;

    .heading {
      margin: 0;
    }

    #back-button-wrapper {
      margin-right: 0.25rem;
    }
  }
</style>

{#key currentPost}
  <div in:fade={{ duration: 100 }}>
    <div id="post">
      {#if currentPost}
        <header>
          <div id="back-button-wrapper">
            <div on:click={pop}>
              <IconButton icon="arrow-left" size={32} iconSize={20} />
            </div>
          </div>
          <span>Post by <b>@{currentPost.author?.username}</b></span>
        </header>
        <section id="posts">
          {#each assert(postChain) as post}
            <svelte:component
              this={isCurrent(post) ? LargePostCard : PostCard}
              {post}
              showParent={isCurrent(post)}
              interactive={isCurrent(post) ? 'header' : 'full'}
              type={getPostCardType(post)}
            />
          {/each}
        </section>
        {#if currentPost.comments?.length}
          <h3>Comments</h3>
          <section id="comments">
            {#each [...currentPost.comments].sort(({ timestamp: a }, { timestamp: b }) => b.getTime() - a.getTime()) as comment}
              <PostCard
                post={comment}
                showParent
                interactive="full"
                type={comment.comments?.length ? 'linked-bottom' : undefined}
              />
              {#if comment.comments?.length}
                <PostCard
                  post={comment.comments[0]}
                  showParent={false}
                  interactive="full"
                  type={comment.comments[0]?.comments?.length ? 'linked-full' : 'linked-top'}
                />
                {#if comment.comments[0].comments?.length}
                  <PostCard
                    post={comment.comments[0].comments[0]}
                    showParent={false}
                    interactive="full"
                    type="linked-top"
                  />
                {/if}
              {/if}
            {/each}
          </section>
        {/if}
      {:else}
        <header>
          <div id="back-button-wrapper">
            <div on:click={pop}>
              <IconButton icon="arrow-left" size={32} iconSize={20} />
            </div>
          </div>
          <span class="heading">Post not found: <code>{params.id}</code></span>
        </header>
      {/if}
    </div>
  </div>
{/key}
