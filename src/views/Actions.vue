<template>
  <div>
    <secondary-page-hero title="Actions"/>
    <v-spacer size="quad" class="u-hide-until--m"/>
    <v-spacer size="quad"/>
    <section class="l-container">
      <div class="l-grid l-grid--4x1 l-grid--1up--small l-grid--large-gutters">
        <div>
          <div v-for="action in content" :key="action._uid">
            <content-card
              :title="action.title"
              :image="action.image.filename"
              layout="1x4"
              :link="action.link.url"
              cta="learn more"
              class="u-space--double--bottom"
            >
              <template slot="content">
                <p>{{ action.description }}</p>
              </template>
            </content-card>
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
  import VSpacer from 'vue-evolve/src/components/VSpacer'
  import ContentCard from 'vue-evolve/src/components/ContentCard'
  import storyblok from '../mixins/storyblok.mixin'

  export default {
    name: 'Actions',
    mixins: [storyblok],
    data () {
      return {
        slug: 'Actions'
      }
    },
    metaInfo () {
      return {
        title: 'Black Lives Matter Morristown | Actions',
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
      VSpacer,
      ContentCard
    },
    computed: {
      content () {
        return this.story.content && this.story.content.body
      }
    }
  }
</script>
