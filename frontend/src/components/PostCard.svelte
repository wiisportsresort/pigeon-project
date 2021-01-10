<script context="module" lang="ts">
  export type PostCardType = 'linked-top' | 'linked-bottom' | 'linked-full' | undefined;
  export type InteractivityType = 'header' | 'full' | undefined;
</script>

<script lang="ts">
  import type { Post, User } from 'pigeon-generator';
  import { push } from 'svelte-spa-router';
  import { assert } from '../util';
  import Icon from './Icon.svelte';

  export let post: Post;
  export let interactive: InteractivityType = undefined;
  export let type: PostCardType = undefined;

  const headerInteractive = (node: HTMLElement, user: User, ...rest: any[]) => {
    if (!!interactive) {
      node.classList.add('interactive');
      node.addEventListener('click', () => push(`#/user/${user!.username}`));
    }
  };

  const fullInteractive = (node: HTMLElement, post: Post, ...rest: any[]) => {
    if (interactive === 'full') {
      node.classList.add('interactive');
      node.addEventListener('click', () => push(`#/post/${post!.id}`));
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
    padding: 8px;
    border: 0.5px solid blue-gray(300);
    &.linked-top {
      border-top-width: 0;
    }
    &.linked-bottom {
      border-bottom-width: 0;
    }
    &.is-reply > .image-col {
      margin-top: 20px;
    }
    // border-radius: 4px;
    // box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    background-color: #fdfdfd;
    transition: background-color 75ms linear;
    display: flex;
    position: relative;

    .image-col {
      position: relative;
      width: 48px;
      display: flex;
      flex-direction: column;
      margin-right: 8px;
      // overflow: hidden;
      & img {
        width: 48px;
        height: 48px;
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
          top: -28px;
          height: 28px;
        }

        &.link-bottom {
          top: 48px;
          bottom: -8px;
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
      margin-bottom: 6px;
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
    }

    :global(.header.interactive):hover {
      text-decoration: underline;
      cursor: pointer;
    }

    .body {
      flex: 1 0;
      display: flex;
      flex-direction: column;

      .content {
        margin-bottom: 4px;
        display: block;

        :global(&.interactive):hover {
          cursor: pointer;
        }
      }

      .interactions {
        display: flex;
        align-items: center;
        color: blue-gray(500);

        & > * {
          margin-right: 16px;
          display: flex;
          align-items: center;
          & > :global(*) {
            margin-right: 4px;
          }
        }

        .id {
          font-size: 0.8em;
          font-family: 'Iosevka Custom Extended';
        }
      }
    }
  }
</style>

<div
  class="post-card"
  class:interactive={interactive === 'full'}
  class:is-reply={!!post.parent}
  class:linked-top={type === 'linked-top' || type === 'linked-full'}
  class:linked-bottom={type === 'linked-bottom' || type === 'linked-full'}>
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
    {#if post.parent}
      <span class="parent" use:fullInteractive={assert(post.parent)}>
        Replying to
        <strong>@{post.parent.author?.username}</strong>
      </span>
    {/if}
    <span class="header" use:headerInteractive={assert(post.author)}>
      <b>{post.author?.displayName}</b>
      <span class="gray">@{post.author?.username}</span>
    </span>
    <span class="content" use:fullInteractive={post}>{post.content}</span>
    {#if $$slots.default}
      <div>
        <hr />
        <slot />
      </div>
    {/if}
    <div class="interactions" use:fullInteractive={post}>
      <span class="likes">
        <Icon icon="arrow-up" />
        <span>{post.likes}</span>
        <Icon icon="arrow-down" />
      </span>
      <span class="comments" use:fullInteractive={post}>
        <Icon icon="message-square" />
        <span>{countComments(post)}</span>
      </span>
      <span class="id">{post.id}</span>
    </div>
  </div>
</div>
