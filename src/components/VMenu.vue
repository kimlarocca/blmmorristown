<template>
  <div>
    <div class="menu">
      <a href="/Donate" class="button donate">donate</a>
      <i @click="menuOpen = true" class="fas fa-bars"></i>
    </div>
    <nav :class="{'open': menuOpen}" class="u-padding--double">
      <div class="close u-align--right"><i @click="menuOpen = false" class="fas fa-times"></i></div>
      <ul class="menu-links u-space--double--bottom">
        <li v-for="(link, index) in navigation" :key="index">
          <a :href="link.url">{{link.name}}</a>
        </li>
      </ul>
      <ul class="social-links">
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
    </nav>
  </div>
</template>

<script>
  import SocialLink from 'vue-evolve/src/components/SocialLink'
  import navigation from '../assets/json/navigation'

  export default {
    name: 'VMenu',
    components: { SocialLink },
    data: function () {
      return {
        navigation: navigation.navigation,
        menuOpen: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  $menuWidth: 300px;
  @import "src/assets/scss/breakpoints";

  .menu {
    position: absolute;
    top: 1rem;
    right: 2.5rem;
    display: flex;
    @media all and (min-width: $medium) {
      right: 3.5rem;
    }
    @media all and (min-width: $large) {
      right: 4.5rem;
    }

    i {
      color: var(--color-black);
      font-size: 2.2rem;
      cursor: pointer;
    }
  }

  nav {
    position: absolute;
    top: -1rem;
    bottom: 0;
    right: -$menuWidth;
    min-height: 100vh;
    height: 100%;
    width: $menuWidth;
    color: var(--color-white);
    font-weight: 600;
    background: var(--color-black);
    transition: var(--transition);
    @media all and (min-width: $medium) {
      top: -2rem;
    }
    @media all and (min-width: $large) {
      top: -3rem;
    }

    a,
    a:visited,
    a:active {
      color: var(--color-white);

      &:hover {
        color: var(--color-primary);
      }
    }

    i {
      color: var(--color-white);
      font-size: 2.2rem;
      cursor: pointer;
    }

    &.open {
      right: 0;
    }

    .menu-links {
      list-style: none;

      li {
        display: block;
        margin: 1rem 0;
        font-family: var(--font-family-tertiary);
        font-size: var(--font-size-7);
      }
    }
  }

  .donate {
    margin-right: 1.5rem;
    padding: .25rem 1.5rem;
    line-height: 1.45rem;
  }
</style>
