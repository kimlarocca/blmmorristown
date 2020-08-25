<template>
  <section class="sidebar">
    <img class="u-space--bottom"
         src="/img/sidebar-image.jpg"
         alt="black lives matter protest in morristown nj"/>
    <div class="u-background-color--gray--light u-padding--double u-space--bottom">
      <h3 class="u-align--center u-space--bottom">{{ story.content.body[0].title }}</h3>
      <div class="rich-text">
        <rich-text-renderer v-if="story.content.body[0].copy" :document="story.content.body[0].copy" />
      </div>
    </div>
    <div class="u-background-color--gray--light u-padding--double">
      <h3 class="u-align--center u-space--bottom">{{ story.content.body[1].title }}</h3>
      <div class="rich-text">
        <rich-text-renderer v-if="story.content.body[1].copy" :document="story.content.body[1].copy" />
      </div>
    </div>
  </section>
</template>

<script>
  import storyblok from '../mixins/storyblok.mixin'

  export default {
    name: 'Sidebar',
    mixins: [storyblok],
    data () {
      return {
        slug: 'side-bar'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar {
  }
</style>
