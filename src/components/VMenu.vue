<template>
  <div>
    <div class="menu">
      <a href="/Donate" class="button donate">donate</a>
      <i @click="menuOpen = true" class="fas fa-bars"></i>
    </div>
    <transition name="slide-fade">
      <nav v-if="menuOpen" class="u-padding--double">
        <div class="close u-align--right"><i @click="menuOpen = false" class="fas fa-times"></i></div>
        <ul class="menu-links u-space--double--bottom">
          <li v-for="(link, index) in navigation" :key="index">
            <a :href="link.url" :target="link.target">{{link.name}}</a>
          </li>
        </ul>
        <ul class="social-links">
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
      </nav>
    </transition>
  </div>
</template>

<script>
  import SocialLink from 'vue-evolve/src/components/SocialLink'
  import navigation from '../assets/json/navigation'
  import storyblok from '../mixins/storyblok.mixin'

  export default {
    name: 'VMenu',
    components: { SocialLink },
    mixins: [storyblok],
    data: function () {
      return {
        navigation: navigation.navigation,
        menuOpen: false,
        slug: 'footer'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/scss/breakpoints";

  .menu {
    position: absolute;
    top: 1rem;
    right: 2rem;
    display: flex;
    @media all and (min-width: $medium) {
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
    top: 0;
    bottom: 0;
    right: 0;
    min-height: 100vh;
    height: 100%;
    width: 300px;
    color: var(--color-white);
    font-weight: 600;
    background: var(--color-black);
    transition: var(--transition);

    @media all and (min-width: $medium) {
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

  .button.donate {
    margin-right: 1.5rem;
    padding: .25rem 1.5rem;
    line-height: 1.45rem;
    background: var(--color-secondary);
    border: 2px solid var(--color-secondary);
    color: var(--color-white);
    &:hover {
      border: 2px solid var(--color-secondary);
      color: var(--color-secondary);
    }
  }
</style>
