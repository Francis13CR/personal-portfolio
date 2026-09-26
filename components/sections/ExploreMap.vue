<template>
  <section id="explora" class="section explore" aria-labelledby="explora-title" v-reveal>
    <div class="container">
      <p class="section-label">02 / Explora</p>
      <h2 id="explora-title">No es una lista de skills</h2>
      <p class="lede">
        Es un mapa de las cosas que me interesan, que estoy aprendiendo o que simplemente quiero
        entender. El software es el núcleo; todo lo demás también es parte de cómo pienso.
      </p>

      <div class="map-layout">
        <div class="map-visual">
          <svg
            class="map-svg"
            viewBox="0 0 760 380"
            role="img"
            aria-label="Mapa de intereses de Francis: conecta software, running, calistenia, taekwondo, juegos y música."
          >
            <g stroke="rgba(120,160,220,0.32)" stroke-width="1">
              <line x1="380" y1="75" x2="110" y2="255" />
              <line x1="380" y1="75" x2="230" y2="305" />
              <line x1="380" y1="75" x2="365" y2="320" />
              <line x1="380" y1="75" x2="500" y2="305" />
              <line x1="380" y1="75" x2="625" y2="255" />
              <line x1="380" y1="75" x2="688" y2="155" />
            </g>

            <circle cx="380" cy="75" r="24" fill="none" stroke="rgba(72,176,247,0.35)" />
            <circle cx="380" cy="75" r="12" fill="#48B0F7" />
            <text
              x="380"
              y="48"
              fill="#DCE6F5"
              font-family="monospace"
              font-size="15"
              text-anchor="middle"
              letter-spacing="3"
            >
              FRANCIS.M
            </text>

            <g font-family="monospace" font-size="11" text-anchor="middle" letter-spacing="1">
              <g>
                <circle cx="110" cy="255" r="7" fill="#48B0F7" />
                <text x="110" y="285" fill="#DCE6F5">SOFTWARE</text>
              </g>
              <g>
                <circle cx="230" cy="305" r="7" fill="#7FE0C0" />
                <text x="230" y="335" fill="#DCE6F5">RUNNING</text>
              </g>
              <g>
                <circle cx="365" cy="320" r="7" fill="#7FE0C0" />
                <text x="365" y="350" fill="#DCE6F5">CALISTENIA</text>
              </g>
              <g>
                <circle cx="500" cy="305" r="7" fill="#7FE0C0" />
                <text x="500" y="335" fill="#DCE6F5">TAEKWONDO</text>
              </g>
              <g>
                <circle cx="625" cy="255" r="7" fill="#E0A458" />
                <text x="625" y="285" fill="#DCE6F5">JUEGOS</text>
              </g>
              <g>
                <circle cx="688" cy="155" r="7" fill="#E0A458" />
                <text x="720" y="159" fill="#DCE6F5" text-anchor="end">MÚSICA</text>
              </g>
            </g>
          </svg>
        </div>

        <div class="map-control">
          <ul class="node-index" role="list">
            <li v-for="(node, i) in nodes" :key="node.id">
              <button
                type="button"
                class="node-row"
                :class="['is-' + node.accent, { 'is-active': node.id === activeId }]"
                :aria-pressed="node.id === activeId ? 'true' : 'false'"
                aria-controls="node-panel"
                @click="select(node.id)"
              >
                <span class="node-idx mono" aria-hidden="true">[{{ String(i + 1).padStart(2, '0') }}]</span>
                <span class="node-name">{{ node.label }}</span>
                <span class="node-tick" aria-hidden="true"></span>
              </button>
            </li>
          </ul>

          <div
            id="node-panel"
            class="node-panel"
            :class="'is-' + active.accent"
            role="region"
            aria-labelledby="node-panel-title"
            aria-live="polite"
          >
            <p class="panel-kicker mono" aria-hidden="true">
              NODO / {{ String(activeIndex).padStart(2, '0') }}
            </p>
            <h3 id="node-panel-title" class="panel-title">{{ active.label }}</h3>
            <div class="panel-body">
              <span class="panel-graphic" aria-hidden="true" v-html="active.graphic"></span>
              <p class="panel-copy">{{ active.copy }}</p>
            </div>
            <router-link v-if="active.to" :to="active.to" class="panel-link mono">
              {{ active.action }} →
            </router-link>
            <a v-else-if="active.href" :href="active.href" class="panel-link mono">
              {{ active.action }} →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const graphics = {
  software:
    '<svg viewBox="0 0 150 40" width="150" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="10" width="30" height="20" rx="3"/><path d="M31 20h16"/><rect x="47" y="10" width="30" height="20" rx="3"/><path d="M77 20h16"/><rect x="93" y="10" width="30" height="20" rx="3"/></svg>',
  running:
    '<svg viewBox="0 0 150 40" width="150" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 34h146"/><polyline points="2,32 30,25 56,29 82,15 108,19 146,6"/></svg>',
  calistenia:
    '<svg viewBox="0 0 150 40" width="150" height="40" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"><path d="M8 34V25"/><path d="M30 34V17"/><path d="M52 34V27"/><path d="M74 34V11"/><path d="M96 34V20"/><path d="M118 34V7"/><path d="M140 34V15"/></svg>',
  taekwondo:
    '<svg viewBox="0 0 150 40" width="150" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="75" cy="20" r="14"/><path d="M64 27L88 13"/></svg>',
  juegos:
    '<svg viewBox="0 0 150 40" width="150" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="30" cy="20" r="3" fill="currentColor" stroke="none"/><circle cx="50" cy="12" r="3" fill="currentColor" stroke="none"/><circle cx="50" cy="28" r="3" fill="currentColor" stroke="none"/><circle cx="70" cy="20" r="3" fill="currentColor" stroke="none"/><circle cx="90" cy="12" r="3" fill="currentColor" stroke="none"/><circle cx="90" cy="28" r="3" fill="currentColor" stroke="none"/><circle cx="110" cy="20" r="3" fill="currentColor" stroke="none"/></svg>',
  musica:
    '<svg viewBox="0 0 150 40" width="150" height="40" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M10 14v12"/><path d="M26 8v24"/><path d="M42 16v8"/><path d="M58 6v28"/><path d="M74 14v12"/><path d="M90 10v20"/><path d="M106 16v8"/><path d="M122 8v24"/><path d="M138 14v12"/></svg>',
};

