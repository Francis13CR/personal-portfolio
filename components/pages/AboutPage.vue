<template>
  <section class="section page" aria-labelledby="sobre-mi-title" v-reveal>
    <div class="container about-intro">
      <div class="about-photo">
        <picture>
          <source srcset="/images/yo2.webp" type="image/webp">
          <img
            src="/images/yo2.jpg"
            alt="Francis Meléndez"
            width="240"
            height="240"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
      <div>
        <p class="section-label">Sobre mí</p>
        <h1 id="sobre-mi-title">Francis Meléndez</h1>
        <p class="about-role mono">Software Developer · Programming Supervisor</p>
        <div class="prose">
          <p>
            Desarrollador Full Stack con más de 4 años de experiencia construyendo y manteniendo
            plataformas SaaS de misión crítica que usan miles de negocios en Costa Rica. Combino el
            desarrollo activo con el liderazgo técnico: sprints, code review, gestión de tickets y
            mentoría. Soy el creador de Agendelo, un SaaS multi-tenant propio que está en producción.
          </p>
          <p>
            Curso la Licenciatura en Informática con énfasis en UX/UI en la Universidad de Costa Rica,
            lo que refuerza mi enfoque en la experiencia de las personas que usan lo que construyo.
          </p>
        </div>
        <p class="about-place mono">Esparza, Costa Rica</p>
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="como-pienso-title" v-reveal>
    <div class="container">
      <h2 id="como-pienso-title">Cómo pienso</h2>
      <p class="lede">
        Entender → Estructurar → Construir → Medir. Es el ciclo que sigo, tanto para un feature como
        para ordenar un equipo.
      </p>
      <ol class="cycle" role="list">
        <li v-for="(item, i) in ciclo" :key="item.paso" class="cycle-step">
          <span class="cycle-num mono">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3>{{ item.paso }}</h3>
          <p>{{ item.desc }}</p>
        </li>
      </ol>
    </div>
  </section>

  <section class="section" aria-labelledby="trayectoria-title" v-reveal>
    <div class="container">
      <h2 id="trayectoria-title">Trayectoria</h2>
      <ol class="timeline" role="list">
        <li v-for="job in experiencia" :key="job.periodo" class="timeline-item">
          <div class="timeline-head">
            <h3>{{ job.rol }}</h3>
            <p class="timeline-meta mono">
              <span>{{ job.empresa }}</span>
              <span aria-hidden="true">·</span>
              <span>{{ job.periodo }}</span>
            </p>
          </div>
          <ul class="timeline-bullets">
            <li v-for="b in job.bullets" :key="b">{{ b }}</li>
          </ul>
          <ul class="chip-list" role="list">
            <li v-for="t in job.stack" :key="t" class="chip">{{ t }}</li>
          </ul>
        </li>
      </ol>
    </div>
  </section>

  <section class="section" aria-labelledby="educacion-title" v-reveal>
    <div class="container">
      <h2 id="educacion-title">Educación</h2>
      <ol class="timeline" role="list">
        <li v-for="estudio in educacion" :key="estudio.titulo" class="timeline-item">
          <div class="timeline-head">
            <h3>{{ estudio.titulo }}</h3>
            <p class="timeline-meta mono">
              <span>{{ estudio.institucion }}</span>
              <span aria-hidden="true">·</span>
              <span>{{ estudio.periodo }}</span>
            </p>
          </div>
        </li>
      </ol>
    </div>
  </section>

  <section class="section" aria-labelledby="estado-title" v-reveal>
    <div class="container">
      <h2 id="estado-title">Estado actual</h2>
      <p class="role mono">Software Developer<br />Programming Supervisor</p>
      <p class="prose-inline">
        Trabajo en Facture.cr. Desarrollo, priorizo el backlog, refino tickets, asigno, reviso y
        garantizo que nada llegue a producción sin QA. En paralelo, curso la licenciatura y mantengo
        Agendelo en producción.
      </p>
      <pre
        class="codeblock mono"
        role="region"
        tabindex="0"
        aria-label="Comandos y stack actual"
      ><code>&gt; ahora_construyo_con:
  Vue · PHP · MySQL · APIs · automatización
&gt; estado: <span class="code-ok">siempre aprendiendo.</span></code></pre>
    </div>
  </section>

  <section class="section" aria-labelledby="fuera-title" v-reveal>
    <div class="container">
      <h2 id="fuera-title">Fuera del código</h2>
      <ul class="fuera" role="list">
        <li v-for="item in fuera" :key="item">{{ item }}</li>
      </ul>
    </div>
  </section>

  <section class="section" aria-labelledby="enlaces-title" v-reveal>
    <div class="container">
      <h2 id="enlaces-title">Enlaces</h2>
      <ul class="enlaces" role="list">
        <li>
          <a href="https://francismch.dev" target="_blank" rel="noopener noreferrer">francismch.dev</a>
        </li>
        <li>
          <a href="https://github.com/Francis13CR" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/francismch/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li>
          <a href="mailto:francismelendez134@gmail.com">francismelendez134@gmail.com</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { setSeo, setJsonLd, removeJsonLd, breadcrumb } from '../../assets/js/seo.js';

