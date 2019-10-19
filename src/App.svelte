<script>
  export let name = '';
</script>

<style lang="scss" global>
  h1 {
    color: purple;
    &:hover {
      color: blue;
    }
  }
</style>

<svelte:head>
  <title>Svelte App</title>
</svelte:head>

<h1>Hello {name}</h1>
