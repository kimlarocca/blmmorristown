<template>
  <div>
    <secondary-page-hero title="Contact Us"/>
    <v-spacer size="quad" class="u-hide-until--m"/>
    <v-spacer size="quad"/>
    <section class="l-container">
      <div class="l-grid l-grid--4x1 l-grid--1up--small l-grid--large-gutters">
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab magni, modi mollitia necessitatibus quod quos saepe tempore unde veritatis voluptates. Ab alias corporis laborum non officia quaerat rerum, sequi tempora!</p>
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
    name: 'Contact',
    components: {
      SecondaryPageHero,
      Sidebar,
      VSpacer
    }
  }
</script>
