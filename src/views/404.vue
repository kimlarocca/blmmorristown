<template>
  <div>
    <secondary-page-hero title="Not Found"/>
    <v-spacer size="oct"/>
    <section class="l-container">
      <div class="l-grid l-grid--4x1 l-grid--large-gutters">
        <div>
          <p>Sorry, but the page you were trying to view does not exist.</p>
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
    name: 'Home',
    metaInfo () {
      return {
        title: 'Black Lives Matter Morristown | Page Not Found',
        meta: [
          {
            name: 'description',
            content: 'The website of the Morristown NJ chapter for Black Lives Matter.'
          }
        ]
      }
    },
    components: {
      SecondaryPageHero,
      Sidebar,
      VSpacer
    }
  }
</script>
