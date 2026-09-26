<template>
  <div v-if="loading" class="section page">
    <div class="container">
      <p class="mono dim" role="status">Cargando proyecto…</p>
    </div>
  </div>

  <section
    v-else-if="proyecto"
    class="section page"
    aria-labelledby="proyecto-title"
    v-reveal
  >
    <div class="container">
      <router-link to="/proyectos" class="back mono">← Proyectos</router-link>
      <p class="section-label">Ficha</p>
      <h1 id="proyecto-title">{{ proyecto.title }}</h1>
      <p class="project-meta mono">
        <span>{{ proyecto.created_at }}</span>
        <span aria-hidden="true">·</span>
        <span>{{ proyecto.status === 1 ? 'Activo' : 'Archivado' }}</span>
      </p>
      <div class="project-actions">
        <a
          v-if="proyecto.link"
          :href="proyecto.link"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary"
        >
          Visitar sitio
        </a>
        <a
          v-if="proyecto.github"
          :href="proyecto.github"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-ghost"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>

  <template v-if="proyecto">
    <section class="section" aria-labelledby="descripcion-title" v-reveal>
      <div class="container">
        <h2 id="descripcion-title">Descripción</h2>
        <div class="prose">
          <p v-for="(parrafo, i) in descripcion" :key="i">{{ parrafo }}</p>
        </div>
      </div>
    </section>

    <section v-if="proyecto.technologies && proyecto.technologies.length" class="section" aria-labelledby="stack-title" v-reveal>
      <div class="container">
        <h2 id="stack-title">Stack</h2>
        <ul class="chip-list" role="list">
          <li v-for="tech in proyecto.technologies" :key="tech" class="chip">{{ tech }}</li>
        </ul>
      </div>
    </section>

    <section v-if="proyecto.images && proyecto.images.length" class="section" aria-labelledby="galeria-title" v-reveal>
      <div class="container">
        <h2 id="galeria-title">Galería</h2>
        <ul class="gallery" role="list">
          <li v-for="(img, i) in proyecto.images" :key="img">
            <button
              type="button"
              class="gallery-btn"
              :aria-label="`Ampliar imagen: ${imageAlt(i)}`"
              @click="openLightbox(img, imageAlt(i))"
            >
              <img :src="img" :alt="imageAlt(i)" loading="lazy" decoding="async" />
            </button>
          </li>
        </ul>
      </div>
    </section>
  </template>

  <section v-else-if="!loading" class="section page" aria-labelledby="no-encontrado-title">
    <div class="container">
      <p class="section-label">Error</p>
      <h1 id="no-encontrado-title">Proyecto no encontrado</h1>
      <p class="lede">No pudimos encontrar ese proyecto. Puede que el enlace esté mal escrito.</p>
      <router-link class="btn btn-primary" to="/proyectos">Ver todos los proyectos</router-link>
    </div>
  </section>

  <dialog ref="lightbox" class="lightbox" aria-label="Imagen ampliada" @click="onBackdropClick">
    <img v-if="lightboxSrc" :src="lightboxSrc" :alt="lightboxAlt" />
    <button type="button" class="btn btn-ghost lightbox-close" @click="closeLightbox">
      Cerrar
    </button>
  </dialog>
</template>

<script>
import { getBlogPosts } from '../../assets/js/projects-data.js';
import { findProjectBySlug, slugify } from '../../assets/js/slug.js';
import {
  setSeo,
  setJsonLd,
  removeJsonLd,
  breadcrumb,
  softwareApplication,
} from '../../assets/js/seo.js';

export default {
  name: 'ProjectDetailPage',
  data() {
    return {
      proyecto: null,
      loading: true,
      lightboxSrc: '',
      lightboxAlt: '',
    };
  },
  computed: {
    descripcion() {
      if (!this.proyecto || !this.proyecto.description) {
        return [];
      }
      return this.proyecto.description
        .split(/\n{2,}/)
        .map((parrafo) => parrafo.trim())
        .filter(Boolean);
    },
    shortTitle() {
      return (this.proyecto && this.proyecto.title ? this.proyecto.title : '').split(' — ')[0];
    },
    metaDescription() {
      const text = (this.proyecto && this.proyecto.description ? this.proyecto.description : '')
        .replace(/\s+/g, ' ')
        .trim();
      if (text.length <= 160) {
        return text;
      }
      return `${text.slice(0, 160).replace(/\s\S*$/, '')}…`;
    },
  },
  async mounted() {
    await this.loadProject();
  },
  watch: {
    '$route.params.slug': function onSlugChange() {
      this.loadProject();
    },
  },
  methods: {
    async loadProject() {
      this.loading = true;
      this.proyecto = null;
      try {
        const proyectos = await getBlogPosts();
        this.proyecto = findProjectBySlug(proyectos, this.$route.params.slug);
      } finally {
        this.loading = false;
        this.updateSeo();
      }
    },
    updateSeo() {
      const path = `/proyectos/${slugify(this.$route.params.slug)}`;
      const crumbs = [
        { name: 'Inicio', path: '/' },
        { name: 'Proyectos', path: '/proyectos' },
      ];

      if (!this.proyecto) {
        setSeo({
          title: 'Proyecto no encontrado — Francis Meléndez',
          description: 'El proyecto que buscas no existe o se movió.',
          path,
          robots: 'noindex,follow',
        });
        setJsonLd('breadcrumb', breadcrumb(crumbs));
        removeJsonLd('project');
        return;
      }

      setSeo({
        title: `${this.shortTitle} — Proyectos de Francis Meléndez`,
        description: this.metaDescription,
        path,
      });
      setJsonLd('breadcrumb', breadcrumb([...crumbs, { name: this.shortTitle, path }]));
      setJsonLd('project', softwareApplication(this.proyecto));
    },
    imageAlt(index) {
      return `${this.shortTitle} — captura ${index + 1}`;
    },
    openLightbox(src, alt) {
      this.lightboxSrc = src;
      this.lightboxAlt = alt;
      this.$nextTick(() => {
        if (this.$refs.lightbox && !this.$refs.lightbox.open) {
          this.$refs.lightbox.showModal();
        }
      });
    },
    closeLightbox() {
      if (this.$refs.lightbox && this.$refs.lightbox.open) {
        this.$refs.lightbox.close();
      }
    },
    onBackdropClick(event) {
      if (event.target === this.$refs.lightbox) {
        this.closeLightbox();
      }
    },
  },
};
</script>

<style scoped>
.back {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  margin-bottom: var(--space-3);
  font-size: 0.75rem;
  letter-spacing: 0.04em;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0 0 var(--space-3);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.project-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-2);
  margin: var(--space-3) 0 0;
  padding: 0;
  list-style: none;
}

.gallery-btn {
  display: block;
  width: 100%;
  padding: 0;
  background: var(--bg-2);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  cursor: zoom-in;
  overflow: hidden;
}

.gallery-btn:hover {
  border-color: var(--accent-software);
}

.gallery-btn img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.lightbox {
  max-width: min(92vw, 1080px);
  padding: var(--space-2);
  background: var(--panel);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
}

.lightbox::backdrop {
  background: rgba(4, 8, 16, 0.82);
}

.lightbox img {
  display: block;
  max-width: 100%;
  max-height: 78vh;
  margin: 0 auto;
  border-radius: var(--radius-sm);
}

.lightbox-close {
  display: block;
  min-height: 44px;
  margin: var(--space-2) auto 0;
}
</style>
