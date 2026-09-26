<template>
  <a class="skip-link" href="#main">Saltar al contenido</a>
  <SiteHeader />
  <main id="main" tabindex="-1">
    <router-view />
  </main>
  <SiteFooter />
</template>

<script>
import SiteHeader from '../components/layout/SiteHeader.vue';
import SiteFooter from '../components/layout/SiteFooter.vue';

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteFooter,
  },
};
</script>
