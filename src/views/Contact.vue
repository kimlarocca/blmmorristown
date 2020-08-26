<template>
  <div>
    <secondary-page-hero title="Contact Us"/>
    <v-spacer size="quad" class="u-hide-until--m"/>
    <v-spacer size="quad"/>
    <section class="l-container">
      <div class="l-grid l-grid--4x1 l-grid--1up--small l-grid--large-gutters">
        <div class="rich-text">
          <rich-text-renderer v-if="content" :document="content" />
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
    name: 'Contact',
    mixins: [storyblok],
    data () {
      return {
        slug: 'Contact'
      }
    },
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
    },
    computed: {
      content () {
        return this.story.content && this.story.content.body && this.story.content.body[0].body
      }
    }
  }
</script>
