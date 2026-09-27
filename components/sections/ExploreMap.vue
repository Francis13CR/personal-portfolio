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
        <div class="map-left">
          <div class="map-visual">
            <svg
              class="map-svg"
              viewBox="0 0 760 380"
              role="img"
              aria-label="Mapa de intereses de Francis: conecta software, running, calistenia, taekwondo, juegos y música."
            >
              <g class="map-links">
                <line
                  v-for="n in nodes"
                  :key="'l-' + n.id"
                  x1="380"
                  y1="190"
                  :x2="n.x"
                  :y2="n.y"
                  :class="['map-link', 'is-' + n.accent, { 'is-active': n.id === activeId }]"
                />
              </g>
  
              <g
                v-for="n in nodes"
                :key="n.id"
                :class="['node-group', 'is-' + n.accent, { 'is-active': n.id === activeId, 'is-dim': n.id !== activeId }]"
              >
                <circle
                  :cx="n.x"
                  :cy="n.y"
                  :r="n.id === activeId ? 19 : 15"
                  class="node-halo"
                />
                <image
                  :href="iconUri(n)"
                  :x="n.x - (n.id === activeId ? 13 : 11)"
                  :y="n.y - (n.id === activeId ? 13 : 11)"
                  :width="n.id === activeId ? 26 : 22"
                  :height="n.id === activeId ? 26 : 22"
                />
                <text :x="n.lx" :y="n.ly" text-anchor="middle" class="node-label">
                  {{ n.label.toUpperCase() }}
                </text>
              </g>
  
              <g class="map-hub">
                <circle cx="380" cy="190" r="46" class="hub" :class="'is-' + active.accent" />
                <image :href="activeIconUri" x="357" y="150" width="46" height="46" />
                <text x="380" y="216" text-anchor="middle" class="hub-label">
                  {{ active.label.toUpperCase() }}
                </text>
              </g>
            </svg>
          </div>

          <figure class="map-mascot">
            <transition name="mascot-fade" mode="out-in">
              <img
                :key="active.id"
                :src="active.mascot"
                :alt="'Mascota pixel art del camarón: ' + active.label"
                :width="active.mw"
                :height="active.mh"
                loading="lazy"
                decoding="async"
              />
            </transition>
          </figure>
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
              <span class="panel-graphic" aria-hidden="true" v-html="skillIcons[active.id]"></span>
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
import { skillIcons, skillIconInner } from '../../assets/js/icons.js';

const ACCENT_HEX = {
  software: '#48B0F7',
  movement: '#7FE0C0',
  creative: '#E0A458',
};

