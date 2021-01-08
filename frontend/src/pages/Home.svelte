<script lang="ts">
  import { fade } from 'svelte/transition';

  let timer = 0;
  let clicks = 0;

  setInterval(() => timer++, 1000);
</script>

<style lang="scss">
  button {
    background-color: orangered;
    border: none;
    padding: 8px;
    color: #000;
    border-radius: 0.25rem;
    box-shadow: 4px 4px #ddd;
    cursor: pointer;
    transition: background-color 75ms linear;
    &:hover {
      background-color: darken(orangered, 8%);
    }
    &:active {
      background-color: darken(orangered, 16%);
    }
    &:focus {
      outline: none;
    }
  }

  div {
    text-align: center;
  }
</style>

<div in:fade={{ duration: 100 }}>
  <h1>svelte template</h1>
  <button on:click={() => clicks++}>button</button>
  <p>button clicks: {clicks}</p>
  <p>elapsed seconds: {timer}</p>
</div>
