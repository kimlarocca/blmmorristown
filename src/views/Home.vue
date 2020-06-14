<template>
  <div>
    <section class="home-hero">
      <div class="container">
        <h1>Join the movement, fight for freedom</h1>
        <a class="button arrow">how to join</a>
      </div>
      <div class="hero"></div>
    </section>
    <v-spacer size="quin"/>
    <section class="l-container">
      <content-blade
        title="Real Talk Matters"
        link="/RealTalkMatters"
        cta="Learn more about Real Talk Matters"
        video="https://player.vimeo.com/video/393348113"
        altText="Real Talk Matters"
        verticalAlignment="middle"
      >
        <template slot="content">
          <p class="u-space--bottom">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam aperiam debitis delectus doloribus est
            in, magni nemo nihil quaerat qui quidem quo unde? Beatae eos minima quaerat repellendus ullam!
          </p>
        </template>
      </content-blade>
    </section>
    <v-spacer size="quin"/>
    <div class="l-container">
      <hr>
    </div>
    <v-spacer size="quin"/>
    <section class="l-container">
      <h2 class="u-space--double--bottom u-align--center">Local News</h2>
      <div class="l-grid l-grid--3up">
        <card
          image="https://picsum.photos/768/400?grayscale"
          altText="alternative text"
          subtitle="News Title"
          :hasTextLink="true"
          cta="Read More"
          description="Short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
        <card
          image="https://picsum.photos/768/400?grayscale"
          altText="alternative text"
          subtitle="News Title"
          :hasTextLink="true"
          cta="Read More"
          description="Short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
        <card
          image="https://picsum.photos/768/400?grayscale"
          altText="alternative text"
          subtitle="News Title"
          :hasTextLink="true"
          cta="Read More"
          description="Short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
      </div>
    </section>
  </div>
</template>

<script>
  import ContentBlade from 'vue-evolve/src/components/ContentBlade'
  import VSpacer from 'vue-evolve/src/components/VSpacer'
  import Card from 'vue-evolve/src/components/Card'

  export default {
    name: 'Home',
    components: {
      ContentBlade,
      VSpacer,
      Card
    }
  }
</script>

<style lang="scss" scoped>
  $breakpoint: 1000px;

  .home-hero {
    background: var(--color-primary);
    min-height: calc(100vh - 10rem);
    position: relative;
    @media all and (min-width: $breakpoint) {
      min-height: calc(100vh - 6rem);
    }

    .container {
      padding: 9rem 0 0 0;
      margin-left: 3rem;
      @media all and (min-width: $breakpoint) {
        padding: 10rem 0 0 0;
        margin-left: 8rem;
      }
    }

    h1 {
      position: relative;
      z-index: 20;
      transform: rotate(-5deg);
      color: var(--color-white);
      text-shadow: 2px 2px 15px var(--color-black);
      font-size: 4rem;
      line-height: 4rem;
      margin-bottom: 3rem;
      max-width: 768px;

      @media all and (min-width: $breakpoint) {
        font-size: 4rem;
        line-height: 4rem;
        margin-bottom: 4rem;
      }
    }
  }

  .hero {
    z-index: 10;
    position: absolute;
    background: url('/img/hero1.jpg') no-repeat bottom right 75px;
    top: 4rem;
    right: -3rem;
    height: calc(100vh - 12rem);
    left: 7rem;
    width: 100vw;
    background-size: cover;

    @media all and (min-width: $breakpoint) {
      left: 10.5rem;
    }
  }

  .button {
    position: relative;
    z-index: 30;
  }
</style>
