// projects-data.js
// Datos locales de proyectos (reemplazo de Firebase)

const proyectos = [
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
    id: 'demo-dentista',
    title: 'Demo Clínica Dental',
    description: 'Sitio web showcase profesional para clínicas dentales, desarrollado como demostración de servicios de desarrollo web para el sector salud. Presenta un diseño moderno, limpio y orientado a la conversión, con secciones optimizadas para mostrar servicios odontológicos, equipo médico, testimonios de pacientes y formularios de contacto/citas. Implementa las mejores prácticas de UX/UI para el sector médico: jerarquía visual clara, tipografía legible, paleta de colores que transmite confianza y profesionalismo, imágenes de alta calidad y CTAs estratégicamente ubicados. Totalmente responsive con rendimiento optimizado, accesibilidad WCAG 2.1 y SEO técnico. Sirve como plantilla base personalizable para consultorios dentales que buscan presencia digital profesional sin la complejidad de un CMS.',
    created_at: new Date('2026-01-15'),
    status: 1,
    images: [
      '/images/demo-dentista-1.png',
      '/images/demo-dentitas-2.png',
      '/images/demo-dentista-3.png'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Bootstrap 5', 'SEO'],
    link: 'https://demo-dentista.francismch.dev/',
    github: null
  },
  {
    id: 'centro-educativo-sol-naciente',
    title: 'Centro Educativo Bilingüe Sol Naciente',
    description: 'Sitio web institucional para centro educativo bilingüe de excelencia ubicado en Esparza, Puntarenas. El proyecto presenta una plataforma digital completa que refleja los valores educativos de la institución: bilingüismo auténtico (español-inglés), educación con valores, tecnología con propósito y atención personalizada. El sitio incluye presentación de niveles académicos (materno, preescolar, primaria y secundaria), equipo docente con perfiles profesionales, proceso de matrícula paso a paso, galería de instalaciones, eventos académicos y formularios de contacto optimizados. Diseño orientado a conversión de leads (padres de familia) con testimonios de estudiantes, carta de la directora y tours virtuales. Implementa diseño responsive, optimización SEO para búsquedas locales de educación bilingüe en Costa Rica, y CTA estratégicos para solicitar visitas guiadas. Arquitectura de información clara que facilita la navegación para distintos perfiles de usuario: padres investigando opciones educativas, estudiantes actuales y personal docente.',
    created_at: new Date('2026-03-20'),
    status: 1,
    images: [
      '/images/demo-educativo-1.png',
      '/images/demo-educativo-2.png',
      '/images/demo-educativo-3.png'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Tailwind CSS', 'SEO Local', 'Forms Validation'],
    link: 'https://demo-centro-educativo.francismch.dev',
    github: null
  },
  {
    id: 'vivero-la-raiz',
    title: 'Vivero y Paisajismo La Raíz',
    description: 'Plataforma web completa para vivero y empresa de diseño paisajístico sostenible con 15 años de experiencia en Costa Rica. El sitio integra tres líneas de negocio: venta de plantas ornamentales (catálogo de más de 200 especies con filtros por tipo, luz y tamaño), servicios de diseño y construcción de jardines, y mantenimiento profesional. Incluye portafolio visual de proyectos ejecutados con comparadores antes/después interactivos, catálogo de plantas con fichas técnicas (nombre científico, requerimientos de luz, tamaño), proceso de trabajo paso a paso (desde consulta inicial hasta mantenimiento), testimonios de clientes con fotos reales y formularios de cotización segmentados por tipo de servicio. Diseño enfocado en transmitir expertise en paisajismo tropical sostenible, uso de especies nativas y enfoque ecológico. Funcionalidades destacadas: galería de proyectos filtrable por tipo de jardín, integración con WhatsApp para consultas rápidas de disponibilidad de plantas, calculadora de presupuesto estimado y sistema de agendamiento de visitas al vivero. Optimizado para SEO local (búsquedas de viveros y paisajismo en San José) con schema markup para negocios locales.',
    created_at: new Date('2026-04-10'),
    status: 1,
    images: [
      '/images/demo-vivero-1.png',
      '/images/demo-vivero-2.png',
      '/images/demo-vivero-3.png'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Bootstrap 5', 'SEO Local', 'WhatsApp Integration', 'Image Optimization'],
    link: 'https://demo-vivero.francismch.dev/',
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
