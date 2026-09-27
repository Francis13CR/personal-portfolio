// seo-assets-plugin.js — Emite en `dist/` los assets de descubribilidad:
// `_redirects`, `robots.txt`, favicons y un `sitemap.xml` generado desde
// `projects-data.js` + las rutas estáticas. Sin dependencias nuevas.
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const ROOT = path.resolve(__dirname, '..');
const SITE_ORIGIN = 'https://francismch.dev';

// Rutas estáticas del sitio (las dinámicas salen de projects-data.js).
const STATIC_ROUTES = [
  { path: '/', changefreq: 'monthly', priority: '1.0' },
  { path: '/proyectos', changefreq: 'monthly', priority: '0.9' },
  { path: '/sobre-mi', changefreq: 'yearly', priority: '0.8' },
  { path: '/contacto', changefreq: 'yearly', priority: '0.7' },
];

// Mismo algoritmo que assets/js/slug.js (se duplica aquí porque el build es CommonJS).
function slugify(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Lee los `id` de projects-data.js sin ejecutarlo (el archivo es ESM).
function readProjectIds() {
  const source = fs.readFileSync(path.resolve(ROOT, 'assets/js/projects-data.js'), 'utf8');
  const ids = [];
  const re = /id:\s*'([^']+)'/g;
  let match;
  while ((match = re.exec(source)) !== null) {
    ids.push(match[1]);
  }
  return ids;
}

function buildSitemap() {
  const urls = STATIC_ROUTES.map((route) => ({
    loc: `${SITE_ORIGIN}${route.path}`,
    changefreq: route.changefreq,
    priority: route.priority,
  }));

  readProjectIds().forEach((id) => {
    urls.push({
      loc: `${SITE_ORIGIN}/proyectos/${slugify(id)}`,
      changefreq: 'monthly',
      priority: '0.6',
    });
  });

  const body = urls
    .map(
      (url) =>
        `  <url>\n    <loc>${url.loc}</loc>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>\n  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

class SeoAssetsPlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap('SeoAssetsPlugin', (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: 'SeoAssetsPlugin',
          stage: webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
        },
        () => {
          const emit = (name, content) => {
            compilation.emitAsset(name, new webpack.sources.RawSource(content));
          };

          // Archivos estáticos de la raíz → dist
          ['_redirects', 'robots.txt'].forEach((file) => {
            emit(file, fs.readFileSync(path.resolve(ROOT, file), 'utf8'));
          });

          // Assets de la mascota y tarjeta social (los archivos de imagen no se editan; solo se copian)
          [
            'mascot-badge.ico',
            'mascot-badge-96.png',
            'mascot-badge-180.png',
            'mascot-1024.webp',
            'mascot-1024.jpg',
            'og-card.jpg',
            // Mascotas pixel art por skill (mapa de intereses)
            'camaron-software.png',
            'camaron-running.png',
            'camaron-calistenia.png',
            'camaron-taekwondo.png',
            'camaron-juegos.png',
            'camaron-musica.png',
            // Retrato de Sobre mí optimizado (webp + jpg de respaldo)
            'yo2.webp',
            'yo2.jpg',
          ].forEach((file) => {
            emit(`images/${file}`, fs.readFileSync(path.resolve(ROOT, 'assets/images', file)));
          });

          // Sitemap generado
          emit('sitemap.xml', buildSitemap());
        }
      );
    });
  }
}

module.exports = SeoAssetsPlugin;