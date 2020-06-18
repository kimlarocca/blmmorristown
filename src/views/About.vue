<template>
  <div>
    <secondary-page-hero title="About Us"/>
    <v-spacer size="quad" class="u-hide-until--m"/>
    <v-spacer size="quad"/>
    <section class="l-container">
      <div class="l-grid l-grid--4x1 l-grid--1up--small l-grid--large-gutters">
        <div>
          <h2>Black Lives Matter</h2>
          <br>
          <p>#BlackLivesMatter was founded in 2013 in response to the acquittal of Trayvon Martin’s murderer. Black Lives
            Matter Foundation, Inc is a global organization in the US, UK, and Canada, whose mission is to eradicate white
            supremacy and build local power to intervene in violence inflicted on Black communities by the state and
            vigilantes. By combating and countering acts of violence, creating space for Black imagination and innovation,
            and centering Black joy, we are winning immediate improvements in our lives.</p>
          <br>
          <h3>Mission Statement</h3>
          <br>
          <p><strong>We are expansive.</strong> We are a collective of liberators who believe in an inclusive and spacious
            movement. We also believe that in order to win and bring as many people with us along the way, we must move beyond the narrow
            nationalism that is all too prevalent in Black communities. We must ensure we are building a movement that
            brings all of us to the front.</p>
          <br>
          <p><strong>We affirm the lives</strong> of Black queer and trans folks, disabled folks, undocumented folks, folks
            with records, women, and all Black lives along the gender spectrum. Our network centers those who have been
            marginalized within Black liberation movements.</p>
          <br>
          <p><strong>We are working</strong> for a world where Black lives are no longer systematically targeted for demise.</p>
          <br>
          <p><strong>We affirm our humanity,</strong> our contributions to this society, and our resilience in the face of deadly oppression.</p>
          <br>
          <p>The call for Black lives to matter is a rallying cry for ALL Black lives striving for liberation.</p>
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
    name: 'About',
    components: {
      SecondaryPageHero,
      Sidebar,
      VSpacer
    }
  }
</script>
