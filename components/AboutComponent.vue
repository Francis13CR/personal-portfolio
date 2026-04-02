<template>
  <div class="py-5" style="padding-top: 80px !important;">
    <div class="container mt-4">
      <div class="row g-5">

        <!-- Columna izquierda -->
        <div class="col-md-4 col-12" data-aos="fade-right">
          <div class="text-center">
            <img
              src="../assets/images/yo2.png"
              alt="Francis Meléndez"
              class="profile-img-about mb-4"
            />
            <h3 class="fw-bold mb-1">Francis Meléndez</h3>
            <p class="text-warning mb-3" style="font-size:0.95rem;">Full Stack Developer · Líder Técnico</p>

            <div class="d-flex justify-content-center flex-wrap gap-2 mb-4">
              <span class="badge-tech">
                <i class="fas fa-map-marker-alt me-1"></i> Esparza, CR
              </span>
              <a href="https://francismch.dev" target="_blank" class="badge-tech text-decoration-none">
                <i class="fas fa-globe me-1"></i> francismch.dev
              </a>
            </div>

            <div class="mb-4">
              <a href="https://github.com/Francis13CR" target="_blank" class="social-icon-link"><i class="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/francismch/" target="_blank" class="social-icon-link"><i class="fab fa-linkedin"></i></a>
              <a href="mailto:francismelendez134@gmail.com" class="social-icon-link"><i class="fas fa-envelope"></i></a>
            </div>

            <!-- <a href="#" class="btn btn-outline-warning w-100" style="border-radius:8px; font-weight:600;">
              <i class="fas fa-download me-2"></i>Descargar CV
            </a> -->
          </div>
        </div>

        <!-- Columna derecha -->
        <div class="col-md-8 col-12" data-aos="fade-left">

          <!-- Sobre mí -->
          <h2 class="section-title">Sobre mí</h2>
          <p style="color: rgba(255,255,255,0.75); line-height:1.8;" class="mb-5">
            Desarrollador Full Stack con más de 4 años de experiencia construyendo y manteniendo plataformas SaaS de misión
            crítica utilizadas por miles de negocios en Costa Rica. Combino desarrollo activo con liderazgo técnico:
            sprints, code review, gestión de tickets y mentoría. Soy el creador de <strong style="color:var(--accent);">Agendelo</strong>,
            un SaaS multi-tenant propio actualmente en producción. Curso la Licenciatura en Informática con énfasis en UX/UI
            en la Universidad de Costa Rica, lo que refuerza mi enfoque orientado a la experiencia del usuario.
          </p>

          <!-- Experiencia -->
          <h2 class="section-title">Experiencia</h2>
          <div class="mb-5">

            <div class="timeline-item">
              <div class="d-flex flex-wrap justify-content-between align-items-start mb-1">
                <div>
                  <h6 class="fw-bold mb-0">Full Stack Developer &amp; Líder de Desarrollo</h6>
                  <span class="text-warning" style="font-size:0.9rem;">Facture.cr</span>
                </div>
                <span class="badge bg-warning text-dark" style="font-size:0.75rem;">Ene 2024 – Actualidad</span>
              </div>
              <ul class="mt-2 mb-2" style="color: rgba(255,255,255,0.7); font-size:0.9rem;">
                <li>Liderazgo de SaaS para miles de empresas en Costa Rica</li>
                <li>Módulos de facturación electrónica, inventario y punto de venta</li>
                <li>Integración de WhatsApp Business API y automatización con bots</li>
                <li>Implementación de Scrum + Kanban en ClickUp</li>
                <li>Mentoría a juniors y practicantes del equipo</li>
              </ul>
              <div>
                <span class="badge-tech">PHP</span>
                <span class="badge-tech">Vue.js 3</span>
                <span class="badge-tech">Laravel</span>
                <span class="badge-tech">MySQL</span>
                <span class="badge-tech">Docker</span>
              </div>
            </div>

            <div class="timeline-item">
              <div class="d-flex flex-wrap justify-content-between align-items-start mb-1">
                <div>
                  <h6 class="fw-bold mb-0">Full Stack Developer (Jornada Parcial)</h6>
                  <span class="text-warning" style="font-size:0.9rem;">Facture.cr</span>
                </div>
                <span class="badge bg-secondary" style="font-size:0.75rem;">Sep 2021 – Ene 2024</span>
              </div>
              <ul class="mt-2 mb-2" style="color: rgba(255,255,255,0.7); font-size:0.9rem;">
                <li>Funcionalidades web con PHP y JavaScript</li>
                <li>Optimización de queries e integración de herramientas internas</li>
              </ul>
              <div>
                <span class="badge-tech">PHP</span>
                <span class="badge-tech">JavaScript</span>
                <span class="badge-tech">MySQL</span>
              </div>
            </div>

          </div>

          <!-- Educación -->
          <h2 class="section-title">Educación</h2>
          <div class="mb-5">

            <div class="timeline-item">
              <div class="d-flex flex-wrap justify-content-between align-items-start mb-1">
                <div>
                  <h6 class="fw-bold mb-0">Licenciatura en Informática y Tecnología Multimedia (UX/UI)</h6>
                  <span class="text-warning" style="font-size:0.9rem;">Universidad de Costa Rica</span>
                </div>
                <span class="badge bg-secondary" style="font-size:0.75rem;">Mar 2024 – En curso</span>
              </div>
            </div>

            <div class="timeline-item">
              <div class="d-flex flex-wrap justify-content-between align-items-start mb-1">
                <div>
                  <h6 class="fw-bold mb-0">Bachillerato en Informática y Tecnología Multimedia</h6>
                  <span class="text-warning" style="font-size:0.9rem;">Universidad de Costa Rica</span>
                </div>
                <span class="badge bg-secondary" style="font-size:0.75rem;">Mar 2019 – Jul 2024</span>
              </div>
            </div>

          </div>

          <!-- Habilidades con progress bars -->
          <h2 class="section-title">Habilidades</h2>
          <div class="mb-4">

            <div class="mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span style="font-size:0.9rem; font-weight:500;">Vue.js 3</span>
                <span style="font-size:0.85rem; color:var(--accent);">95%</span>
              </div>
              <div class="progress" style="height: 8px; border-radius: 10px; background: var(--accent-dim);">
                <div class="progress-bar" role="progressbar" style="width: 95%; background: var(--accent); border-radius: 10px;" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span style="font-size:0.9rem; font-weight:500;">JavaScript</span>
                <span style="font-size:0.85rem; color:var(--accent);">92%</span>
              </div>
              <div class="progress" style="height: 8px; border-radius: 10px; background: var(--accent-dim);">
                <div class="progress-bar" role="progressbar" style="width: 92%; background: var(--accent); border-radius: 10px;" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span style="font-size:0.9rem; font-weight:500;">Laravel / PHP</span>
                <span style="font-size:0.85rem; color:var(--accent);">90%</span>
              </div>
              <div class="progress" style="height: 8px; border-radius: 10px; background: var(--accent-dim);">
                <div class="progress-bar" role="progressbar" style="width: 90%; background: var(--accent); border-radius: 10px;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span style="font-size:0.9rem; font-weight:500;">MySQL / Bases de Datos</span>
                <span style="font-size:0.85rem; color:var(--accent);">88%</span>
              </div>
              <div class="progress" style="height: 8px; border-radius: 10px; background: var(--accent-dim);">
                <div class="progress-bar" role="progressbar" style="width: 88%; background: var(--accent); border-radius: 10px;" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span style="font-size:0.9rem; font-weight:500;">Docker / DevOps</span>
                <span style="font-size:0.85rem; color:var(--accent);">78%</span>
              </div>
              <div class="progress" style="height: 8px; border-radius: 10px; background: var(--accent-dim);">
                <div class="progress-bar" role="progressbar" style="width: 78%; background: var(--accent); border-radius: 10px;" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

          <!-- Fuera del código -->
          <div class="mt-4">
            <h2 class="section-title" style="font-size:1.2rem;">Fuera del código</h2>
            <ul class="list-unstyled" style="color: rgba(255,255,255,0.65); line-height: 2.2;">
              <li>&#129355; Taekwondo — incluso hice una app para el dojo</li>
              <li>&#127758; Tico orgulloso desde Esparza, Puntarenas</li>
              <li>&#128736;&#65039; Si lo puedo automatizar, lo automatizo</li>
              <li>&#127912; Creo que el buen diseño es invisible</li>
            </ul>
          </div>

          <p class="text-center mt-4" style="color: rgba(255,255,255,0.3); font-size: 0.8rem; font-style: italic;">
            Construido con Vue 3, Bootstrap 5 y demasiado café &#9749;
          </p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'aos/dist/aos.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from 'aos';

export default {
  name: 'AboutComponent',
  mounted() {
    this.$nextTick(() => {
      AOS.init({
        disable: 'mobile',
        duration: 700,
        once: true,
      });
    });
  }
}
</script>

<style scoped>
.profile-img-about {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  border: 3px solid var(--accent-dim);
  box-shadow: 0 0 40px rgba(255, 212, 59, 0.12);
}

@media (max-width: 768px) {
  .profile-img-about {
    width: 170px;
    height: 170px;
  }
}
</style>
