<template>
  <section id="trabajo" class="section work" aria-labelledby="trabajo-title" v-reveal>
    <div class="container">
      <p class="section-label">03 / Trabajo</p>
      <h2 id="trabajo-title">Mi trabajo actual: Facture.cr</h2>
      <p class="work-tag mono">TRABAJO ACTUAL · ENE 2024 – PRESENTE</p>
      <p class="lede">
        Soy Full Stack Developer. Construyo y mantengo los proyectos de Facture.cr de punta a punta:
        frontend, backend, base de datos y despliegue; además coordino al equipo y garantizo la
        calidad antes de producción.
      </p>

      <div class="roles" role="group" aria-label="Mis roles y áreas en Facture.cr">
        <ul class="role-list" role="list">
          <li v-for="role in roles" :key="role.id">
            <button
              type="button"
              class="role-chip"
              :class="['is-' + role.accent, { 'is-active': role.id === activeRoleId }]"
              :aria-pressed="role.id === activeRoleId ? 'true' : 'false'"
              aria-controls="role-panel"
              @click="select(role.id)"
            >
              <span class="role-mark" aria-hidden="true"></span>{{ role.label }}
            </button>
          </li>
        </ul>
      </div>

      <div
        id="role-panel"
        class="role-panel"
        :class="'is-' + activeRole.accent"
        role="region"
        aria-labelledby="role-panel-title"
        aria-live="polite"
      >
        <p class="role-kicker mono" aria-hidden="true">ROL</p>
        <h3 id="role-panel-title">{{ activeRole.label }}</h3>
        <p class="role-copy">{{ activeRole.copy }}</p>
      </div>

      <p class="flow-line mono">
        <span class="visually-hidden">Flujo de trabajo: </span>BACKLOG → REFINADO → DESARROLLO →
        REVISIÓN → QA → DESPLEGADO
      </p>
      <p class="impact">
        Resultado: QA obligatorio antes de producción, menos trabajo por WhatsApp y tickets mejor
        redactados.
      </p>
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
          <router-link class="project-link mono" :to="`/proyectos/${projectSlug(p)}`">Ver ficha →</router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { getBlogPosts } from '../../assets/js/projects-data.js';
import { projectSlug } from '../../assets/js/slug.js';

export default {
  name: 'WorkSection',
  data() {
    return {
      proyectos: [],
      activeRoleId: 'fullstack',
      roles: [
        {
          id: 'fullstack',
          label: 'Full Stack',
          accent: 'software',
          copy: 'Desarrollo de punta a punta: frontend con Vue.js 3, backend con PHP y Laravel, MySQL y despliegue con Docker.',
        },
        {
          id: 'supervisor',
          label: 'Programming Supervisor',
          accent: 'software',
          copy: 'Lidero el equipo: priorizo el backlog, refino tickets, asigno, hago seguimiento y code review.',
        },
        {
          id: 'procesos',
          label: 'Procesos',
          accent: 'movement',
          copy: 'Implementé Scrum + Kanban en ClickUp: stand-ups de 10 minutos, reglas claras y métricas (tiempo de resolución, bugs vs proyectos, tickets bloqueados).',
        },
        {
          id: 'qa',
          label: 'QA',
          accent: 'movement',
          copy: 'Nada llega a producción sin QA. Reviso antes de desplegar.',
        },
        {
          id: 'automatizacion',
          label: 'Automatización',
          accent: 'creative',
          copy: 'Integro WhatsApp Business API y automatizo tareas repetitivas con bots.',
        },
        {
          id: 'mentoria',
          label: 'Mentoría',
          accent: 'creative',
          copy: 'Acompaño a juniors y practicantes del equipo.',
        },
      ],
    };
  },
  computed: {
    activeRole() {
      return this.roles.find((role) => role.id === this.activeRoleId) || this.roles[0];
    },
  },
  async mounted() {
    this.proyectos = await getBlogPosts();
  },
  methods: {
    projectSlug,
    select(id) {
      this.activeRoleId = id;
    },
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
.work-tag {
  margin: 0 0 var(--space-2);
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  color: var(--accent-software);
}

/* Selector de roles: rejilla uniforme (alineada), sin flex-wrap suelto */
.roles {
  margin-top: var(--space-3);
}

.role-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.role-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  min-height: 44px;
  padding: 0.55rem 1rem;
  background: transparent;
  color: var(--text-muted);
  border: 1px solid var(--border);
  border-radius: 999px;
  font: 500 0.82rem/1.2 var(--font-sans);
  text-align: center;
  cursor: pointer;
}

.role-chip:hover {
  color: var(--text);
  border-color: var(--text-muted);
}

/* Señal no cromática del estado activo: marca rellena (WCAG 1.4.1) */
.role-mark {
  flex: none;
  width: 7px;
  height: 7px;
  border: 1px solid currentColor;
}

.role-chip.is-active .role-mark {
  background: currentColor;
}

.role-chip.is-active {
  color: var(--text);
}

.role-chip.is-software.is-active {
  color: var(--accent-software);
  border-color: var(--accent-software);
  background: rgba(72, 176, 247, 0.12);
}

.role-chip.is-movement.is-active {
  color: var(--accent-movement);
  border-color: var(--accent-movement);
  background: rgba(127, 224, 192, 0.12);
}

.role-chip.is-creative.is-active {
  color: var(--accent-creative);
  border-color: var(--accent-creative);
  background: rgba(224, 164, 88, 0.12);
}

.role-panel {
  margin-top: var(--space-3);
  padding-top: var(--space-2);
  border-top: 2px solid var(--line);
}

.role-panel.is-software { border-top-color: var(--accent-software); }
.role-panel.is-movement { border-top-color: var(--accent-movement); }
.role-panel.is-creative { border-top-color: var(--accent-creative); }

.role-kicker {
  margin: 0 0 0.35rem;
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  color: var(--text-dim);
}

.role-panel h3 {
  margin: 0 0 var(--space-1);
}

.role-copy {
  margin: 0;
  max-width: 72ch;
  color: var(--text-muted);
}

.flow-line {
  margin: var(--space-4) 0 0;
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  color: var(--text-dim);
}

.impact {
  margin: var(--space-2) 0 0;
  max-width: 72ch;
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

@media (max-width: 760px) {
  .role-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 720px) {
  .project-row {
    grid-template-columns: 32px 1fr;
  }

  .project-link {
    grid-column: 2;
  }
}

@media (max-width: 420px) {
  .role-list {
    grid-template-columns: 1fr;
  }
}
</style>
