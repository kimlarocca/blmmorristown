<template>
  <div>
    <secondary-page-hero title="Resources"/>
    <v-spacer size="quad" class="u-hide-until--m"/>
    <v-spacer size="quad"/>
    <section class="l-container">
      <div class="l-grid l-grid--4x1 l-grid--1up--small l-grid--large-gutters">
        <div>
          <h2 class="u-space--bottom">Coming Soon</h2>
          <p>Local resources are coming soon!</p>
          <br><br>
          <p>In the meantime, here are a few links to check out:</p>
          <br>
          <ul>
            <li><a href="https://www.d4pa.org" target="_blank">database for police abolition</a></li>
            <li><a href="https://blacklivesmatter.com/resources/" target="_blank">black lives matter resource page</a></li>
          </ul>
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
