<template>
  <div>
    <secondary-page-hero title="Real Talk Matters"/>
    <v-spacer size="quad" class="u-hide-until--m"/>
    <v-spacer size="quad"/>
    <section class="l-container">
      <div class="l-grid l-grid--4x1 l-grid--1up--small l-grid--large-gutters">
        <div>
          <h2 class="u-space--bottom">#WhatMatters2020</h2>
          <media-block url="https://player.vimeo.com/video/393348113" class="u-space--bottom"/>
          <p class="u-space--bottom">BLM’s #WhatMatters2020 is a campaign aimed to maximize the impact of the BLM movement by galvanizing BLM supporters and allies to the polls in the 2020 U.S Presidential Election to build collective power and ensure candidates are held accountable for the issues that systematically and disproportionately impact Black and under-served communities across the nation.</p>
          <p class="u-space--bottom">BLM’s #WhatMatters2020 will focus on issues concerning racial injustice, police brutality, criminal justice reform, Black immigration, economic injustice, LGBTQIA+ and human rights, environmental injustice, access to healthcare, access to quality education, and voting rights and suppression.</p>
          <p class="u-space--bottom">This initiative will inspire and motivate people to ask themselves and their candidates are you really addressing What Matters in 2020?</p>
          <p>Find out more about BLM's <a target="_blank" href="https://blacklivesmatter.com/blms-whatmatters2020-goals-and-focus/">campaign goals and focus</a>.</p>        </div>
        <sidebar/>
      </div>
    </section>
  </div>
</template>

<script>
  import SecondaryPageHero from '../components/SecondaryPageHero'
  import Sidebar from '../components/Sidebar'
  import MediaBlock from 'vue-evolve/src/components/MediaBlock'
  import VSpacer from 'vue-evolve/src/components/VSpacer'

  export default {
    name: 'RealTalkMatters',
    components: {
      SecondaryPageHero,
      MediaBlock,
      Sidebar,
      VSpacer
    }
  }
</script>
