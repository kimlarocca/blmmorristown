<template>
  <div>
    <secondary-page-hero title="Resources"/>
    <v-spacer size="quad" class="u-hide-until--m"/>
    <v-spacer size="quad"/>
    <section class="l-container">
      <div class="l-grid l-grid--4x1 l-grid--1up--small l-grid--large-gutters">
        <div class="rich-text">
          <rich-text-renderer v-if="story.content.body[0].body" :document="story.content.body[0].body" />
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
  import storyblok from '../mixins/storyblok.mixin'

  export default {
    name: 'Resources',
    mixins: [storyblok],
    data () {
      return {
        slug: 'Resources'
      }
    },
    metaInfo () {
      return {
        title: 'Black Lives Matter Morristown | Resources',
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
