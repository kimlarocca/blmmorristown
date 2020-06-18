<template>
  <header>
    <div class="logo">
      <a href="/"><img alt="black lives matter morristown nj" src="/img/logo.png"/></a>
    </div>
    <v-menu/>
  </header>
</template>

<script>
  import VMenu from './VMenu'

  export default {
    name: 'VHeader',
    components: { VMenu }
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/scss/breakpoints";

  header {
    position: relative;
    z-index: 100;
  }

  .logo {
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    width: 100px;
    height: 110px;
    display: flex;
    padding: 1rem;
    @media all and (min-width: $medium) {
      left: 0;
      width: 150px;
      height: 175px;
    }
    @media all and (min-width: $large) {
      left: 1rem;
    }
  }
</style>
