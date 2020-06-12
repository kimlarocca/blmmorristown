<template>
  <div>
    <secondary-page-hero title="Gallery"/>
    <v-spacer size="quad" class="u-hide-until--m"/>
    <v-spacer size="quad"/>
    <section class="l-container">
      <div class="l-grid l-grid--4up">
        <card
          image="https://picsum.photos/768/400?grayscale"
          altText="alternative text"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
        <card
          image="https://picsum.photos/768/400?grayscale"
          altText="alternative text"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
        <card
          image="https://picsum.photos/768/400?grayscale"
          altText="alternative text"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
        <card
          image="https://picsum.photos/768/400?grayscale"
          altText="alternative text"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
      </div>
    </section>
  </div>
</template>

<script>
  import SecondaryPageHero from '../components/SecondaryPageHero'
  import VSpacer from 'vue-evolve/src/components/VSpacer'
  import Card from 'vue-evolve/src/components/Card'

  export default {
    name: 'Events',
    components: {
      SecondaryPageHero,
      VSpacer,
      Card
    }
  }
</script>
