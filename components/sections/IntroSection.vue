<template>
  <section class="section intro" aria-labelledby="intro-title" v-reveal>
    <div class="container intro-grid">
      <div class="intro-copy">
        <p class="section-label">01 / Intro — Software Developer · Programming Supervisor</p>
        <h1 id="intro-title" class="intro-title">
          Construyo cosas, aprendo sistemas y siempre estoy explorando algo nuevo.
        </h1>
        <p class="intro-lead">
          El software es mi profesión. La curiosidad es lo que conecta todo lo demás.
        </p>
        <p class="intro-human serif">Actualmente en Facture.cr, entre código, procesos y personas.</p>
        <p class="intro-tags mono">SOFTWARE · MOVIMIENTO · MÚSICA · JUEGOS · EXPERIMENTOS</p>
        <div class="intro-actions">
          <a class="btn btn-primary" href="#explora">Explora</a>
          <a class="btn btn-ghost" href="#trabajo">Ver trabajo</a>
        </div>
      </div>
      <div class="intro-photo">
        <picture>
          <source srcset="/images/yo2.webp" type="image/webp">
          <img
            src="/images/yo2.jpg"
            alt="Francis Meléndez"
            width="320"
            height="320"
            decoding="async"
          />
        </picture>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IntroSection',
};
</script>

<style scoped>
.intro-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) clamp(220px, 26vw, 320px);
  gap: var(--space-4);
  align-items: start;
}

.intro-photo img {
  display: block;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center top;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.intro-title {
  max-width: 20ch;
}

.intro-lead {
  max-width: 46ch;
  margin-bottom: var(--space-1);
  font-size: clamp(1.05rem, 2vw, 1.3rem);
  color: var(--text-muted);
}

.intro-human {
  margin: 0 0 var(--space-3);
  font-size: 1.05rem;
  color: var(--text-muted);
}

.intro-tags {
  margin: 0 0 var(--space-4);
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  color: var(--text-dim);
}

.intro-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
}

/* En pantallas estrechas: una columna, retrato debajo de los botones. */
@media (max-width: 860px) {
  .intro-grid {
    grid-template-columns: 1fr;
  }

  .intro-photo {
    max-width: 200px;
    margin-inline: auto;
  }
}
</style>
