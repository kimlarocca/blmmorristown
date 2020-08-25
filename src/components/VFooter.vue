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
        v-if="story.content.body[1].facebook.url"
        icon="fab fa-facebook-f"
        :link="story.content.body[1].facebook.url"
        label="facebook">
      </social-link>
      <social-link
        v-if="story.content.body[1].twitter.url"
        icon="fab fa-twitter"
        :link="story.content.body[1].twitter.url"
        label="twitter"
      >
      </social-link>
      <social-link
        v-if="story.content.body[1].youtube.url"
        icon="fab fa-youtube"
        :link="story.content.body[1].youtube.url"
        label="youtube"
      >
      </social-link>
      <social-link
        v-if="story.content.body[1].instagram.url"
        icon="fab fa-instagram"
        :link="story.content.body[1].facebook.url"
        label="instagram"
      >
      </social-link>
      <social-link
        v-if="story.content.body[1].linkedin.url"
        icon="fab fa-linkedin-in"
        :link="story.content.body[1].linkedin.url"
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
