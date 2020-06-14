<template>
  <div>
    <section class="home-hero"></section>
    <section class="l-container">
      <h1><span>Join the movement,</span><span>fight for freedom</span></h1>
      <div class="u-align--center"><a class="button arrow">how to join</a></div>
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

  .button.donate {
    display: none;
  }

  .home-hero {
    background: url('/img/hero3.jpg') no-repeat center center;
    min-height: calc(100vh - 10rem);
    position: relative;
    @media all and (min-width: $breakpoint) {
      min-height: calc(100vh - 6rem);
    }

    .container {
      padding: 12rem 0 0 0;
      margin-left: 3rem;
      @media all and (min-width: $breakpoint) {
        padding: 7rem 0 0 0;
        margin-left: 8rem;
      }
    }
  }

  h1 {
    position: relative;
    z-index: 20;
    transform: rotate(-5deg);
    font-size: 4rem;
    line-height: 4rem;
    margin-top: -.75rem;

    @media all and (min-width: $breakpoint) {
      font-size: 5rem;
      line-height: 5rem;
      margin-bottom: 4rem;
    }

    span {
      display: block;

      &:last-child {
        margin-left: 8rem;
      }
    }
  }
</style>
