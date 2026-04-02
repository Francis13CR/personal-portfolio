<!-- components/HomeComponent.vue -->
<template>
  <div>

    <!-- HERO -->
    <section id="inicio" class="hero-section border-bottom" data-aos="fade-up">
      <div class="container py-5">
        <div class="row align-items-center py-4">
          <div class="col-md-7 col-12 mb-4 mb-md-0" data-aos="fade-right">
            <p class="text-warning mb-1" style="font-size:0.95rem; letter-spacing:2px; text-transform:uppercase;">Full Stack Developer</p>
            <h1 class="fw-bold mb-2 name-hover" style="font-size: clamp(2.2rem, 5vw, 3.5rem); line-height:1.15;">
              Francis Meléndez
            </h1>
            <h2 class="mb-4" style="font-size: clamp(1.1rem, 2.5vw, 1.5rem); font-weight:400; color: rgba(255,255,255,0.75); min-height: 2rem;">
              <span ref="typewriter"></span><span class="typewriter-cursor"></span>
            </h2>
            <p class="mb-4" style="color: rgba(255,255,255,0.65); max-width: 520px; line-height:1.75;">
              Más de 4 años construyendo SaaS que usan miles de negocios ticos.
              De día lidero sprints en Facture.cr; de noche le sigo metiendo features a
              <strong style="color: var(--accent);">Agendelo</strong> — mi SaaS multi-tenant favorito
              (soy parcial, lo sé). Estudio UX/UI en la UCR porque el código bonito por dentro
              también debe verse bien por fuera.
            </p>
            <div class="d-flex flex-wrap gap-2 mb-4">
              <span class="stat-pill">&#9889; 4+ años</span>
              <span class="stat-pill">&#127959;&#65039; 1 SaaS propio</span>
              <span class="stat-pill">&#127464;&#127479; Hecho en Costa Rica</span>
              <span class="stat-pill">&#9749; Powered by café</span>
            </div>
            <div class="d-flex flex-wrap gap-2 mb-4">
              <a href="#proyectos" class="btn btn-accent">Ver Proyectos</a>
              <a @click="$parent.showContact()" class="btn btn-outline-light" style="border-radius:8px; padding:10px 24px; font-weight:600; cursor:pointer;">Contacto</a>
            </div>
            <div class="mt-2">
              <a href="https://github.com/Francis13CR" target="_blank" class="social-icon-link"><i class="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/francismch/" target="_blank" class="social-icon-link"><i class="fab fa-linkedin"></i></a>
              <a href="mailto:francismelendez134@gmail.com" class="social-icon-link"><i class="fas fa-envelope"></i></a>
              <a href="https://francismch.dev" target="_blank" class="social-icon-link"><i class="fas fa-globe"></i></a>
            </div>
          </div>
          <div class="col-md-5 col-12 d-flex justify-content-center" data-aos="fade-left">
            <img
              src="../assets/images/yo2.png"
              alt="Francis Meléndez"
              class="profile-img-hero"
              title="Sí, ese soy yo. 👋"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-title="Sí, ese soy yo 👋"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills" class="border-bottom py-5" data-aos="fade-up">
      <div class="container">
        <h2 class="section-title">Stack Tecnológico</h2>
        <div class="row g-4 mt-2">
          <div class="col-md-3 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="0">
            <div class="card h-100 p-3">
              <div class="mb-3">
                <i class="fas fa-code fa-2x" style="color: var(--accent);"></i>
              </div>
              <h5 class="fw-semibold mb-3">Frontend</h5>
              <div>
                <span class="badge-tech">Vue.js 3</span>
                <span class="badge-tech">JS ES6+</span>
                <span class="badge-tech">HTML5</span>
                <span class="badge-tech">CSS3</span>
                <span class="badge-tech">SASS</span>
                <span class="badge-tech">Tailwind CSS</span>
                <span class="badge-tech">NativeScript-Vue</span>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="80">
            <div class="card h-100 p-3">
              <div class="mb-3">
                <i class="fas fa-server fa-2x" style="color: var(--accent);"></i>
              </div>
              <h5 class="fw-semibold mb-3">Backend</h5>
              <div>
                <span class="badge-tech">PHP</span>
                <span class="badge-tech">Laravel 12</span>
                <span class="badge-tech">RESTful APIs</span>
                <span class="badge-tech">Webhooks</span>
                <span class="badge-tech">JWT / OAuth</span>
                <span class="badge-tech">Sanctum</span>
                <span class="badge-tech">Job Queues</span>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="160">
            <div class="card h-100 p-3">
              <div class="mb-3">
                <i class="fas fa-database fa-2x" style="color: var(--accent);"></i>
              </div>
              <h5 class="fw-semibold mb-3">Bases de Datos</h5>
              <div>
                <span class="badge-tech">MySQL</span>
                <span class="badge-tech">MariaDB</span>
                <span class="badge-tech">Oracle SQL</span>
                <span class="badge-tech">Eloquent ORM</span>
                <span class="badge-tech">Stored Procedures</span>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="240">
            <div class="card h-100 p-3">
              <div class="mb-3">
                <i class="fas fa-cogs fa-2x" style="color: var(--accent);"></i>
              </div>
              <h5 class="fw-semibold mb-3">DevOps & Herramientas</h5>
              <div>
                <span class="badge-tech">Docker</span>
                <span class="badge-tech">Git / GitHub Actions</span>
                <span class="badge-tech">Coolify</span>
                <span class="badge-tech">Linux</span>
                <span class="badge-tech">Postman</span>
                <span class="badge-tech">Figma</span>
                <span class="badge-tech">ClickUp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EXPERIENCIA -->
    <section id="experiencia" class="border-bottom py-5" data-aos="fade-up">
      <div class="container">
        <h2 class="section-title">Experiencia Profesional</h2>
        <div class="mt-4">

          <div class="timeline-item">
            <div class="d-flex flex-wrap justify-content-between align-items-start mb-1">
              <div>
                <h5 class="fw-bold mb-0">Full Stack Developer &amp; Líder de Desarrollo</h5>
                <span class="text-warning fw-semibold">Facture.cr</span>
                <span class="text-muted ms-2" style="font-size:0.85rem;">Esparza, Costa Rica</span>
              </div>
              <span class="badge bg-warning text-dark mt-1">Ene 2024 – Actualidad</span>
            </div>
            <ul class="mt-2" style="color: rgba(255,255,255,0.75);">
              <li>Liderazgo del desarrollo de SaaS para miles de empresas en Costa Rica</li>
              <li>Módulos full-stack: facturación electrónica, inventario, punto de venta</li>
              <li>Introducción de Scrum + Kanban en ClickUp para gestión de sprints y tickets</li>
              <li>Integración de WhatsApp Business API y bots internos de automatización</li>
              <li>Code review, validación y despliegue de cambios en producción</li>
              <li>Mentoría a junior devs y practicantes del equipo</li>
            </ul>
            <div class="mt-2">
              <span class="badge-tech">PHP</span>
              <span class="badge-tech">Vue.js 3</span>
              <span class="badge-tech">MySQL</span>
              <span class="badge-tech">Laravel</span>
              <span class="badge-tech">Docker</span>
              <span class="badge-tech">ClickUp</span>
              <span class="badge-tech">WhatsApp API</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="d-flex flex-wrap justify-content-between align-items-start mb-1">
              <div>
                <h5 class="fw-bold mb-0">Full Stack Developer (Jornada Parcial)</h5>
                <span class="text-warning fw-semibold">Facture.cr</span>
                <span class="text-muted ms-2" style="font-size:0.85rem;">Esparza, Costa Rica</span>
              </div>
              <span class="badge bg-secondary mt-1">Sep 2021 – Ene 2024</span>
            </div>
            <ul class="mt-2" style="color: rgba(255,255,255,0.75);">
              <li>Desarrollo de funcionalidades web con PHP y JavaScript</li>
              <li>Optimización de queries SQL e integración de herramientas internas</li>
              <li>Soporte y mantenimiento de plataforma productiva</li>
            </ul>
            <div class="mt-2">
              <span class="badge-tech">PHP</span>
              <span class="badge-tech">JavaScript</span>
              <span class="badge-tech">MySQL</span>
              <span class="badge-tech">HTML</span>
              <span class="badge-tech">CSS</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- PROYECTOS -->
    <section id="proyectos" class="border-bottom py-5" data-aos="fade-up">
      <div class="container">
        <h2 class="section-title">Proyectos Destacados</h2>
        <div class="row g-4 mt-2">
          <div
            v-for="proyecto in proyectos"
            :key="proyecto.id"
            class="col-lg-4 col-md-6 col-12"
            v-show="proyecto.status == 1"
            data-aos="fade-up"
          >
            <div class="card h-100" style="position: relative;" @click="goToProject(proyecto)">
              <div style="position:relative; overflow:hidden; border-radius: var(--radius) var(--radius) 0 0;">
                <img
                  :src="proyecto.images ? proyecto.images[0] : ''"
                  class="card-img-top"
                  alt="Imagen del proyecto"
                  style="height: 200px; object-fit: cover; display:block; width:100%;"
                  @mouseover="showEyeIcon($event)"
                  @mouseleave="hideEyeIcon($event)"
                />
                <div
                  class="eye-icon"
                  style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: none; cursor: pointer; background: rgba(0,0,0,0.55); border-radius: 50%; padding: 12px;"
                >
                  <i class="fa-solid fa-eye fa-2x" style="color: white;"></i>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title fw-bold mb-1">{{ proyecto.title }}</h5>
                <p class="card-text mb-2" style="color: rgba(255,255,255,0.65); font-size:0.9rem;">{{ proyecto.subtitle }}</p>
                <div v-if="proyecto.stack && proyecto.stack.length">
                  <span
                    v-for="tech in proyecto.stack"
                    :key="tech"
                    class="badge-tech"
                  >{{ tech }}</span>
                </div>
              </div>
              <div class="card-footer" style="border-top: 1px solid var(--accent-dim); background: transparent;">
                <small class="text-muted">{{ proyecto.created_at }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="py-5" data-aos="fade-up">
      <div class="container text-center">
        <h2 class="fw-bold mb-3">Trabajemos Juntos</h2>
        <p class="mb-4" style="color: rgba(255,255,255,0.65); max-width: 560px; margin: 0 auto 1.5rem;">
          ¿Tienes un proyecto en mente o necesitas consultoría técnica? Con más de 4 años de experiencia en
          desarrollo full stack y liderazgo técnico, puedo ayudarte a llevar tus ideas al siguiente nivel.
        </p>
        <a @click="$parent.showContact()" class="btn btn-accent me-2" style="cursor:pointer;">Contáctame</a>
        <a href="https://github.com/Francis13CR" target="_blank" class="btn btn-outline-light" style="border-radius:8px; padding:10px 24px; font-weight:600;">
          <i class="fab fa-github me-1"></i> GitHub
        </a>
        <div class="mt-4">
          <a href="https://github.com/Francis13CR" target="_blank" class="social-icon-link"><i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/francismch/" target="_blank" class="social-icon-link"><i class="fab fa-linkedin"></i></a>
          <a href="mailto:francismelendez134@gmail.com" class="social-icon-link"><i class="fas fa-envelope"></i></a>
          <a href="https://francismch.dev" target="_blank" class="social-icon-link"><i class="fas fa-globe"></i></a>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { getBlogPosts } from "../assets/js/firebase.js";
import 'aos/dist/aos.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Swal from 'sweetalert2';
import AOS from 'aos';
import anime from 'animejs/lib/anime.es.js';
import { Tooltip } from 'bootstrap';

export default {
  name: "HomeComponent",
  data() {
    return {
      isMobile: false,
      isLoading: true,
      proyectos: [],
      typewriterTimer: null,
    };
  },
  async mounted() {
    // Easter egg en la consola
    console.log('%c¡Hola, curioso! 👋', 'color: #FFD43B; font-size: 18px; font-weight: bold;');
    console.log('%cSi estás leyendo esto, probablemente eres developer. Me cae bien.', 'color: #aaa; font-size: 13px;');
    console.log('%c→ github.com/Francis13CR', 'color: #FFD43B; font-size: 12px;');

    // Tooltips Bootstrap
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
      new Tooltip(el);
    });

    document.body.appendChild(document.createDocumentFragment());
    this.checkDevice();
    window.addEventListener("resize", this.checkDevice);
    setTimeout(this.finishLoading, 0);
    this.proyectos = [];
    this.proyectos = await getBlogPosts();

    // Typewriter effect
    const phrases = ['Full Stack Developer', 'Líder Técnico', 'Creador de Agendelo'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const el = this.$refs.typewriter;
      if (!el) return;
      const current = phrases[phraseIndex];
      if (isDeleting) {
        el.textContent = current.substring(0, charIndex--);
      } else {
        el.textContent = current.substring(0, charIndex++);
      }
      if (!isDeleting && charIndex === current.length + 1) {
        isDeleting = true;
        this.typewriterTimer = setTimeout(type, 1500);
        return;
      }
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
      this.typewriterTimer = setTimeout(type, isDeleting ? 60 : 100);
    };
    this.typewriterTimer = setTimeout(type, 600);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkDevice);
    clearTimeout(this.typewriterTimer);
  },
  methods: {
    showEyeIcon(event) {
      const eyeIcon = event.target.nextElementSibling;
      if (eyeIcon) eyeIcon.style.display = 'block';
    },
    hideEyeIcon(event) {
      const eyeIcon = event.target.nextElementSibling;
      if (eyeIcon) eyeIcon.style.display = 'none';
    },
    goToProject(proyecto) {
      this.$router.push({ path: `/projects/${proyecto.title}`, query: { id: proyecto.id } });
    },
    checkDevice() {
      this.isMobile = window.matchMedia("(max-width: 768px)").matches;
    },
    finishLoading() {
      this.isLoading = false;
      const particules = document.querySelectorAll(".particule");
      particules.forEach((p) => p.remove());
      this.$nextTick(() => {
        AOS.init({
          disable: 'mobile',
          duration: 700,
          once: true,
        });
      });
    },
  },
};
</script>

<style scoped>
.profile-img-hero {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  border: 3px solid var(--accent-dim);
  box-shadow: 0 0 40px rgba(255, 212, 59, 0.15);
}

.eye-icon {
  transition: opacity 0.3s ease;
}

@media (max-width: 768px) {
  .profile-img-hero {
    width: 200px;
    height: 200px;
  }
}
</style>
