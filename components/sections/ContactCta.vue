<template>
  <section class="section contact-cta" aria-labelledby="cta-title" v-reveal>
    <div class="container">
      <h2 id="cta-title">¿Construimos algo?</h2>
      <p class="cta-text">
        Si tienes un proyecto, una idea o simplemente quieres conversar, escríbeme.
      </p>
      <div class="cta-actions">
        <router-link class="btn btn-primary" to="/contact">Contacto</router-link>
        <a class="btn btn-ghost" href="mailto:francismelendez134@gmail.com">Escríbeme</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactCta',
};
</script>

<style scoped>
.cta-text {
  max-width: 52ch;
  color: var(--text-muted);
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
}
</style>
