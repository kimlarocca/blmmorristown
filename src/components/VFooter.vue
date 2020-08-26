<template>
  <footer>
    <div class="logo u-align--center u-space--double--bottom">
      <a href="/"><img alt="black lives matter morristown nj" src="/img/logo-footer.png"/></a>
    </div>
    <nav class="l-container u-align--center">
      <ul>
        <li v-for="(link, index) in navigation" :key="index">
          <a :href="link.url" :target="link.target">{{link.name}}</a>
        </li>
      </ul>
    </nav>
    <ul class="social-links u-align--center u-space--double--top">
      <social-link
        v-if="facebook"
        icon="fab fa-facebook-f"
        :link="facebook"
        label="facebook">
      </social-link>
      <social-link
        v-if="twitter"
        icon="fab fa-twitter"
        :link="twitter"
        label="twitter"
      >
      </social-link>
      <social-link
        v-if="youtube"
        icon="fab fa-youtube"
        :link="youtube"
        label="youtube"
      >
      </social-link>
      <social-link
        v-if="instagram"
        icon="fab fa-instagram"
        :link="instagram"
        label="instagram"
      >
      </social-link>
      <social-link
        v-if="linkedin"
        icon="fab fa-linkedin-in"
        :link="linkedin"
        label="linkedin"
      >
      </social-link>
    </ul>
  </footer>
</template>

<script>
  import SocialLink from 'vue-evolve/src/components/SocialLink'
  import navigation from '../assets/json/navigation'
  import storyblok from '../mixins/storyblok.mixin'
export default {
    name: 'VFooter',
    components: { SocialLink },
    mixins: [storyblok],
    data: function () {
      return {
        navigation: navigation.navigation,
        slug: 'footer'
      }
    },
    computed: {
      facebook () {
        return this.story.content && this.story.content.body && this.story.content.body[1].facebook.url
      },
      twitter () {
        return this.story.content && this.story.content.body && this.story.content.body[1].twitter.url
      },
      youtube () {
        return this.story.content && this.story.content.body && this.story.content.body[1].youtube.url
      },
      instagram () {
        return this.story.content && this.story.content.body && this.story.content.body[1].instagram.url
      },
      linkedin () {
        return this.story.content && this.story.content.body && this.story.content.body[1].linkedin.url
      }
    }
  }
</script>

<style lang="scss" scoped>
  footer {
    background: var(--color-black);
    padding: 3rem;
    color: var(--color-white);

    .logo {
      filter: invert(100%);
    }

    nav {
      ul {
        list-style: none;

        li {
          display: inline-block;
          margin: .5rem;
        }
      }
    }

    a,
    a:visited,
    a:active {
      color: var(--color-white);
      font-weight: 600;
      font-family: var(--font-family-tertiary);
      font-size: var(--font-size-7);

      &:hover {
        color: var(--color-primary);
      }
    }
  }
</style>
