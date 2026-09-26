<template>
  <header class="site-header" :class="{ 'is-open': menuOpen }" @keydown.esc="onEscape">
    <div class="container header-inner">
      <router-link to="/" class="brand" @click="closeMenu">
        FRANCIS<span class="brand-dot">.M</span>
      </router-link>

      <button
        ref="toggle"
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen ? 'true' : 'false'"
        aria-controls="primary-nav"
        @click="toggleMenu"
      >
        <span class="visually-hidden">{{ menuOpen ? 'Cerrar menú' : 'Abrir menú' }}</span>
        <span class="icon" v-html="menuOpen ? icons.close : icons.menu"></span>
      </button>

      <nav id="primary-nav" ref="primaryNav" class="primary-nav" aria-label="Principal">
        <ul>
          <li>
            <router-link to="/" exact-active-class="is-active" @click="closeMenu">Inicio</router-link>
          </li>
          <li>
            <a href="/#proyectos" @click="closeMenu">Proyectos</a>
          </li>
          <li>
            <router-link to="/about" active-class="is-active" @click="closeMenu">Sobre mí</router-link>
          </li>
          <li>
            <router-link to="/contact" active-class="is-active" @click="closeMenu">Contacto</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { icons } from '../../assets/js/icons.js';

export default {
  name: 'SiteHeader',
  data() {
    return {
      menuOpen: false,
      icons,
    };
  },
  watch: {
    $route() {
      this.closeMenu();
    },
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      if (this.menuOpen) {
        this.menuOpen = false;
      }
    },
    onEscape() {
      if (!this.menuOpen) {
        return;
      }
      const active = document.activeElement;
      const insidePanel = this.$refs.primaryNav && this.$refs.primaryNav.contains(active);
      this.menuOpen = false;
      // Si el foco estaba dentro del panel que se oculta, devolverlo al botón
      // para no perder la posición del teclado (WCAG 2.4.3).
      if (insidePanel) {
        this.$nextTick(() => {
          if (this.$refs.toggle) {
            this.$refs.toggle.focus();
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(11, 18, 32, 0.85);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--line);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  min-height: var(--header-h);
}

.brand {
  font: 600 0.95rem/1 var(--font-mono);
  letter-spacing: 0.14em;
  color: var(--text);
}

.brand:hover {
  text-decoration: none;
}

.brand-dot {
  color: var(--accent-software);
}

.menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  padding: 0.5rem;
  background: none;
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  cursor: pointer;
}

.menu-toggle:hover {
  border-color: var(--border);
}

.menu-toggle .icon {
  display: inline-flex;
}

.primary-nav ul {
  display: flex;
  gap: 1.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.primary-nav a {
  display: inline-block;
  padding: 0.5rem 0;
  font: 500 0.8rem/1 var(--font-mono);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.primary-nav a:hover {
  color: var(--text);
  text-decoration: none;
}

.primary-nav a.is-active {
  color: var(--accent-software);
  /* Señal no cromática de página actual (WCAG 1.4.1) */
  box-shadow: inset 0 -2px 0 var(--accent-software);
}

@media (max-width: 720px) {
  .menu-toggle {
    display: inline-flex;
  }

  .primary-nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: none;
    padding: 0.5rem 0 1rem;
    background: var(--bg-2);
    border-bottom: 1px solid var(--line);
  }

  .site-header.is-open .primary-nav {
    display: block;
  }

  .primary-nav ul {
    flex-direction: column;
    gap: 0;
    padding-inline: var(--space-3);
  }

  .primary-nav li + li {
    border-top: 1px solid var(--line);
  }

  .primary-nav a {
    padding: 0.9rem 0;
    font-size: 0.85rem;
  }
}
</style>
