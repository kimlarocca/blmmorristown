<template>
  <div>
    <secondary-page-hero title="Donate"/>
    <v-spacer size="quad" class="u-hide-until--m"/>
    <v-spacer size="quad"/>
    <section class="l-container">
      <div class="l-grid l-grid--4x1 l-grid--1up--small l-grid--large-gutters">
        <div>
          <h2>Fundraisers</h2>
          <br>
          <p>We hold local fundraisers often. Please check back soon for our next one!</p>
          <br>
          <br>
          <h3>Donate Now</h3>
          <br>
          <p>Please consider supporting us by donating to $blmmorristown (cashapp) or via PayPal at <a href="https://paypal.me/blmmorristown" target="_blank">paypal.me/blmmorristown</a>. We appreciate your support of the movement and our ongoing fight to end state-sanctioned violence, liberate Black people, and end white supremacy forever.</p>
          <br>
          <a class="button" href="https://paypal.me/blmmorristown" target="_blank">Donate to BLM Morristown</a>
          <br><br>
          <a class="button" href="https://secure.actblue.com/donate/ms_blm_homepage_2019" target="_blank">Donate to BLM</a>
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
    name: 'Donate',
    components: {
      SecondaryPageHero,
      Sidebar,
      VSpacer
    }
  }
</script>
