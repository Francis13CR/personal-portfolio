# Portafolio Personal - Francis Meléndez

Portafolio web profesional construido con Vue 3 y Webpack 5.

## 🚀 Comandos

### Desarrollo

```bash
npm start
```

Inicia el servidor de desarrollo en http://localhost:8080/ con hot reload automático.

### Producción

```bash
npm run build
```

Genera los archivos optimizados para producción en la carpeta `/dist`.

### Testing

```bash
npm test
```

⚠️ **Nota**: No hay test runner configurado actualmente.

## 📁 Estructura del Proyecto

```
personal-portfolio/
├── assets/
│   ├── css/              # Estilos globales
│   ├── images/           # Imágenes del portafolio y proyectos
│   └── js/
│       ├── firebase.js   # Configuración Firebase (legacy)
│       └── projects-data.js  # Datos de proyectos (actual)
├── components/           # Componentes Vue
│   ├── HomeComponent.vue
│   ├── AboutComponent.vue
│   ├── ProjectsComponent.vue
│   ├── BlogComponent.vue
│   └── ContactComponent.vue
├── router/              # Configuración Vue Router
├── src/
│   ├── App.vue         # Componente principal
│   └── index.js        # Entry point
├── dist/               # Build de producción (generado)
├── index.html          # HTML principal
├── webpack.config.js   # Configuración Webpack
└── package.json
```

## 🛠️ Tecnologías

- **Frontend**: Vue 3 (Options API), Bootstrap 5
- **Build Tool**: Webpack 5
- **Router**: Vue Router 4
- **Animaciones**: AOS (Animate On Scroll)
- **UI**: SweetAlert2, FontAwesome
- **Deployment**: Netlify

## 📝 Agregar Nuevos Proyectos

Edita el archivo `assets/js/projects-data.js` y agrega un nuevo objeto al array `proyectos`:

```javascript
{
  id: 'mi-proyecto',
  title: 'Mi Proyecto',
  description: 'Descripción detallada del proyecto...',
  created_at: new Date('2026-05-01'),
  status: 1,
  images: [
    '/images/proyecto-1.png',
    '/images/proyecto-2.png'
  ],
  technologies: ['Vue.js', 'Node.js', 'MongoDB'],
  link: 'https://miproyecto.com',
  github: 'https://github.com/usuario/proyecto'
}
```

Luego agrega las imágenes a `assets/images/`.

## 🌐 Deployment

El sitio está configurado para Netlify con soporte para Vue Router (web history mode).

El archivo `_redirects` contiene:
```
/* /index.html 200
```

Esto permite que las rutas de Vue Router funcionen correctamente en producción.

## 🔧 Variables de Entorno

Si usas Firebase u otros servicios que requieren API keys, crea un archivo `.env` en la raíz:

```env
API_KEY=tu_api_key
AUTH_DOMAIN=tu_auth_domain
PROJECT_ID=tu_project_id
STORAGE_BUCKET=tu_storage_bucket
MESSAGING_SENDER_ID=tu_sender_id
APP_ID=tu_app_id
MEASUREMENT_ID=tu_measurement_id
```

## 📄 Licencia

© 2026 Francis Meléndez
