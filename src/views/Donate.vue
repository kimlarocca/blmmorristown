<template>
  <div>
    <secondary-page-hero title="Donate"/>
    <v-spacer size="quad" class="u-hide-until--m"/>
    <v-spacer size="quad"/>
    <section class="l-container">
      <div class="l-grid l-grid--4x1 l-grid--1up--small l-grid--large-gutters">
        <div>
          <div class="rich-text">
            <rich-text-renderer v-if="content" :document="content" />
          </div>
          <a class="button" :href="button_one_url" target="_blank">
            {{ button_one_copy }}
          </a>
          <br><br>
          <a class="button" :href="button_two_url" target="_blank">
            {{ button_two_copy }}
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
    },
    computed: {
      content () {
        return this.story.content && this.story.content.body && this.story.content.body[0].body
      },
      button_one_url () {
        return this.story.content && this.story.content.body && this.story.content.body[1].link.url
      },
      button_one_copy () {
        return this.story.content && this.story.content.body && this.story.content.body[1].button_copy
      },
      button_two_url () {
        return this.story.content && this.story.content.body && this.story.content.body[2].link.url
      },
      button_two_copy () {
        return this.story.content && this.story.content.body && this.story.content.body[2].button_copy
      }
    }
  }
</script>
