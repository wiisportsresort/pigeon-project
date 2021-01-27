<script context="module" lang="ts">
  export type PostCardType = 'linked-top' | 'linked-bottom' | 'linked-full' | undefined;
  export type InteractivityType = 'header' | 'full' | undefined;
</script>

<script lang="ts">
  import { format } from 'date-fns';
  import type { Post, User } from 'pigeon-generator';
  import { push } from 'svelte-spa-router';
  import { assert, formatUserContent } from '../util';
  import Icon from './Icon.svelte';

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
    if (interactive === 'full') {
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
</script>

<style lang="scss">
  @import '../colors';

  :global(.post-card) {
    &.interactive {
      &:hover {
        background-color: #f6f6f6 !important;
        cursor: pointer;
      }
      &:active {
        background-color: #f0f0f0;
      }
    }
    // &.hover {
    // background-color: #f7f7f7 !important;
    // cursor: pointer;
    // }
  }

  .post-card {
    padding: 0.6rem;
    border: 0.5px solid blue-gray(300);
    &.linked-top {
      border-top-width: 0;
    }
    &.linked-bottom {
      border-bottom-width: 0;
    }
    &.is-reply > .image-col {
      margin-top: 1.25rem;
    }
    // border-radius: 4px;
    // box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    background-color: #fdfdfd;
    transition: background-color 75ms linear;
    display: flex;
    position: relative;

    .image-col {
      position: relative;
      width: 3rem;
      display: flex;
      flex-direction: column;
      margin-right: 0.5rem;

      // overflow: hidden;
      & img {
        width: 3rem;
        height: 3rem;
        object-fit: cover;
        border: 1px solid blue-gray(300);
        border-radius: 50%;
        transition: filter 75ms linear, background-color 75ms linear;
        z-index: 1;
      }
      &.interactive img:hover {
        cursor: pointer;
        background-color: #0000000f;
        filter: brightness(90%);
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

        &.link-bottom {
          top: 3rem;
          bottom: -0.5rem;
        }
      }
    }

    // super jank
    & > * {
      z-index: 1;
    }

    .body {
      position: relative;
      & > * {
        z-index: 1;
      }
    }

    .post-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
    }

    .parent {
      margin-bottom: 0.375rem;
      font-size: 0.75rem;
      width: fit-content;
      color: blue-gray(500);
      strong {
        font-weight: 600;
        color: blue-gray(700);
      }
    }

    :global(.parent.interactive):hover {
      text-decoration: underline;
      cursor: pointer;
    }

    .gray {
      color: cool-gray(600);
    }

    .header {
      display: block;
      width: fit-content;
      margin-bottom: 2px;
      display: flex;
      align-items: center;
    }

    :global(.username.interactive):hover {
      text-decoration: underline;
      cursor: pointer;
    }

    .body {
      flex: 1 0;
      display: flex;
      flex-direction: column;

      .content {
        margin-bottom: 0.25rem;
        display: block;

        :global(a) {
          color: blue(500);
          transition: color 150ms ease-in-out;
          text-decoration: none;
          &:hover {
            color: blue(700);
          }
        }

        :global(&.interactive):hover {
          cursor: pointer;
        }
      }

      .media-preview {
        margin-bottom: 0.5rem;
        font-size: 0.95rem;
        display: block;
      }

      .interactions {
        display: flex;
        align-items: center;
        color: blue-gray(500);

        & > * {
          margin-right: 1rem;
          display: flex;
          align-items: center;
          & > :global(*) {
            margin-right: 0.5rem;
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
  class="post-card"
  class:interactive={interactive === 'full'}
  class:is-reply={showParent && !!post.parent}
  class:linked-top={type === 'linked-top' || type === 'linked-full'}
  class:linked-bottom={type === 'linked-bottom' || type === 'linked-full'}
>
  <div class="post-background" use:fullInteractive={post} />
  <div class="image-col" use:headerInteractive={assert(post.author)}>
    {#if type === 'linked-top' || type === 'linked-full'}
      <div class="link link-top" />
    {/if}
    <img src={post.author?.profileImage?.src ?? 'default.png'} alt="profile" />
    {#if type === 'linked-bottom' || type === 'linked-full'}
      <div class="link link-bottom" />
    {/if}
  </div>
  <div class="body">
    <div class="post-background" use:fullInteractive={post} />
    {#if showParent && post.parent}
      <span class="parent" use:fullInteractive={assert(post.parent)}>
        Replying to
        <strong>@{post.parent.author?.username}</strong>
      </span>
    {/if}
    <span class="header">
      <div class="username" use:headerInteractive={assert(post.author)}>
        <b>{post.author?.displayName}</b>
        <span class="gray">@{post.author?.username}</span>
      </div>
      &nbsp;·&nbsp;
      <span class="gray">{format(post.timestamp, 'MMM d, yyy')}</span>
    </span>
    <span class="content" use:fullInteractive={post}>{@html formatUserContent(post.content)}</span>
    {#if post.media.length}
      <span class="media-preview gray">
        <i>{post.media.length} attachment{post.media.length === 1 ? '' : 's'}</i>
      </span>
    {/if}
    {#if $$slots.default}
      <div>
        <hr />
        <slot />
      </div>
    {/if}
    <div class="interactions" use:fullInteractive={post}>
      <span class="likes">
        <Icon icon="arrow-up" />
        <span>{post.likes.toLocaleString()}</span>
        <Icon icon="arrow-down" />
      </span>
      <span class="comments" use:fullInteractive={post}>
        <Icon icon="message-square" />
        <span>{countComments(post).toLocaleString()}</span>
      </span>
    </div>
  </div>
</div>
