<template>
  <div>
    <secondary-page-hero title="Events"/>
    <v-spacer size="quad" class="u-hide-until--m"/>
    <v-spacer size="quad"/>
    <section class="l-container">
      <div v-for="event in story.content.body" :key="event._uid">
        <content-card
          :title="event.title"
          :image="event.image.filename"
          layout="1x4"
          :link="event.link.url"
          cta="learn more"
          class="u-space--double--bottom"
        >
          <template slot="content">
            <p>{{ event.description }}</p>
          </template>
        </content-card>
      </div>
    </section>
  </div>
</template>

<script>
  import SecondaryPageHero from '../components/SecondaryPageHero'
  import VSpacer from 'vue-evolve/src/components/VSpacer'
  import ContentCard from 'vue-evolve/src/components/ContentCard'
  import storyblok from '../mixins/storyblok.mixin'

  export default {
    name: 'Events',
    mixins: [storyblok],
    data () {
      return {
        slug: 'Events'
      }
    },
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
