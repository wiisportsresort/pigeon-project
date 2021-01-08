<script lang="ts">
  export let facing: 'left' | 'right' = 'right';
  // export let variant: 'dark' | 'light' = 'light';
  export let width = 48;
</script>

<style lang="scss">
  .pigeon-icon-left {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
</style>

<img class:pigeon-icon-left={facing === 'left'} src="pigeon.svg" alt="pigeon" {width} />
