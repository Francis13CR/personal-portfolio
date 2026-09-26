<template>
  <section id="experimentos" class="section experiments" aria-labelledby="experimentos-title" v-reveal>
    <div class="container">
      <p class="section-label">05 / Experimentos</p>
      <h2 id="experimentos-title">Cosas que construyo por curiosidad</h2>
      <ul class="exp-grid" role="list">
        <li v-for="exp in experiments" :key="exp.title" class="exp-card">
          <h3>{{ exp.title }}</h3>
          <p>{{ exp.copy }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperimentsSection',
  data() {
    return {
      experiments: [
        {
          title: 'Herramientas y scripts propios',
          copy: 'Automatizaciones y utilidades que hago para mí, porque me molesta repetir trabajo.',
        },
        {
          title: 'Home lab e infraestructura',
          copy: 'Servidor propio, Docker y despliegues. Aprender rompiendo cosas en un entorno que controlo.',
        },
        {
          title: 'IA y agentes',
          copy: 'Experimentos con agentes de IA y automatización.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.exp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-2);
  margin: var(--space-3) 0 0;
  padding: 0;
  list-style: none;
}

.exp-card {
  padding: var(--space-3);
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
}

.exp-card h3 {
  margin-bottom: var(--space-1);
  color: var(--accent-creative);
}

.exp-card p {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.95rem;
}
</style>
