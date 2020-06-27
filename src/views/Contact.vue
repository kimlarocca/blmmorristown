<template>
  <div>
    <secondary-page-hero title="Contact Us"/>
    <v-spacer size="quad" class="u-hide-until--m"/>
    <v-spacer size="quad"/>
    <section class="l-container">
      <div class="l-grid l-grid--4x1 l-grid--1up--small l-grid--large-gutters">
        <div>
          <h2 class="u-space--bottom">Want to help?</h2>
          <p>Please contact us at <a href="mailto:blmmorristown@gmail.com">blmmorristown @ gmail.com</a></p>
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
    metaInfo () {
      return {
        title: 'Black Lives Matter Morristown | Contact',
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
