<template>
  <div>
    <secondary-page-hero title="Gallery"/>
    <v-spacer size="quad" class="u-hide-until--m"/>
    <v-spacer size="quad"/>
    <p></p>
    <section class="l-container">
      <div class="l-grid l-grid--3up">
        <image-with-caption
          image="/img/gallery/1.jpg"
          alt-text="photo of black lives matter morristown nj"
          caption="by john doe"
        />
        <image-with-caption
          image="/img/gallery/2.jpg"
          alt-text="photo of black lives matter morristown nj"
        />
        <image-with-caption
          image="/img/gallery/6.jpg"
          alt-text="photo of black lives matter morristown nj"
        />
        <image-with-caption
          image="/img/gallery/4.jpg"
          alt-text="photo of black lives matter morristown nj"
        />
        <image-with-caption
          image="/img/gallery/3.jpg"
          alt-text="photo of black lives matter morristown nj"
        />
        <image-with-caption
          image="/img/gallery/5.jpg"
          alt-text="photo of black lives matter morristown nj"
        />
      </div>
    </section>
  </div>
</template>

<script>
  import SecondaryPageHero from '../components/SecondaryPageHero'
  import VSpacer from 'vue-evolve/src/components/VSpacer'
  import ImageWithCaption from 'vue-evolve/src/components/ImageWithCaption'

  export default {
    name: 'Gallery',
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
