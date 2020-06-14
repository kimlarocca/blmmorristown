<template>
  <footer>
    <div class="logo u-align--center u-space--double--bottom">
      <a href="/"><img alt="black lives matter morristown nj" src="/img/logo-footer.png"/></a>
    </div>
    <nav class="l-container u-align--center">
      <ul>
        <li v-for="(link, index) in navigation" :key="index">
          <a :href="link.url">{{link.name}}</a>
        </li>
      </ul>
    </nav>
    <ul class="social-links u-align--center u-space--double--top">
      <social-link
        icon="fab fa-facebook-f"
        link="https://www.facebook.com"
        label="facebook">
      </social-link>
      <social-link
        icon="fab fa-twitter"
        link="https://www.twitter.com"
        label="twitter"
      >
      </social-link>
      <social-link
        icon="fab fa-youtube"
        link="https://www.youtube.com"
        label="youtube"
      >
      </social-link>
      <social-link
        icon="fab fa-instagram"
        link="https://www.instagram.com"
        label="instagram"
      >
      </social-link>
      <social-link
        icon="fab fa-linkedin-in"
        link="https://www.linkedin.com"
        label="linkedin"
      >
      </social-link>
    </ul>
  </footer>
</template>

<script>
  import SocialLink from 'vue-evolve/src/components/SocialLink'
  import navigation from '../assets/json/navigation'

  export default {
    name: 'VFooter',
    components: { SocialLink },
    data: function () {
      return {
        navigation: navigation.navigation
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
