<template>
  <div>
    <secondary-page-hero title="Resources"/>
    <v-spacer size="quad" class="u-hide-until--m"/>
    <v-spacer size="quad"/>
    <section class="l-container">
      <div class="l-grid l-grid--4x1 l-grid--1up--small l-grid--large-gutters">
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur eius illo nulla quas.
            Accusamus animi atque minus nesciunt nihil quam quo vel, voluptatem! Architecto blanditiis mollitia nesciunt
            nostrum quisquam.</p>
        </div>
        <sidebar/>
      </div>
    </section>
  </div>
</template>

<script>
  import SecondaryPageHero from '../components/SecondaryPageHero'
  import Sidebar from '../components/Sidebar'
  import VSpacer from 'vue-evolve/src/components/VSpacer'

  export default {
    name: 'Resources',
    components: {
      SecondaryPageHero,
      Sidebar,
      VSpacer
    }
  }
</script>
