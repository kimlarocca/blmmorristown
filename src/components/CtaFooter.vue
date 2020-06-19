<template>
  <section
    class="cta-footer u-background-color--gray--light u-padding--quad--top u-padding--quad--bottom u-align--center">
    <h3 class="u-align--center u-space--double--bottom">Take Action Today</h3>
    <div class="l-container l-grid l-grid--4up l-grid--2up--small">
      <a href="https://blacklivesmatter.com/register-to-vote/" target="_blank" class="cta u-background-color--primary u-padding">
        <h4>Register<br>To Vote</h4>
      </a>
      <a href="/Events" class="cta u-background-color--primary u-padding">
        <h4>Attend<br>An Event</h4>
      </a>
      <a href="https://mailchi.mp/124a0dc66c91/join-our-mailing-list" target="_blank" class="cta u-background-color--primary u-padding">
        <h4>Join Our<br>Mailing List</h4>
      </a>
      <a href="https://paypal.me/blmmorristown" target="_blank" class="cta u-background-color--primary u-padding">
        <h4>Donate<br>to BLM</h4>
      </a>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'CtaFooter'
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
