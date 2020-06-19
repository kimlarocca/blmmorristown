<template>
  <div>
    <section class="secondary-page">
      <div class="container">
        <h1 class="u-hide-until--m">{{ title }}</h1>
        <div class="hero"></div>
      </div>
      <h1 class="u-hide-after--m">{{ title }}</h1>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'SecondaryPageHero',
    props: {
      title: String
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/scss/breakpoints";

  .secondary-page {
    position: relative;
    @media all and (min-width: $medium) {
      min-height: 210px;
    }

    .container {
      @media all and (min-width: $medium) {
        padding-top: 4.1rem;
        background: var(--color-primary);
        margin-left: 12rem;
      }
    }

    h1 {
      position: relative;
      z-index: 20;
      transform: rotate(-5deg);
      font-size: 3rem;
      line-height: 3rem;
      color: var(--color-black);
      margin: 1rem 0 0 1rem;
      @media all and (min-width: $medium) {
        font-size: 4rem;
        color: var(--color-white);
        text-shadow: 1px 5px 20px var(--color-black);
      }
    }

    .hero {
      position: relative;
      height: 200px;
      background: url(/img/secondary-hero.jpg) no-repeat center right;
      @media all and (min-width: $medium) {
        position: absolute;
        top: 4rem;
        right: -3rem;
        left: 8rem;
        width: 100vw;
        background-size: cover;
      }
    }
  }
</style>
