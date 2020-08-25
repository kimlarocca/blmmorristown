<template>
  <div>
    <secondary-page-hero title="Donate"/>
    <v-spacer size="quad" class="u-hide-until--m"/>
    <v-spacer size="quad"/>
    <section class="l-container">
      <div class="l-grid l-grid--4x1 l-grid--1up--small l-grid--large-gutters">
        <div>
          <div class="rich-text">
            <rich-text-renderer v-if="story.content.body[0].body" :document="story.content.body[0].body" />
          </div>
          <a class="button" :href="story.content.body[1].link.url" target="_blank">
            {{ story.content.body[1].button_copy }}
          </a>
          <br><br>
          <a class="button" :href="story.content.body[2].link.url" target="_blank">
            {{ story.content.body[2].button_copy }}
          </a>
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
    name: 'Donate',
    mixins: [storyblok],
    data () {
      return {
        slug: 'Donate'
      }
    },
    metaInfo () {
      return {
        title: 'Black Lives Matter Morristown | Donate',
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