export default {
  name: 'ExploreMap',
  data() {
    return {
      activeId: 'software',
      skillIcons,
      nodes: [
        {
          id: 'software',
          label: 'Software',
          mascot: '/images/camaron-software.png',
          mw: 147,
          mh: 160,
          accent: 'software',
          copy: 'Desarrollo, coordino y despliego.',
          action: 'Ver trabajo',
          href: '#trabajo',
          x: 140,
          y: 150,
          lx: 140,
          ly: 182,
        },
        {
          id: 'running',
          label: 'Running',
          mascot: '/images/camaron-running.png',
          mw: 162,
          mh: 160,
          accent: 'movement',
          copy: 'Correr para despejar la cabeza y medir el progreso.',
          x: 210,
          y: 300,
          lx: 210,
          ly: 332,
        },
        {
          id: 'calistenia',
          label: 'Calistenia',
          mascot: '/images/camaron-calistenia.png',
          mw: 74,
          mh: 160,
          accent: 'movement',
          copy: 'Fuerza, técnica y paciencia. Progreso lento y constante.',
          x: 380,
          y: 335,
          lx: 380,
          ly: 367,
        },
        {
          id: 'taekwondo',
          label: 'Taekwondo',
          mascot: '/images/camaron-taekwondo.png',
          mw: 157,
          mh: 160,
          accent: 'movement',
          copy: 'La academia me llevó a construir una app para los estudiantes.',
          action: 'Ver la app',
          to: '/proyectos/taekwondo-fenix-app',
          x: 550,
          y: 300,
          lx: 550,
          ly: 332,
        },
        {
          id: 'juegos',
          label: 'Juegos',
          mascot: '/images/camaron-juegos.png',
          mw: 159,
          mh: 160,
          accent: 'creative',
          copy: 'Sistemas, estrategia y mundos que explorar.',
          x: 620,
          y: 150,
          lx: 620,
          ly: 182,
        },
        {
          id: 'musica',
          label: 'Música',
          mascot: '/images/camaron-musica.png',
          mw: 162,
          mh: 160,
          accent: 'creative',
          copy: 'Aprender instrumentos simplemente porque quiero saber tocarlos.',
          x: 380,
          y: 45,
          lx: 380,
          ly: 80,
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
    activeIconUri() {
      return this.iconUri(this.active);
    },
  },
  methods: {
    select(id) {
      this.activeId = id;
    },
    // SVG con el color del acento incrustado, para usar en <image>.
    iconUri(node) {
      const stroke = ACCENT_HEX[node.accent];
      const svg =
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" ` +
        `stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">` +
        `${skillIconInner[node.id]}</svg>`;
      return `data:image/svg+xml,${encodeURIComponent(svg)}`;
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
    radial-gradient(ellipse at 50% 50%, rgba(72, 176, 247, 0.08), transparent 62%),
    var(--bg-2);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
}

.map-left {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

/* Mascota pixel art del skill activo, debajo del card del gráfico */
.map-mascot {
  margin: 0;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-mascot img {
  display: block;
  height: 80px;
  width: auto;
  max-width: 100%;
  image-rendering: pixelated;
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.35));
}

.mascot-fade-enter-active,
.mascot-fade-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.mascot-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.mascot-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.map-svg {
  display: block;
  width: 100%;
  height: auto;
}

/* Conectores */
.map-link {
  stroke: rgba(120, 160, 220, 0.3);
  stroke-width: 1;
  transition: stroke 0.25s ease, stroke-width 0.25s ease, opacity 0.25s ease;
}

.map-link.is-active {
  stroke-width: 2;
}

.map-link.is-active.is-software { stroke: var(--accent-software); }
.map-link.is-active.is-movement { stroke: var(--accent-movement); }
.map-link.is-active.is-creative { stroke: var(--accent-creative); }

/* Nodos */
.node-group {
  transition: opacity 0.25s ease;
}

.node-group.is-dim {
  opacity: 0.3;
}

.node-halo {
  fill: var(--bg-2);
  stroke: var(--line);
  stroke-width: 1.2;
  transition: stroke 0.25s ease, stroke-width 0.25s ease;
}

.node-group.is-active .node-halo {
  stroke-width: 2;
}

.node-group.is-active.is-software .node-halo { stroke: var(--accent-software); }
.node-group.is-active.is-movement .node-halo { stroke: var(--accent-movement); }
.node-group.is-active.is-creative .node-halo { stroke: var(--accent-creative); }

.node-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 1px;
  fill: var(--text-muted);
  paint-order: stroke;
  stroke: var(--bg-2);
  stroke-width: 4px;
  stroke-linejoin: round;
  transition: fill 0.25s ease;
}

.node-group.is-active .node-label {
  fill: var(--text);
}

/* Hub central */
.hub {
  fill: var(--panel);
  stroke: var(--line);
  stroke-width: 1.5;
  transition: stroke 0.25s ease;
}

.hub.is-software { stroke: var(--accent-software); }
.hub.is-movement { stroke: var(--accent-movement); }
.hub.is-creative { stroke: var(--accent-creative); }

.hub-label {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;
  fill: var(--text);
  paint-order: stroke;
  stroke: var(--panel);
  stroke-width: 4px;
  stroke-linejoin: round;
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

.panel-graphic :deep(svg) {
  width: 44px;
  height: 44px;
  display: block;
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
