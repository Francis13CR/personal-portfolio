<template>
  <section class="section page notfound" aria-labelledby="notfound-title" v-reveal>
    <div class="container">
      <p class="section-label">Error 404</p>
      <h1 id="notfound-title">Esta página no existe</h1>
      <p class="lede">
        Puede que el enlace esté roto o que la página se haya movido. Prueba desde el inicio o revisa
        los proyectos.
      </p>
      <div class="notfound-actions">
        <router-link class="btn btn-primary" to="/">Volver al inicio</router-link>
        <router-link class="btn btn-ghost" to="/proyectos">Ver proyectos</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { setSeo, removeJsonLd } from '../../assets/js/seo.js';

export default {
  name: 'NotFoundPage',
  mounted() {
    setSeo({
      title: 'Página no encontrada — Francis Meléndez',
      description: 'La página que buscas no existe o se movió.',
      path: this.$route.path,
      robots: 'noindex,follow',
    });
    removeJsonLd('breadcrumb');
    removeJsonLd('project');
  },
};
</script>

<style scoped>
.notfound-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
  margin-top: var(--space-3);
}
</style>
