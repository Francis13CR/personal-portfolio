<template>
  <section class="section page" aria-labelledby="accesibilidad-title" v-reveal>
    <div class="container">
      <p class="section-label">Accesibilidad</p>
      <h1 id="accesibilidad-title">Accesibilidad</h1>
      <p class="lede">
        Me comprometo a que este sitio sea accesible para todas las personas, sin importar su
        capacidad o la tecnología que usen.
      </p>

      <div class="prose">
        <h2>Estado de conformidad</h2>
        <p>
          Este sitio <strong>cumple con el nivel AA de las Pautas de Accesibilidad para el Contenido
          Web (WCAG) 2.2</strong>. Las WCAG definen tres niveles (A, AA y AAA); AA es el que adoptan
          la mayoría de legislaciones y organizaciones.
        </p>
        <p class="a11y-logo">
          <a
            href="https://www.w3.org/WAI/WCAG2AA-Conformance"
            title="Explanation of WCAG 2 Level AA conformance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              height="31"
              width="88"
              src="/images/wcag22AA.svg"
              alt="Level AA conformance, W3C Web Content Accessibility Guidelines 2.2"
            />
          </a>
        </p>
        <p class="a11y-note">
          El distintivo es una declaración propia; no implica revisión ni validación por parte del
          W3C/WAI.
        </p>

        <h2>Cómo se evaluó</h2>
        <p>
          La conformidad se determinó mediante una autoevaluación (27 de septiembre de 2026) que
          combinó:
        </p>
        <ul>
          <li>
            Herramientas automatizadas: axe-core 4.13 (reglas WCAG 2.0/2.1/2.2 A y AA) y el
            validador de marcado Nu HTML Checker.
          </li>
          <li>Inspección del árbol de accesibilidad (roles y nombres) del navegador.</li>
          <li>
            Pruebas manuales: navegación por teclado, orden y visibilidad del foco, zoom al 200 %,
            reflow a 320 px, espaciado del texto, contraste, orientación y respeto a la preferencia
            de movimiento reducido.
          </li>
        </ul>

        <h2>Alcance</h2>
        <p>
          La declaración cubre 10 páginas representativas del sitio (inicio, proyectos, cuatro
          fichas de proyecto, sobre mí, contacto y páginas de error), evaluadas en escritorio y
          móvil.
        </p>

        <h2>Limitaciones conocidas</h2>
        <ul>
          <li>
            No se han ejecutado pruebas con lectores de pantalla reales (NVDA, JAWS, VoiceOver). Se
            evaluó el árbol de accesibilidad del navegador como aproximación.
          </li>
          <li>El contenido de terceros (por ejemplo, anuncios) puede quedar fuera de este control.</li>
        </ul>

        <h2>Comentarios y contacto</h2>
        <p>
          Si encuentras una barrera de accesibilidad, escríbeme a
          <a href="mailto:francismelendez134@gmail.com">francismelendez134@gmail.com</a> indicando la
          página y el problema. Me comprometo a revisarlo y responder.
        </p>

        <p class="a11y-date mono">Elaborada el 27 de septiembre de 2026.</p>
      </div>
    </div>
  </section>
</template>

<script>
import { setSeo, setJsonLd, removeJsonLd, breadcrumb } from '../../assets/js/seo.js';

export default {
  name: 'AccessibilityPage',
  mounted() {
    setSeo({
      title: 'Accesibilidad — Francis Meléndez',
      description:
        'Declaración de accesibilidad de francismch.dev: conformidad con WCAG 2.2 nivel AA y cómo se evaluó.',
      path: '/accesibilidad',
    });
    setJsonLd('breadcrumb', breadcrumb([
      { name: 'Inicio', path: '/' },
      { name: 'Accesibilidad', path: '/accesibilidad' },
    ]));
    removeJsonLd('project');
  },
};
</script>

<style scoped>
.prose h2 {
  margin-top: var(--space-5);
}

.a11y-logo {
  margin: var(--space-3) 0 var(--space-1);
}

.a11y-logo a {
  display: inline-block;
}

.a11y-logo img {
  display: block;
}

.a11y-note {
  font-size: 0.85rem;
  color: var(--text-dim);
}

.a11y-date {
  margin-top: var(--space-4);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  color: var(--text-dim);
}
</style>
