// projects-data.js
// Datos locales de proyectos (reemplazo de Firebase)

const proyectos = [
  {
    id: 'agendelo-app',
    title: 'Agendelo.app — Plataforma de Citas Online',
    description: 'Plataforma SaaS de agendamiento de citas online para negocios y profesionales independientes en Costa Rica y Latinoamérica. Permite a cualquier negocio —clínicas, salones de belleza, consultorios, estudios, entrenadores— crear su página de reservas personalizada en minutos, sin necesidad de conocimientos técnicos.\n\nLos clientes pueden agendar citas 24/7 desde cualquier dispositivo, recibir confirmaciones automáticas por correo y recordatorios antes de su cita. Los negocios gestionan su agenda, servicios, colaboradores y disponibilidad desde un panel de administración intuitivo.\n\nCaracterísticas principales: página de reservas pública personalizada por negocio, gestión de múltiples colaboradores y horarios individuales, catálogo de servicios con duración y precio, recordatorios automáticos por correo, panel de administración con vista de calendario, historial de citas y clientes, y sistema de autenticación seguro. Construido con Vue 3, Node.js, Firebase y desplegado en producción con usuarios activos.',
    created_at: new Date('2026-02-01'),
    status: 1,
    images: [
      '/images/agendelo.app.png',
      '/images/agendelo.png'
    ],
    technologies: ['Vue 3', 'Node.js', 'Firebase', 'Firestore', 'Tailwind CSS', 'JavaScript', 'SaaS', 'Auth', 'Email Automation', 'Responsive Design'],
    link: 'https://agendelo.app/',
    github: null
  },
  {
    id: 'buscador-cabys',
    title: 'Buscador Cabys',
    description: 'Herramienta web especializada para la búsqueda de códigos CABYS (Catálogo de Bienes y Servicios) en Costa Rica. Desarrollada para facilitar el cumplimiento tributario de empresas y profesionales que requieren clasificar productos y servicios para facturación electrónica. La aplicación permite búsquedas rápidas por palabras clave, filtrado inteligente de resultados y funcionalidades de productividad como copia automática al portapapeles y compartir códigos. Optimizada para uso diario con interfaz responsive y rendimiento ágil, soporta miles de búsquedas mensuales de contadores, desarrolladores y empresarios costarricenses.',
    created_at: new Date('2025-03-01'),
    status: 1,
    images: [
      '/images/cabys_home.png',
      '/images/cabys_busqueda.png'
    ],
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'API CABYS', 'Responsive Design', 'PWA'],
    link: 'https://buscadorcabys.francismch.dev/?version=2',
    github: null
  },
  {
    id: 'taekwondo-fenix-app',
    title: 'Taekwondo Fenix App',
    description: 'Aplicación móvil nativa desarrollada con NativeScript-Vue para Android, diseñada específicamente para los estudiantes de la academia TKD Fénix. Facilita la preparación para exámenes de cambio de cinta (gup) mediante contenido educativo estructurado por nivel: formas (poomsae), técnicas de defensa personal, terminología en coreano, historia del Taekwondo y código de conducta del Taekwon-Do. Incluye videos demostrativos, cuestionarios interactivos, seguimiento de progreso personal y recordatorios de entrenamiento. Utilizada activamente por más de 50 estudiantes de la academia, ha mejorado significativamente las tasas de aprobación en exámenes y el compromiso de los atletas con su práctica.',
    created_at: new Date('2023-11-08'),
    status: 1,
    images: [
      '/images/tkd-fenix-1.png',
      '/images/tkd-fenix-2.png'
    ],
    technologies: ['NativeScript-Vue', 'Vue.js', 'Mobile Development', 'Android', 'SQLite'],
    link: 'https://play.google.com/store/apps/details?id=org.nativescript.TKDQuiz&pli=1',
    github: null
  },
  {
    id: 'pacific-sun-travel',
    title: 'Pacific Sun Travel — Tours en Costa Rica',
    description: 'Sitio web profesional para agencia de tours en Costa Rica, bilingüe (español/inglés) con catálogo de 10 paquetes turísticos. Diseñado para mostrar la belleza natural de Costa Rica y convertir visitantes en clientes mediante una experiencia inmersiva.\n\nImplementa diseño de una sola página (SPA) con secciones apiladas: Hero con animación de olas SVG y elementos decorativos (guacamaya, sol), galería de tours con búsqueda y filtros (texto, categoría, duración, ordenamiento), sección "Acerca de" con estadísticas animadas, cuadrícula de testimonios, FAQ con acordeón y formulario de contacto integrado con Web3Forms.\n\nCaracterísticas destacadas: cambio de idioma Español ↔ Inglés con vue-i18n y persistencia en localStorage, búsqueda con normalización de acentos (NFD), contadores animados con useCountUp, animaciones de scroll reveal, diseño completamente responsive con Tailwind CSS 4, cotización desde el modal de tour que auto-prefilla el formulario de contacto, botón flotante de WhatsApp con mensaje localizado, y elementos decorativos animados (guacamaya, sol, olas, palmera, brújula).\n\nConstruido con Vue 3 Composition API, TypeScript estricto, Vite 7, Tailwind CSS 4 con tokens de color personalizados (amarillo, naranja, azul, rojo, morado) y Lucide icons.',
    created_at: new Date('2026-05-12'),
    status: 1,
    images: [
      '/images/agencia-tour.png'
    ],
    technologies: ['Vue 3', 'TypeScript', 'Vite 7', 'Tailwind CSS 4', 'vue-i18n', 'Web3Forms', 'Lucide Icons', 'SEO', 'Bilingual (ES/EN)', 'Responsive Design', 'Animaciones CSS'],
    link: 'https://pacificsuntravel.com/',
    github: null
  }
];

// Función para obtener todos los proyectos (reemplazo de getBlogPosts)
export async function getBlogPosts() {
  // Ordenar proyectos por fecha del más nuevo al más viejo
  const sortedProyectos = [...proyectos].sort((a, b) => b.created_at - a.created_at);
  
  // Simulamos el formato que venía de Firebase
  return sortedProyectos.map(proyecto => ({
    ...proyecto,
    created_at: proyecto.created_at.toLocaleDateString(),
    subtitle: proyecto.subtitle || (proyecto.description?.substring(0, 170) ?? '') + '...'
  }));
}

// Función para obtener un proyecto por ID (reemplazo de getProjectById)
export async function getProjectById(id) {
  const project = proyectos.find(p => p.id === id || p.title === id);
  
  if (!project) {
    return null;
  }

  return {
    ...project,
    created_at: project.created_at.toLocaleDateString()
  };
}
