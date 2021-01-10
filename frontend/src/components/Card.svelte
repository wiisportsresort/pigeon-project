<script lang="ts">
  import type { Media } from 'pigeon-generator';
  import { createEventDispatcher } from 'svelte';

  export let image: Media | undefined = undefined;
  export let interactive = false;

  const dispatch = createEventDispatcher();
</script>

<style lang="scss">
  @import '../colors';

  :global(.card) {
    &.interactive {
      &:hover {
        background-color: #f6f6f6 !important;
        cursor: pointer;
      }
      &:active {
        background-color: #f0f0f0;
      }
    }
  }

  .card {
    padding: 8px;
    border: 1px solid blue-gray(300);
    // border-radius: 4px;
    // box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    background-color: #fdfdfd;
    transition: background-color 75ms linear;
    display: flex;
    position: relative;

    .image-col {
      width: 48px;
      display: flex;
      flex-direction: column;
      margin-right: 8px;
      & img {
        width: 48px;
        height: 48px;
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
        margin-bottom: 4px;
        display: block;

        &.interactive {
          cursor: pointer;
        }
      }
    }
  }
</style>

<div class="card">
  {#if image}
    <div class="image-col">
      <div class="image" class:interactive on:click={e => dispatch('image-click', e)}>
        <img src={image.src} alt="profile" />
      </div>
    </div>
  {/if}
  <div class="body">
    <div class="header" class:interactive on:click={e => dispatch('header-click', e)}>
      <slot name="header" />
    </div>
    <div class="content" class:interactive on:click={e => dispatch('content-click', e)}>
      <slot name="content" />
    </div>
    <slot />
  </div>
</div>