export default {
  name: 'ExploreMap',
  data() {
    return {
      activeId: 'software',
      nodes: [
        {
          id: 'software',
          label: 'Software',
          accent: 'software',
          copy: 'Desarrollo, coordino y despliego. Aquí vive el caso Facture.cr.',
          action: 'Ver trabajo',
          href: '#trabajo',
          graphic: graphics.software,
        },
        {
          id: 'running',
          label: 'Running',
          accent: 'movement',
          copy: 'Correr para despejar la cabeza y medir el progreso.',
          graphic: graphics.running,
        },
        {
          id: 'calistenia',
          label: 'Calistenia',
          accent: 'movement',
          copy: 'Fuerza, técnica y paciencia. Progreso lento y constante.',
          graphic: graphics.calistenia,
        },
        {
          id: 'taekwondo',
          label: 'Taekwondo',
          accent: 'movement',
          copy: 'El dojo me llevó a construir una app para los estudiantes.',
          action: 'Ver la app',
          to: '/proyectos/taekwondo-fenix-app',
          graphic: graphics.taekwondo,
        },
        {
          id: 'juegos',
          label: 'Juegos',
          accent: 'creative',
          copy: 'Sistemas, estrategia y mundos que explorar.',
          graphic: graphics.juegos,
        },
        {
          id: 'musica',
          label: 'Música',
          accent: 'creative',
          copy: 'Aprender instrumentos simplemente porque quiero saber tocarlos.',
          graphic: graphics.musica,
        },
      ],
    };
  },
  computed: {
    active() {
      return this.nodes.find((node) => node.id === this.activeId) || this.nodes[0];
    },
    activeIndex() {
      return this.nodes.findIndex((node) => node.id === this.activeId) + 1;
    },
  },
  methods: {
    select(id) {
      this.activeId = id;
    },
  },
};
</script>

<style scoped>
.map-layout {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: var(--space-4);
  margin-top: var(--space-4);
  align-items: start;
}

.map-visual {
  padding: var(--space-2);
  background:
    radial-gradient(ellipse at 50% 0%, rgba(72, 176, 247, 0.08), transparent 60%),
    var(--bg-2);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
}

.map-svg {
  display: block;
  width: 100%;
  height: auto;
}

/* Índice de nodos: filas alineadas por rejilla, sin píldoras */
.node-index {
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--line);
}

.node-row {
  display: grid;
  grid-template-columns: 3.4rem 1fr 10px;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.7rem 0.5rem;
  background: transparent;
  color: var(--text-muted);
  border: 0;
  border-bottom: 1px solid var(--line);
  border-left: 2px solid transparent;
  text-align: left;
  font: 400 0.95rem/1.3 var(--font-sans);
  cursor: pointer;
}

.node-row:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.02);
}

.node-row.is-active {
  color: var(--text);
  font-weight: 600;
  background: rgba(255, 255, 255, 0.03);
}

.node-row.is-software.is-active { border-left-color: var(--accent-software); }
.node-row.is-movement.is-active { border-left-color: var(--accent-movement); }
.node-row.is-creative.is-active { border-left-color: var(--accent-creative); }

.node-idx {
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  color: var(--text-dim);
}

.node-row.is-active .node-idx {
  color: var(--text);
}

.node-tick {
  justify-self: end;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--text-dim);
}

.node-row.is-software .node-tick { background: var(--accent-software); }
.node-row.is-movement .node-tick { background: var(--accent-movement); }
.node-row.is-creative .node-tick { background: var(--accent-creative); }

/* Ficha técnica: sin caja redondeada; regla superior como acento */
.node-panel {
  margin-top: var(--space-3);
  padding-top: var(--space-2);
  border-top: 2px solid var(--line);
}

.node-panel.is-software { border-top-color: var(--accent-software); }
.node-panel.is-movement { border-top-color: var(--accent-movement); }
.node-panel.is-creative { border-top-color: var(--accent-creative); }

.panel-kicker {
  margin: 0 0 0.35rem;
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.panel-title {
  margin: 0 0 var(--space-2);
}

.panel-body {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.panel-graphic {
  flex: none;
  display: inline-flex;
}

.node-panel.is-software .panel-graphic { color: var(--accent-software); }
.node-panel.is-movement .panel-graphic { color: var(--accent-movement); }
.node-panel.is-creative .panel-graphic { color: var(--accent-creative); }

.panel-copy {
  margin: 0;
  color: var(--text-muted);
}

.panel-link {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  margin-top: var(--space-2);
  padding-bottom: 2px;
  border-bottom: 1px solid var(--line);
  font-size: 0.75rem;
  letter-spacing: 0.06em;
}

.panel-link:hover {
  border-bottom-color: var(--accent-software);
  text-decoration: none;
}

@media (max-width: 860px) {
  .map-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 520px) {
  .panel-body {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-1);
  }
}
</style>
