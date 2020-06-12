<template>
  <div>
    <secondary-page-hero title="Events"/>
    <v-spacer size="quad" class="u-hide-until--m"/>
    <v-spacer size="quad"/>
    <section class="l-container">
      <content-blade
        title="Title"
        link="http://www.google.com"
        cta="check this out"
        image="https://picsum.photos/768/400?grayscale"
        layout="1x4"
        class="u-space--double--bottom"
      >
        <template slot="content">
          <p>Proin non vehicula ante. Morbi ornare, est ac euismod ultricies, ex ante lacinia
            lacus, in mollis neque velit a lorem. Nulla feugiat sem vel augue varius tincidunt. Quisque
            ultrices
          </p>
        </template>
      </content-blade>
      <content-blade
        title="Title"
        link="http://www.google.com"
        cta="check this out"
        image="https://picsum.photos/768/400?grayscale"
        layout="1x4"
        class="u-space--double--bottom"
      >
        <template slot="content">
          <p>Proin non vehicula ante. Morbi ornare, est ac euismod ultricies, ex ante lacinia
            lacus, in mollis neque velit a lorem. Nulla feugiat sem vel augue varius tincidunt. Quisque
            ultrices
          </p>
        </template>
      </content-blade>
    </section>
  </div>
</template>

<script>
  import SecondaryPageHero from '../components/SecondaryPageHero'
  import VSpacer from 'vue-evolve/src/components/VSpacer'
  import ContentBlade from 'vue-evolve/src/components/ContentBlade'

  export default {
    name: 'Events',
    components: {
      SecondaryPageHero,
      VSpacer,
      ContentBlade
    }
  }
</script>
