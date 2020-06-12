<template>
  <div>
    <v-header/>
    <main>
      <slot/>
    </main>
    <cta-footer/>
    <v-footer/>
  </div>
</template>

<script>
  import VHeader from '../components/VHeader'
  import CtaFooter from '../components/CtaFooter'
  import VFooter from '../components/VFooter'

  export default {
    name: 'Default',
    components: { VHeader, CtaFooter, VFooter }
  }
</script>
