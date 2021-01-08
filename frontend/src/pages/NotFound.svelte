<script lang="ts">
  import { fade } from 'svelte/transition';

  export let params: string;
  params;
</script>

<style lang="scss">
  div {
    display: flex;
    justify-content: center;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<div in:fade={{ duration: 100 }}>
  <section>
    <h2>Not Found</h2>
    <h3>Nice job, <a href="#/">return to home</a>?</h3>
  </section>
</div>
