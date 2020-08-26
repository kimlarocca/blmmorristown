<template>
  <div>
    <secondary-page-hero title="Events"/>
    <v-spacer size="quad" class="u-hide-until--m"/>
    <v-spacer size="quad"/>
    <section class="l-container">
      <content-card
        title="Juneteenth March & Rally"
        image="/img/sidebar-image.jpg"
        layout="1x4"
        link="https://www.instagram.com/p/CBiyVchsPUh/"
        cta="learn more"
        class="u-space--double--bottom"
      >
        <template slot="content">
          <p>Come out and celebrate black excellence while fighting for our rights on OUR Independence Day. June 15th, Boonton 5pm.</p>
        </template>
      </content-card>
    </section>
  </div>
</template>

<script>
  import SecondaryPageHero from '../components/SecondaryPageHero'
  import VSpacer from 'vue-evolve/src/components/VSpacer'
  import ContentCard from 'vue-evolve/src/components/ContentCard'

  export default {
    name: 'Events',
    metaInfo () {
      return {
        title: 'Black Lives Matter Morristown | Events',
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
      VSpacer,
      ContentCard
    }
  }
</script>
