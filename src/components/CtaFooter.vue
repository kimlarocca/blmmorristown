<template>
  <section
    class="cta-footer u-background-color--gray--light u-padding--quad--top u-padding--quad--bottom u-align--center">
    <h3 class="u-align--center u-space--double--bottom">{{ header }}</h3>
    <div class="l-container l-grid l-grid--4up l-grid--2up--small">
      <a :href="link_one_url" target="_blank" class="cta u-background-color--primary u-padding">
        <h4 v-html="link_one_copy" />
      </a>
      <a :href="link_two_url" class="cta u-background-color--primary u-padding">
        <h4 v-html="link_two_copy" />
      </a>
      <a :href="link_three_url" class="cta u-background-color--primary u-padding">
        <h4 v-html="link_three_copy" />
      </a>
      <a :href="link_four_url" class="cta u-background-color--primary u-padding">
        <h4 v-html="link_four_copy" />
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
    },
    computed: {
      header () {
        return this.story.content && this.story.content.body && this.story.content.body[0].title
      },
      link_one_url () {
        return this.story.content && this.story.content.body && this.story.content.body[0].button_1_link.url
      },
      link_one_copy () {
        return this.story.content && this.story.content.body && this.story.content.body[0].button_1_copy
      },
      link_two_url () {
        return this.story.content && this.story.content.body && this.story.content.body[0].button_2_link.url
      },
      link_two_copy () {
        return this.story.content && this.story.content.body && this.story.content.body[0].button_2_copy
      },
      link_three_url () {
        return this.story.content && this.story.content.body && this.story.content.body[0].button_3_link.url
      },
      link_three_copy () {
        return this.story.content && this.story.content.body && this.story.content.body[0].button_3_copy
      },
      link_four_url () {
        return this.story.content && this.story.content.body && this.story.content.body[0].button_4_link.url
      },
      link_four_copy () {
        return this.story.content && this.story.content.body && this.story.content.body[0].button_4_copy
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
