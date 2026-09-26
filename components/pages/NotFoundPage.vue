<template>
  <section class="section page notfound" aria-labelledby="notfound-title" v-reveal>
    <div class="container notfound-inner">
      <div class="notfound-text">
        <p class="section-label">Error 404</p>
        <h1 id="notfound-title">Esta página no existe</h1>
        <p class="lede">
          Puede que el enlace esté roto o que la página se haya movido. Prueba desde el inicio o
          revisa los proyectos.
        </p>
        <p class="notfound-aside">
          El camarón buscó por todos los directorios y no encontró esta página.
        </p>
        <div class="notfound-actions">
          <router-link class="btn btn-primary" to="/">Volver al inicio</router-link>
          <router-link class="btn btn-ghost" to="/proyectos">Ver proyectos</router-link>
        </div>
      </div>
      <figure class="notfound-mascot">
        <picture>
          <source srcset="/images/mascot-1024.webp" type="image/webp">
          <img
            src="/images/mascot-1024.jpg"
            alt="Camarón en llamas escribiendo código frente a su computadora"
            width="1024"
            height="1024"
            loading="lazy"
            decoding="async"
          >
        </picture>
      </figure>
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
.notfound-inner {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: var(--space-6);
  align-items: center;
}

.notfound-text {
  max-width: 56ch;
}

.notfound-aside {
  margin: var(--space-2) 0 0;
  max-width: 56ch;
  font: 400 0.82rem/1.6 var(--font-mono);
  color: var(--text-dim);
}

.notfound-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
  margin-top: var(--space-3);
}

.notfound-mascot {
  margin: 0;
  justify-self: end;
  width: 100%;
}

.notfound-mascot img {
  display: block;
  width: 100%;
  max-width: 420px;
  height: auto;
  margin-left: auto;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

@media (max-width: 860px) {
  .notfound-inner {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .notfound-mascot {
    justify-self: start;
  }

  .notfound-mascot img {
    max-width: 320px;
    margin-left: 0;
  }
}
</style>
