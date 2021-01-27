<script lang="ts">
  export let to: string;
  export let ext = false;
</script>

<style lang="scss">
  @import '../colors';

  a {
    color: blue(500);
    transition: color 150ms ease-in-out;
    text-decoration: none;
    &:hover {
      color: blue(700);
    }
  }
</style>

<a href={to} target={ext ? '_blank' : undefined} rel={ext ? 'noreferrer' : undefined}><slot /></a>
