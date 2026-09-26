<template>
  <section id="trabajo" class="section work" aria-labelledby="trabajo-title" v-reveal>
    <div class="container">
      <p class="section-label">03 / Trabajo</p>
      <h2 id="trabajo-title">Facture.cr, un caso de estudio</h2>
      <p class="lede">
        La mejor forma de explicar cómo trabajo no es una lista de tecnologías, sino el sistema que
        uso para que las cosas salgan.
      </p>

      <ol class="flow" role="list" aria-label="Flujo de trabajo">
        <li
          v-for="(step, i) in flow"
          :key="step"
          class="flow-step"
          :class="{ 'is-final': i === flow.length - 1 }"
        >
          <span class="flow-name mono">{{ step }}</span>
        </li>
      </ol>

      <dl class="case">
        <div v-for="item in caseItems" :key="item.term" class="case-item">
          <dt class="case-term mono">{{ item.term }}</dt>
          <dd class="case-desc">{{ item.desc }}</dd>
        </div>
      </dl>
    </div>

    <div class="container projects-block">
      <h3 id="proyectos" class="projects-title">Proyectos</h3>
      <ul class="project-list" role="list">
        <li v-for="(p, i) in proyectos" :key="p.id" class="project-row">
          <span class="project-num mono">{{ pad(i) }}</span>
          <div class="project-main">
            <h4 class="project-name">{{ shortTitle(p.title) }}</h4>
            <p class="project-desc">{{ shortDesc(p.description) }}</p>
            <ul class="tech" role="list" aria-label="Tecnologías">
              <li v-for="t in p.technologies.slice(0, 4)" :key="t" class="tech-chip mono">{{ t }}</li>
            </ul>
          </div>
          <router-link class="project-link mono" :to="`/projects/${p.id}`">Ver ficha →</router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { getBlogPosts } from '../../assets/js/projects-data.js';

export default {
  name: 'WorkSection',
  data() {
    return {
      proyectos: [],
      flow: ['Backlog', 'Refinado', 'Desarrollo', 'Revisión', 'QA', 'Desplegado'],
      caseItems: [
        {
          term: 'Problema',
          desc: 'Facture.cr crecía: más clientes, más facturación electrónica, más soporte y features al mismo tiempo. El trabajo se gestionaba de forma reactiva.',
        },
        {
          term: 'Rol',
          desc: 'Full Stack Developer & Programming Supervisor: desarrollo, priorización, refinamiento, asignación, seguimiento y QA.',
        },
        {
          term: 'Sistema',
          desc: 'Scrum o Kanban según el ticket, stand-ups de 10 minutos, métricas (tiempo de resolución, bugs vs proyectos, tickets bloqueados), regla de no asignar trabajo por WhatsApp y QA obligatorio antes de producción.',
        },
        {
          term: 'Qué cambié',
          desc: 'Ordené el backlog, definí el flujo y las reglas, y empecé a medir.',
        },
        {
          term: 'Resultado',
          desc: 'Menos trabajo por WhatsApp, tickets mejor redactados y QA antes de producción.',
        },
      ],
    };
  },
  async mounted() {
    this.proyectos = await getBlogPosts();
  },
  methods: {
    pad(i) {
      return String(i + 1).padStart(2, '0');
    },
    shortTitle(title) {
      return (title || '').split(' — ')[0];
    },
    shortDesc(description) {
      const text = (description || '').replace(/\s+/g, ' ').trim();
      if (text.length <= 140) {
        return text;
      }
      return `${text.slice(0, 140).replace(/\s\S*$/, '')}…`;
    },
  },
};
</script>

<style scoped>
.flow {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
  margin: var(--space-4) 0;
  padding: 0;
  list-style: none;
}

.flow-step {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--bg-2);
}

.flow-step + .flow-step::before {
  content: '→';
  color: var(--text-dim);
}

.flow-name {
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  color: var(--text-muted);
}

.flow-step.is-final {
  border-color: var(--accent-software);
  background: var(--accent-dim);
}

.flow-step.is-final .flow-name {
  color: var(--accent-software);
  font-weight: 600;
}

.case {
  margin: 0;
  border-top: 1px solid var(--line);
}

.case-item {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--line);
}

.case-term {
  margin: 0;
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent-software);
}

.case-desc {
  margin: 0;
  max-width: 68ch;
  color: var(--text-muted);
}

.projects-block {
  margin-top: var(--space-6);
}

.projects-title {
  margin-bottom: var(--space-2);
}

.project-list {
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--line);
}

.project-row {
  display: grid;
  grid-template-columns: 48px 1fr auto;
  gap: var(--space-3);
  align-items: baseline;
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--line);
}

.project-num {
  font-size: 0.75rem;
  color: var(--text-dim);
}

.project-name {
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
}

.project-desc {
  margin: 0 0 var(--space-1);
  color: var(--text-muted);
  font-size: 0.92rem;
}

.tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.tech-chip {
  padding: 0.2rem 0.55rem;
  font-size: 0.65rem;
  letter-spacing: 0.04em;
  color: var(--text-dim);
  border: 1px solid var(--line);
  border-radius: 999px;
}

.project-link {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

@media (max-width: 720px) {
  .case-item {
    grid-template-columns: 1fr;
    gap: var(--space-1);
  }

  .project-row {
    grid-template-columns: 32px 1fr;
  }

  .project-link {
    grid-column: 2;
  }
}
</style>
