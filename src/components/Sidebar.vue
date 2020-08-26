<template>
  <section class="sidebar">
    <img class="u-space--bottom"
         src="/img/sidebar-image.jpg"
         alt="black lives matter protest in morristown nj"/>
    <div class="u-background-color--gray--light u-padding--double u-space--bottom">
      <h3 class="u-align--center u-space--bottom">{{ header_one }}</h3>
      <div class="rich-text">
        <rich-text-renderer v-if="body_one" :document="body_one" />
      </div>
    </div>
    <div class="u-background-color--gray--light u-padding--double">
      <h3 class="u-align--center u-space--bottom">{{ header_two }}</h3>
      <div class="rich-text">
        <rich-text-renderer v-if="body_two" :document="body_two" />
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
    },
    computed: {
      header_one () {
        return this.story.content && this.story.content.body && this.story.content.body[0].title
      },
      body_one () {
        return this.story.content && this.story.content.body && this.story.content.body[0].copy
      },
      header_two () {
        return this.story.content && this.story.content.body && this.story.content.body[1].title
      },
      body_two () {
        return this.story.content && this.story.content.body && this.story.content.body[1].copy
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar {
  }
</style>
