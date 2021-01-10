<script lang="ts">
  import type { Hydrator } from 'pigeon-generator';
  import { pop } from 'svelte-spa-router';
  import { fade } from 'svelte/transition';
  import IconButton from '../components/IconButton.svelte';
  import UserCard from '../components/UserCard.svelte';

  export let hydrator: Hydrator;
  export let params: { username: string | undefined } = { username: undefined };

  $: user = hydrator.getUser(params.username);
</script>

<style lang="scss">
  @import '../colors';

  #following {
    max-width: 600px;
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
  <div id="following">
    {#if user}
      <header>
        <div id="back-button-wrapper">
          <div on:click={pop}>
            <IconButton icon="arrow-left" size={32} iconSize={20} />
          </div>
        </div>
        <span>Followed by <b>@{user.username}</b></span>
      </header>
      {#if user.following?.length}
        {#each user.following as followee}
          <UserCard user={followee} interactive />
        {/each}
      {:else}
        <h2>no following</h2>
      {/if}
    {:else}
      <h3>User not found: @{params.username}</h3>
    {/if}
  </div>
</div>
