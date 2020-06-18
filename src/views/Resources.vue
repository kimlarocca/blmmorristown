<template>
  <div>
    <secondary-page-hero title="Resources"/>
    <v-spacer size="quad" class="u-hide-until--m"/>
    <v-spacer size="quad"/>
    <section class="l-container">
      <div class="l-grid l-grid--4x1 l-grid--1up--small l-grid--large-gutters">
        <div>
          <h2 class="u-space--bottom">Coming Soon</h2>
          <p>Local resources are coming soon!<br><br>In the meantime, <a href="https://blacklivesmatter.com/resources/" target="_blank">click here to visit Black Lives Matter's resources page</a>.</p>
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
