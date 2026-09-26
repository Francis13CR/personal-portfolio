<template>
  <section class="section page" aria-labelledby="proyectos-title" v-reveal>
    <div class="container">
      <p class="section-label">Índice</p>
      <h1 id="proyectos-title">Proyectos</h1>
      <p class="lede">
        Todo lo que he construido y mantenido, en formato de tabla. Cada fila abre la ficha técnica
        con la descripción, el stack y la galería.
      </p>

      <div class="table-scroll" role="region" aria-label="Tabla de proyectos" tabindex="0">
        <table class="projects-table">
          <caption class="visually-hidden">
            Proyectos con su stack, estado y enlace externo
          </caption>
          <thead>
            <tr>
              <th scope="col" class="col-num">#</th>
              <th scope="col">Proyecto</th>
              <th scope="col">Stack</th>
              <th scope="col">Estado</th>
              <th scope="col" class="col-link">Enlace</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(p, i) in proyectos" :key="p.id">
              <td class="col-num mono">{{ pad(i) }}</td>
              <th scope="row" class="cell-name">
                <router-link :to="`/proyectos/${projectSlug(p)}`">{{ shortTitle(p.title) }}</router-link>
                <span class="cell-desc">{{ shortDesc(p.description) }}</span>
              </th>
              <td>
                <ul class="chip-list" role="list">
                  <li v-for="t in p.technologies.slice(0, 3)" :key="t" class="chip">{{ t }}</li>
                  <li v-if="p.technologies.length > 3" class="chip">
                    +{{ p.technologies.length - 3 }}
                  </li>
                </ul>
              </td>
              <td>
                <span class="status" :class="{ 'is-active': p.status === 1 }">
                  {{ p.status === 1 ? 'Activo' : 'Archivado' }}
                </span>
              </td>
              <td class="col-link">
                <a
                  v-if="p.link"
                  :href="p.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="ext-link"
                  :aria-label="`Abrir ${shortTitle(p.title)} en una pestaña nueva`"
                >
                  <span v-html="icons.arrowUpRight"></span>
                </a>
                <span v-else class="dim" aria-hidden="true">—</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import { getBlogPosts } from '../../assets/js/projects-data.js';
import { projectSlug } from '../../assets/js/slug.js';
import { icons } from '../../assets/js/icons.js';

export default {
  name: 'ProjectsIndexPage',
  data() {
    return {
      proyectos: [],
      icons,
    };
  },
  async mounted() {
    this.proyectos = await getBlogPosts();
  },
  methods: {
    projectSlug,
    pad(i) {
      return String(i + 1).padStart(2, '0');
    },
    shortTitle(title) {
      return (title || '').split(' — ')[0];
    },
    shortDesc(description) {
      const text = (description || '').replace(/\s+/g, ' ').trim();
      if (text.length <= 110) {
        return text;
      }
      return `${text.slice(0, 110).replace(/\s\S*$/, '')}…`;
    },
  },
};
</script>

<style scoped>
.table-scroll {
  margin-top: var(--space-4);
  overflow-x: auto;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
}

.projects-table {
  width: 100%;
  min-width: 680px;
  border-collapse: collapse;
  font-size: 0.92rem;
}

.projects-table caption {
  text-align: left;
}

.projects-table th,
.projects-table td {
  padding: var(--space-2) var(--space-3);
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid var(--line);
}

.projects-table thead th {
  font: 600 0.68rem/1 var(--font-mono);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-dim);
  border-bottom-color: var(--border);
}

.projects-table tbody tr:last-child th,
.projects-table tbody tr:last-child td {
  border-bottom: 0;
}

.col-num {
  width: 48px;
  color: var(--text-dim);
}

.col-link {
  width: 72px;
  text-align: center;
}

.cell-name {
  font-weight: 600;
}

.cell-name a {
  font-size: 1rem;
}

.cell-desc {
  display: block;
  margin-top: 0.35rem;
  max-width: 46ch;
  font-weight: 400;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.status {
  display: inline-block;
  padding: 0.2rem 0.55rem;
  font: 400 0.68rem/1.4 var(--font-mono);
  color: var(--text-dim);
  border: 1px solid var(--line);
  border-radius: 999px;
  white-space: nowrap;
}

.status.is-active {
  color: var(--accent-movement);
  border-color: var(--accent-movement);
}

.ext-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  color: var(--accent-software);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
}

.ext-link:hover {
  border-color: var(--accent-software);
  text-decoration: none;
}
</style>
