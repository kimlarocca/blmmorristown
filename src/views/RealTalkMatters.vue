<template>
  <div>
    <secondary-page-hero title="Real Talk Matters"/>
    <v-spacer size="quad" class="u-hide-until--m"/>
    <v-spacer size="quad"/>
    <section class="l-container">
      <div class="l-grid l-grid--4x1 l-grid--1up--small l-grid--large-gutters">
        <div>
          <h2 class="u-space--bottom">{{ headline }}</h2>
          <media-block v-if="video_url" :url="video_url" class="u-space--bottom"/>
          <div class="rich-text">
            <rich-text-renderer v-if="content" :document="content"/>
          </div>
        </div>
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
  import storyblok from '../mixins/storyblok.mixin'

  export default {
    name: 'RealTalkMatters',
    mixins: [storyblok],
    data () {
      return {
        slug: 'RealTalkMatters'
      }
    },
    metaInfo () {
      return {
        title: 'Black Lives Matter Morristown | Real Talk Matters',
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
      MediaBlock,
      Sidebar,
      VSpacer
    },
    computed: {
      headline () {
        return this.story.content && this.story.content.body && this.story.content.body[0].headline_h1
      },
      video_url () {
        return this.story.content && this.story.content.body && this.story.content.body[1].link.url
      },
      content () {
        return this.story.content && this.story.content.body && this.story.content.body[2].body
      }
    }
  }
</script>
