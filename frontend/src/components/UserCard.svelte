<script lang="ts">
  import type { User } from 'pigeon-generator';
  import { push } from 'svelte-spa-router';

  export let user: User;
  export let interactive = false;

  const userInteractive = (node: HTMLElement, user: User, ...rest: any[]) => {
    if (interactive) {
      node.classList.add('interactive');
      node.addEventListener('click', () => push(`#/user/${user!.username}`));
    }
  };
</script>

<style lang="scss">
  @import '../colors';

  :global(.user-card) {
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

  .user-card {
    padding: 0.6rem;
    border: 1px solid blue-gray(300);
    // border-radius: 4px;
    // box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    background-color: #fdfdfd;
    transition: background-color 75ms linear;
    display: flex;
    position: relative;

    .image-col {
      width: 3rem;
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
      }
      &.interactive img:hover {
        background-color: #0000000f;
        filter: brightness(90%);
      }
    }

    :global(.parent.interactive):hover {
      text-decoration: underline;
      cursor: pointer;
    }

    .header {
      display: block;
      margin-bottom: 2px;

      &.interactive:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }

    .body {
      flex: 1 0;
      display: flex;
      flex-direction: column;

      .content {
        margin-bottom: 0.25rem;
        display: block;
      }
    }
  }
</style>

<div class="user-card" use:userInteractive={user}>
  <div class="image-col" class:interactive>
    <img src={user.profileImage?.src ?? 'default.png'} alt="profile" />
  </div>
  <div class="body">
    <span class="header" class:interactive>
      <b>{user?.displayName}</b>
      <span class="username">@{user?.username}</span>
    </span>
    <span class="content">{user.bio}</span>
    {#if $$slots.default}
      <hr />
      <slot />
    {/if}
  </div>
</div>
