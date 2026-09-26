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
            aria-labelledby="map-title map-desc"
          >
            <title id="map-title">Mapa de intereses de Francis</title>
            <desc id="map-desc">
              Francis conecta software, running, calistenia, taekwondo, juegos y música.
            </desc>

            <g stroke="rgba(120,160,220,0.32)" stroke-width="1">
              <line x1="380" y1="75" x2="110" y2="255" />
              <line x1="380" y1="75" x2="230" y2="305" />
              <line x1="380" y1="75" x2="365" y2="320" />
              <line x1="380" y1="75" x2="500" y2="305" />
              <line x1="380" y1="75" x2="625" y2="255" />
              <line x1="380" y1="75" x2="700" y2="155" />
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
                <circle cx="700" cy="155" r="7" fill="#E0A458" />
                <text x="735" y="159" fill="#DCE6F5" text-anchor="end">MÚSICA</text>
              </g>
            </g>
          </svg>
        </div>

        <div class="map-control">
          <ul class="node-list" role="list">
            <li v-for="node in nodes" :key="node.id">
              <button
                type="button"
                class="node-btn"
                :class="['is-' + node.accent, { 'is-active': node.id === activeId }]"
                :aria-pressed="node.id === activeId ? 'true' : 'false'"
                aria-controls="node-panel"
                @click="select(node.id)"
              >
                <span class="node-dot" aria-hidden="true"></span>{{ node.label }}
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
            <div class="panel-head">
              <h3 id="node-panel-title" class="panel-title">{{ active.label }}</h3>
              <span class="panel-accent mono" aria-hidden="true">{{ active.accent }}</span>
            </div>
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

.node-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
  margin: 0 0 var(--space-2);
  padding: 0;
  list-style: none;
}

.node-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 44px;
  padding: 0.5rem 0.9rem;
  background: transparent;
  color: var(--text-muted);
  border: 1px solid var(--border);
  border-radius: 999px;
  font: 500 0.82rem/1 var(--font-sans);
  cursor: pointer;
}

.node-btn:hover {
  color: var(--text);
  border-color: var(--accent-software);
}

.node-btn.is-active {
  color: var(--text);
  border-color: currentColor;
  background: rgba(255, 255, 255, 0.05);
  font-weight: 600;
}

.node-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  flex: none;
}

.node-btn.is-software .node-dot { background: var(--accent-software); }
.node-btn.is-movement .node-dot { background: var(--accent-movement); }
.node-btn.is-creative .node-dot { background: var(--accent-creative); }

.node-btn.is-software.is-active { color: var(--accent-software); }
.node-btn.is-movement.is-active { color: var(--accent-movement); }
.node-btn.is-creative.is-active { color: var(--accent-creative); }

.node-panel {
  padding: var(--space-3);
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  border-left-width: 3px;
}

.node-panel.is-software { border-left-color: var(--accent-software); }
.node-panel.is-movement { border-left-color: var(--accent-movement); }
.node-panel.is-creative { border-left-color: var(--accent-creative); }

.panel-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-2);
}

.panel-title {
  margin: 0;
}

.panel-accent {
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.panel-body {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-top: var(--space-1);
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
  font-size: 0.75rem;
  letter-spacing: 0.06em;
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
