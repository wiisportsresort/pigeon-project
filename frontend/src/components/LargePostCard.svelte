<script lang="ts">
  import { format } from 'date-fns';
  import type { Post, User } from 'pigeon-generator';
  import { push } from 'svelte-spa-router';
  import { assert, formatUserContent } from '../util';
  import type { InteractivityType, PostCardType } from './PostCard.svelte';

  export let post: Post;
  export let interactive: InteractivityType = undefined;
  export let type: PostCardType = undefined;
  export let showParent = true;

  const headerInteractive = (node: HTMLElement, user: User, ...rest: any[]) => {
    if (!!interactive) {
      node.classList.add('interactive');
      node.addEventListener('click', () => push(`#/user/${user!.username}`));
    }
  };

  const fullInteractive = (node: HTMLElement, post: Post, ...rest: any[]) => {
    if (!!interactive) {
      node.classList.add('interactive');
      node.addEventListener('click', () => push(`#/post/${post.id}`));
    }
  };

  const countComments = (post: Post): number => {
    let num = 0;

    num += post.comments
      ? post.comments.length + (post.comments?.map(countComments).reduce((a, b) => a + b, 0) ?? 0)
      : 0;

    return num;
  };

  $: commentCount = countComments(post);
</script>

<style lang="scss">
  @import '../colors';

  .large-post-card {
    padding: 0.6rem;
    border: 0.5px solid blue-gray(300);

    .gray {
      color: cool-gray(600);
    }

    &.linked-top {
      border-top-width: 0;
    }

    background-color: #fdfdfd;
    transition: background-color 75ms linear;
    display: flex;
    flex-direction: column;
    position: relative;

    header {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;

      &.interactive img:hover {
        cursor: pointer;
        background-color: #0000000f;
        filter: brightness(90%);
      }

      aside:first-of-type {
        position: relative;
        display: flex;
        flex-direction: column;
        margin-right: 0.5rem;

        & img {
          width: 3rem;
          height: 3rem;
          object-fit: cover;
          border: 1px solid blue-gray(300);
          border-radius: 50%;
          transition: filter 75ms linear, background-color 75ms linear;
          z-index: 1;
        }

        .link {
          position: absolute;
          left: calc(50% - 1px);
          width: 2px;
          z-index: 0;
          background-color: blue-gray(300);
          &.link-top {
            top: -1.75rem;
            height: 1.75rem;
          }
        }
      }

      aside:last-of-type {
        display: flex;
        flex-direction: column;
        &:hover span {
          cursor: pointer;
          text-decoration: underline;
        }

        span {
          display: block;

          &:first-of-type {
            margin-bottom: 0.25rem;
          }
        }
      }
    }

    :global(.parent.interactive):hover {
      text-decoration: underline;
      cursor: pointer;
    }

    .body {
      flex: 1 0;
      display: flex;
      flex-direction: column;

      .parent {
        margin: 0.5rem 0 0.375rem;
        font-size: 0.95rem;
        width: fit-content;
        color: blue-gray(500);
        strong {
          font-weight: 600;
          color: blue-gray(700);
        }
      }

      .content {
        margin: 0.5rem 0 0;
        display: block;
        font-size: 1.5rem;

        :global(a) {
          color: blue(500);
          transition: color 150ms ease-in-out;
          text-decoration: none;
          &:hover {
            color: blue(700);
          }
        }
      }

      .media {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        align-content: flex-start;
        margin: 1rem 0 0;

        .attachment {
          border-radius: 0.5rem;
          position: relative;
          border: 1px solid blue-gray(300);

          img {
            border-radius: 0.5rem;
            max-width: 100%;
          }

          .caption {
            border-radius: 0 0 0.5rem 0.5rem;
            color: white;
            width: 100%;
            padding: 0.5rem 0.25rem;
            position: absolute;
            bottom: 0%;
            left: 0;
            background: transparentize($color: blue-gray(600), $amount: 0.5);
            text-align: center;
          }
        }
      }

      hr {
        margin-top: 1rem;
        border: none;
        border-bottom: 1px solid blue-gray(300);
        width: 100%;
      }

      .interactions {
        margin: 0.25rem;
        display: flex;
        align-items: center;
        color: blue-gray(800);

        & > * {
          margin-right: 1rem;
          display: flex;
          align-items: center;
          & > :global(*) {
            margin-right: 0.25rem;
          }
        }

        // .id {
        //   font-size: 0.8rem;
        //   font-family: 'Iosevka Custom Extended';
        // }
      }
    }
  }
</style>

<div
  class="large-post-card"
  class:is-reply={showParent && !!post.parent}
  class:linked-top={type === 'linked-top' || type === 'linked-full'}
  class:linked-bottom={type === 'linked-bottom' || type === 'linked-full'}
>
  <header use:headerInteractive={assert(post.author)}>
    <aside>
      {#if type === 'linked-top' || type === 'linked-full'}
        <div class="link link-top" />
      {/if}
      <img src={post.author?.profileImage?.src ?? 'default.png'} alt="profile" />
    </aside>
    <aside use:headerInteractive={assert(post.author)}>
      <span class="header">
        <b>{post.author?.displayName}</b>
      </span>
      <span class="gray">@{post.author?.username}</span>
    </aside>
  </header>
  <div class="body">
    {#if showParent && post.parent}
      <span class="parent" use:fullInteractive={assert(post.parent)}>
        Replying to
        <strong>@{post.parent.author?.username}</strong>
      </span>
    {/if}
    <span class="content">{@html formatUserContent(post.content)}</span>
    {#if post.media.length}
      <div class="media">
        {#each post.media as media, index}
          {#if media.type === 'image'}
            <div class="attachment">
              <img src={media.src} alt="attachment {index}" />
              {#if media.caption}
                <span class="caption">{@html media.caption}</span>
              {/if}
            </div>
          {:else}
            <span>Unknown media type: {media.type} (src: {media.src})</span>
          {/if}
        {/each}
      </div>
    {/if}
    {#if $$slots.default}
      <div>
        <hr />
        <slot />
      </div>
    {/if}
    <hr />
    <div class="interactions" use:fullInteractive={post}>
      <span class="likes">
        <strong>{post.likes.toLocaleString()}</strong>
        points
      </span>
      <span class="comments" use:fullInteractive={post}>
        <strong>{commentCount.toLocaleString()}</strong>
        comment{commentCount === 1 ? '' : 's'}
      </span>
      <span class="timestamp">
        <span class="gray">{format(post.timestamp, 'MMM d, yyy')}</span>
        &nbsp;·&nbsp;
        <span class="gray">{format(post.timestamp, 'h:mm a')}</span>
      </span>
    </div>
  </div>
</div>
