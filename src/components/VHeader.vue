<template>
  <header>
    <div class="logo">
      <a href="/"><img alt="black lives matter morristown nj" src="/img/logo.png"/></a>
    </div>
    <nav>
      <a href="/Donate" class="button donate">donate</a>
      <i class="fas fa-bars"></i>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'VHeader'
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/scss/breakpoints";

  header {
    position: relative;
    z-index: 100;
    background: var(--color-primary);

    nav {
      position: absolute;
      top: 1rem;
      right: 2.5rem;
      display: flex;
      @media all and (min-width: $medium) {
        right: 3.5rem;
      }
      @media all and (min-width: $large) {
        right: 4.5rem;
      }

      i {
        color: black;
        font-size: 2.2rem;
      }
    }
  }

  .logo {
    position: absolute;
    top: -18px;
    left: 1rem;
    background: white;
    width: 100px;
    height: 110px;
    display: flex;
    padding: 1rem;
    @media all and (min-width: $medium) {
      top: 0;
      width: 150px;
      height: 175px;
    }
  }

  .donate {
    margin-right: 1.5rem;
    padding: .25rem 1.5rem;
    line-height: 1.45rem;
  }
</style>
