<template>
  <div>
    <secondary-page-hero title="Gallery"/>
    <v-spacer size="quad" class="u-hide-until--m"/>
    <v-spacer size="quad"/>
    <p></p>
    <section class="l-container">
      <div class="l-grid l-grid--3up">
        <div v-for="photo in story.content.body" :key="photo._uid">
          <image-with-caption
            :image="photo.image.filename"
            :caption="photo.caption"
            :alt-text="photo.alt"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import SecondaryPageHero from '../components/SecondaryPageHero'
  import VSpacer from 'vue-evolve/src/components/VSpacer'
  import ImageWithCaption from 'vue-evolve/src/components/ImageWithCaption'
  import storyblok from '../mixins/storyblok.mixin'

  export default {
    name: 'Gallery',
    mixins: [storyblok],
    data () {
      return {
        slug: 'Gallery'
      }
    },
    metaInfo () {
      return {
        title: 'Black Lives Matter Morristown | Gallery',
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
      ImageWithCaption
    }
  }
</script>