export default {
  name: 'AboutPage',
  data() {
    return {
      ciclo: [
        { paso: 'Entender', desc: 'Antes de tocar código, entiendo el problema y para quién es.' },
        {
          paso: 'Estructurar',
          desc: 'Divido, priorizo y defino reglas. Un problema ordenado ya es medio problema resuelto.',
        },
        { paso: 'Construir', desc: 'Escribo, reviso y pruebo. Nada llega a producción sin QA.' },
        {
          paso: 'Medir',
          desc: 'Miro si funcionó: tiempos, errores, tickets bloqueados. Si no se mide, no se mejora.',
        },
      ],
      experiencia: [
        {
          rol: 'Full Stack Developer & Programming Supervisor',
          empresa: 'Facture.cr',
          periodo: 'Ene 2024 – Actualidad',
          bullets: [
            'Liderazgo de un SaaS utilizado por miles de empresas en Costa Rica.',
            'Módulos de facturación electrónica, inventario y punto de venta.',
            'Integración de WhatsApp Business API y automatización con bots.',
            'Implementación de Scrum + Kanban en ClickUp.',
            'Mentoría a juniors y practicantes del equipo.',
          ],
          stack: ['PHP', 'Vue.js 3', 'MySQL', 'Docker'],
        },
        {
          rol: 'Full Stack Developer',
          empresa: 'Facture.cr',
          periodo: 'Sep 2021 – Ene 2024',
          bullets: [
            'Funcionalidades web con PHP y JavaScript.',
            'Optimización de queries e integración de herramientas internas.',
          ],
          stack: ['PHP', 'JavaScript', 'MySQL'],
        },
      ],
      educacion: [
        {
          titulo: 'Licenciatura en Informática y Tecnología Multimedia (UX/UI)',
          institucion: 'Universidad de Costa Rica',
          periodo: 'Mar 2024 – En curso',
        },
        {
          titulo: 'Bachillerato en Informática y Tecnología Multimedia',
          institucion: 'Universidad de Costa Rica',
          periodo: 'Mar 2019 – Jul 2024',
        },
      ],
      fuera: [
        'Taekwondo — incluso hice una app para la academia.',
        'Running y calistenia para despejar la cabeza.',
        'Música: aprender instrumentos porque quiero saber tocarlos.',
        'Videojuegos: sistemas, estrategia y mundos que explorar.',
        'Si lo puedo automatizar, lo automatizo.',
      ],
    };
  },
  mounted() {
    setSeo({
      title: 'Sobre mí — Francis Meléndez',
      description:
        'Francis Meléndez: Full Stack Developer y Programming Supervisor en Facture.cr. Bio, trayectoria, educación y cómo pienso.',
      path: '/sobre-mi',
    });
    setJsonLd('breadcrumb', breadcrumb([
      { name: 'Inicio', path: '/' },
      { name: 'Sobre mí', path: '/sobre-mi' },
    ]));
    removeJsonLd('project');
  },
};
</script>

<style scoped>
.about-intro {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: var(--space-4);
  align-items: start;
}

.about-photo img {
  width: 100%;
  max-width: 240px;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center top;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.about-role {
  margin: 0 0 var(--space-1);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent-software);
}

.about-place {
  margin-top: var(--space-2);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  color: var(--text-dim);
}

.cycle {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-2);
  margin: var(--space-3) 0 0;
  padding: 0;
  list-style: none;
}

.cycle-step {
  padding: var(--space-3);
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
}

.cycle-num {
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  color: var(--accent-software);
}

.cycle-step h3 {
  margin: 0.35rem 0 var(--space-1);
}

.cycle-step p {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.92rem;
}

.timeline {
  margin: var(--space-3) 0 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--line);
}

.timeline-item {
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--line);
}

.timeline-head h3 {
  margin-bottom: 0.35rem;
}

.timeline-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0 0 var(--space-2);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.timeline-bullets {
  margin: 0 0 var(--space-2);
  padding-left: 1.1rem;
  color: var(--text-muted);
}

.timeline-bullets li {
  margin-bottom: 0.3rem;
}

.role {
  margin: 0 0 var(--space-2);
  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1.9;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent-software);
}

.prose-inline {
  max-width: 72ch;
  color: var(--text-muted);
}

.codeblock {
  margin: var(--space-3) 0 0;
  padding: var(--space-2) var(--space-3);
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  color: var(--text-muted);
  font-size: 0.85rem;
  line-height: 1.9;
  overflow-x: auto;
}

.code-ok {
  color: var(--accent-movement);
}

.fuera,
.enlaces {
  margin: var(--space-2) 0 0;
  padding-left: 1.1rem;
  color: var(--text-muted);
}

.fuera li,
.enlaces li {
  margin-bottom: 0.4rem;
}

@media (max-width: 720px) {
  .about-intro {
    grid-template-columns: 1fr;
  }

  .about-photo img {
    max-width: 180px;
  }
}
</style>
