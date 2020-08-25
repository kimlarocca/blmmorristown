<template>
  <div class="home">
    <section class="home-hero"></section>
    <section class="l-container">
      <h1>{{ story.content.body[0].headline_h1 }}</h1>
      <div class="u-align--center"><a class="button arrow" href="/Contact">how to join</a></div>
    </section>
    <v-spacer size="quin"/>
    <section class="l-container">
      <content-card
        :title="story.content.body[1].title"
        :link="story.content.body[1].bottom_link.cached_url"
        :cta="story.content.body[1].bottom_link_copy"
        :video="story.content.body[1].video.url"
        :image="story.content.body[1].image.filename"
        altText="Real Talk Matters"
        verticalAlignment="middle"
      >
        <template slot="content">
          <p class="u-space--bottom">
            {{ story.content.body[1].content.content[0].content[0].text }}
          </p>
        </template>
      </content-card>
    </section>
    <v-spacer size="quin"/>
    <div class="l-container">
      <hr>
    </div>
    <v-spacer size="quin"/>
    <section class="l-container">
      <h2 class="u-space--double--bottom u-align--center">Local News</h2>
      <div class="l-grid l-grid--3up">
        <template v-for="article in local_news">
          <card
            :key="article._uid"
            :image="article.image.filename"
            :altText="article.Title"
            :subtitle="article.Title"
            :hasTextLink="true"
            cta="Read More"
            :link="article.link.url"
            :description="article.Blurb"
          />
        </template>
      </div>
    </section>
    <v-spacer size="quin"/>
    <div class="l-container">
      <hr>
    </div>
    <v-spacer size="quin"/>
    <section class="l-container">
      <h2 class="u-space--double--bottom u-align--center">National News</h2>
      <div class="l-grid l-grid--3up">
        <template v-for="article in national_news">
          <card
            :key="article._uid"
            :image="article.image.filename"
            :altText="article.Title"
            :subtitle="article.Title"
            :hasTextLink="true"
            cta="Read More"
            :link="article.link.url"
            :description="article.Blurb"
          />
        </template>
      </div>
    </section>
  </div>
</template>

<script>
  import ContentCard from 'vue-evolve/src/components/ContentCard'
  import VSpacer from 'vue-evolve/src/components/VSpacer'
  import Card from 'vue-evolve/src/components/Card'
  import storyblok from '../mixins/storyblok.mixin'

  export default {
    name: 'Home',
    mixins: [storyblok],
    data () {
      return {
        slug: 'Home'
      }
    },
    metaInfo () {
      return {
        title: 'Black Lives Matter Morristown',
        meta: [
          {
            name: 'description',
            content: 'The website of the Morristown NJ chapter for Black Lives Matter.'
          }
        ]
      }
    },
    components: {
      ContentCard,
      VSpacer,
      Card
    },
    computed: {
      local_news () {
        return this.story && this.story.content && this.story.content.body && this.story.content.body.filter(article => article.component === 'local-news')
      },
      national_news () {
        return this.story && this.story.content && this.story.content.body && this.story.content.body.filter(article => article.component === 'national-news')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/breakpoints";

  .home {
    margin-top: -60px;
    @media all and (min-width: $medium) {
      margin-top: 0;
    }
  }

  .home-hero {
    background: url('/img/hero-small.jpg') no-repeat top right;
    min-height: 640px;
    @media all and (min-width: $medium) {
      background: url('/img/hero.jpg') no-repeat top right;
      min-height: 900px;
    }
  }

  .home h1 {
    max-width: 1100px;
    position: relative;
    z-index: 20;
    transform: rotate(-10deg);
    margin: -.5rem 1rem 2.5rem auto;
    font-size: 2rem;
    line-height: 3rem;
    text-align: center;

    @media all and (min-width: $medium) {
      text-align: left;
      font-size: 3rem;
      line-height: 3rem;
    }

    @media all and (min-width: $large) {
      margin: -2rem 0 3rem 4rem;
      font-size: 4.5rem;
      line-height: 4.5rem;
    }

    span {
      &:last-child {
        margin-left: 1rem;
        @media all and (min-width: $medium) {
          display: block;
          margin-left: 3rem;
        }
        @media all and (min-width: $large) {
          margin-left: 8rem;
        }
      }
    }
  }
</style>
