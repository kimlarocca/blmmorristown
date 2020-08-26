<template>
  <section
    class="cta-footer u-background-color--gray--light u-padding--quad--top u-padding--quad--bottom u-align--center">
    <h3 class="u-align--center u-space--double--bottom">{{ story.content.body[0].title }}</h3>
    <div class="l-container l-grid l-grid--4up l-grid--2up--small">
      <a :href="story.content.body[0].button_1_link.url" target="_blank" class="cta u-background-color--primary u-padding">
        <h4 v-html="story.content.body[0].button_1_copy" />
      </a>
      <a :href="story.content.body[0].button_2_link.url" class="cta u-background-color--primary u-padding">
        <h4 v-html="story.content.body[0].button_2_copy" />
      </a>
      <a :href="story.content.body[0].button_3_link.url" class="cta u-background-color--primary u-padding">
        <h4 v-html="story.content.body[0].button_3_copy" />
      </a>
      <a :href="story.content.body[0].button_4_link.url" class="cta u-background-color--primary u-padding">
        <h4 v-html="story.content.body[0].button_4_copy" />
      </a>
    </div>
  </section>
</template>

<script>
  import storyblok from '../mixins/storyblok.mixin'

  export default {
    name: 'CtaFooter',
    mixins: [storyblok],
    data () {
      return {
        slug: 'footer'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cta-footer {
    .cta {
      opacity: 1;
      transition: var(--transition);

      &:hover {
        opacity: var(--opacity-on-hover);
      }
    }

    a,
    a:visited,
    a:active {
      color: var(--color-black);
    }
  }
</style>
