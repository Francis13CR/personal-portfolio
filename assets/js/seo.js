// seo.js — Utilidad de metadatos por ruta (sin dependencias).
// Actualiza title, description, canonical, Open Graph/Twitter y JSON-LD.
// Funciona para buscadores que ejecutan JS (Google). Ver limitación SPA del spec §6.5.

export const SITE = {
  origin: 'https://francismch.dev',
  name: 'Francis Meléndez',
  role: 'Software Developer & Programming Supervisor',
  defaultTitle: 'Francis Meléndez — Software Developer & Programming Supervisor',
  defaultDescription:
    'Portafolio de Francis Meléndez: Software Developer y Programming Supervisor en Facture.cr. Software, sistemas y curiosidad. Systems, not just code.',
  ogImage: 'https://francismch.dev/images/og-card.jpg',
  ogImageAlt: 'Francis Meléndez — Systems, not just code.',
};

function ensureMeta(attr, key) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  return el;
}

function ensureLink(rel) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  return el;
}

function normalizePath(path) {
  if (!path || path === '/') {
    return '/';
  }
  const withSlash = path.startsWith('/') ? path : `/${path}`;
  return withSlash.replace(/\/+$/, '');
}

export function absoluteUrl(path) {
  return `${SITE.origin}${normalizePath(path)}`;
}

// Actualiza los metadatos básicos y de redes sociales.
export function setMeta({ title, description }) {
  const fullTitle = title || SITE.defaultTitle;
  const desc = description || SITE.defaultDescription;

  document.title = fullTitle;

  ensureMeta('name', 'description').setAttribute('content', desc);
  ensureMeta('property', 'og:title').setAttribute('content', fullTitle);
  ensureMeta('property', 'og:description').setAttribute('content', desc);
  ensureMeta('property', 'og:image').setAttribute('content', SITE.ogImage);
  ensureMeta('property', 'og:image:alt').setAttribute('content', SITE.ogImageAlt);
  ensureMeta('name', 'twitter:title').setAttribute('content', fullTitle);
  ensureMeta('name', 'twitter:description').setAttribute('content', desc);
  ensureMeta('name', 'twitter:image').setAttribute('content', SITE.ogImage);
  ensureMeta('name', 'twitter:image:alt').setAttribute('content', SITE.ogImageAlt);
}

// Actualiza canonical y og:url.
export function setCanonical(path) {
  const url = absoluteUrl(path);
  ensureLink('canonical').setAttribute('href', url);
  ensureMeta('property', 'og:url').setAttribute('content', url);
  return url;
}

// Controla el meta robots (p. ej. noindex en 404).
export function setRobots(content) {
  ensureMeta('name', 'robots').setAttribute('content', content);
}

export function setSeo({ title, description, path, robots } = {}) {
  setMeta({ title, description });
  setCanonical(path || '/');
  setRobots(robots || 'index,follow');
}

// Inyecta/reemplaza un bloque JSON-LD identificado por `name`.
export function setJsonLd(name, data) {
  if (typeof document === 'undefined') {
    return;
  }
  let script = document.head.querySelector(`script[data-seo-jsonld="${name}"]`);
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-jsonld', name);
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export function removeJsonLd(name) {
  if (typeof document === 'undefined') {
    return;
  }
  const script = document.head.querySelector(`script[data-seo-jsonld="${name}"]`);
  if (script) {
    script.remove();
  }
}

// Construye un BreadcrumbList a partir de [{ name, path }].
export function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

// Construye un SoftwareApplication a partir de un proyecto.
export function softwareApplication(project) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.description,
    author: { '@id': `${SITE.origin}/#person` },
    inLanguage: 'es',
  };
  if (project.link) {
    data.url = project.link;
  }
  return data;
}

export default { SITE, setMeta, setCanonical, setRobots, setSeo, setJsonLd, removeJsonLd, breadcrumb, softwareApplication, absoluteUrl };