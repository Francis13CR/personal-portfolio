<!-- src/components/HomeComponent.vue -->
<template>
  <div>
    <div>
    <!-- <header class="bg-dark border-bottom">
      <nav class="navbar bg-dark fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid"> 
          <a class="navbar-brand" href="#"><ion-icon name="home-outline"></ion-icon></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Sobre mi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Proyectos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header> -->

    <div class="border-bottom bg-dark-subtle" data-aos="fade-up">
      <div class="container mt-5">
        <div class="row p-5">
          <div class="col-md-6 col-sm-6 " :class="{'order-md-1': isMobile, 'd-flex': !isMobile}" data-aos="fade-right">
            <img src="../assets/images/yo2.png" alt="Francis Melendez" class="mb-3 me-5 profile-img" />
            <div class="col-sm-12 mt-4">
              <h2>Francis Melendez Chaves<br /></h2>
              <span class="text-secondary"> Full Stack Developer | Supervisor de Programación <br /></span>
              <hr>
              <span>Desarrollador de Software con más de 4 años de experiencia en desarrollo full stack y liderazgo técnico. 
                Actualmente me desempeño como Supervisor de Programación en Facture.cr, donde lidero equipos de desarrollo, 
                realizo code review y gestiono el despliegue de cambios en sistemas productivos de misión crítica utilizados por miles de clientes.
                <br><br>
                Especializado en Vue.js, PHP y MySQL, con experiencia en Docker, Java y Python. Mi enfoque se centra en la calidad del código, 
                mejora continua, experiencia de usuario y eficiencia operativa, combinando habilidades técnicas con una visión práctica del negocio.</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>

    <div class="border-bottom mb-5" data-aos="fade-down">
      <div class="container mb-5">
        <h2 class="text-center mt-5">Experiencia y Habilidades</h2>
        <div class="row">
          <div class="col-md-6 mt-5 col-xs-12 col-12" data-aos="fade-right">
            <div class="card mb-3 bg-dark-subtle">
              <div class="row g-0">
                <div class="col-2 d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-users-gear fa-2xl" style="color: #FFD43B;"></i>
                </div>
                <div class="col-10">
                  <div class="card-body">
                    <h5 class="card-title">Liderazgo Técnico</h5>
                    <p class="card-text">Supervisión de equipos de desarrollo, gestión de tickets, planificación de proyectos y mentoría de desarrolladores.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-12 col-12 mt-5" data-aos="fade-left">
            <div class="card mb-3 bg-dark-subtle">
              <div class="row g-0">
                <div class="col-2 d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-code fa-2xl" style="color: #FFD43B;"></i>
                </div>
                <div class="col-10">
                  <div class="card-body">
                    <h5 class="card-title">Desarrollo Full Stack</h5>
                    <p class="card-text">Desarrollo de aplicaciones web con Vue.js, PHP y MySQL. Experiencia en arquitectura de software y APIs REST.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-12 col-12 mt-5" data-aos="fade-right">
            <div class="card mb-3 bg-dark-subtle">
              <div class="row g-0">
                <div class="col-2 d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-code-branch fa-2xl" style="color: #FFD43B;"></i>
                </div>
                <div class="col-10">
                  <div class="card-body">
                    <h5 class="card-title">Code Review & DevOps</h5>
                    <p class="card-text">Revisión de código, validación y despliegue de cambios en producción. Experiencia con Docker y gestión de entornos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-12 col-12 mt-5" data-aos="fade-left">
            <div class="card mb-3 bg-dark-subtle">
              <div class="row g-0">
                <div class="col-2 d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-shield-halved fa-2xl" style="color: #FFD43B;"></i>
                </div>
                <div class="col-10">
                  <div class="card-body">
                    <h5 class="card-title">Sistemas de Misión Crítica</h5>
                    <p class="card-text">Desarrollo y mantenimiento de plataformas productivas utilizadas por miles de clientes, con enfoque en estabilidad y seguridad.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-bottom mb-5" data-aos="fade-up">
      <div class="container mb-5">
        <h2 class="text-center mt-5">Experiencia Profesional</h2>
        <div class="row mt-5">
          <div class="col-12">
            <div class="card bg-dark-subtle">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">
                  <div>
                    <h4 class="card-title">Desarrollador de Software & Supervisor de Programación</h4>
                    <h5 class="text-warning">Facture.cr</h5>
                  </div>
                  <span class="badge bg-primary">Enero 2024 - Actualidad</span>
                </div>
                <hr>
                <ul class="mt-3">
                  <li>Liderazgo técnico y supervisión del departamento de programación, asegurando calidad y continuidad operativa</li>
                  <li>Gestión end-to-end del ciclo de tickets: análisis, priorización, asignación, seguimiento y cierre</li>
                  <li>Revisión de código (code review), validación y despliegue de cambios en producción</li>
                  <li>Supervisión y mentoría de practicantes y desarrolladores en formación</li>
                  <li>Participación en planificación, estimación y priorización de proyectos tecnológicos</li>
                  <li>Desarrollo de soluciones con Vue.js, PHP y MySQL para plataformas de alta disponibilidad</li>
                </ul>
                <div class="mt-3">
                  <span class="badge bg-secondary me-2">Vue.js</span>
                  <span class="badge bg-secondary me-2">PHP</span>
                  <span class="badge bg-secondary me-2">MySQL</span>
                  <span class="badge bg-secondary me-2">Docker</span>
                  <span class="badge bg-secondary me-2">Git</span>
                  <span class="badge bg-secondary me-2">Liderazgo Técnico</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 mt-4">
            <div class="card bg-dark-subtle">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">
                  <div>
                    <h4 class="card-title">Desarrollador Full Stack (Jornada Parcial)</h4>
                    <h5 class="text-warning">Facture.cr</h5>
                    <small class="text-muted">Esparza, Puntarenas, Costa Rica</small>
                  </div>
                  <span class="badge bg-primary">Septiembre 2021 - Enero 2024</span>
                </div>
                <hr>
                <ul class="mt-3">
                  <li>Apoyo al desarrollo web y mantenimiento de funcionalidades</li>
                  <li>Integración de herramientas internas y soporte técnico</li>
                </ul>
                <div class="mt-3">
                  <span class="badge bg-secondary me-2">PHP</span>
                  <span class="badge bg-secondary me-2">MySQL</span>
                  <span class="badge bg-secondary me-2">JavaScript</span>
                  <span class="badge bg-secondary me-2">APIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-bottom mb-5" data-aos="fade-up">
      <div class="container mb-5">
        <h2 class="text-center mt-5">Stack Tecnológico</h2>
        <div class="row mt-5">
          <div class="col-md-6">
            <h4 class="text-center mb-4">Tecnologías Principales</h4>
            <div class="d-flex flex-wrap justify-content-center">
              <span class="badge bg-warning text-dark me-2 mb-2 p-3 fs-6">Vue.js</span>
              <span class="badge bg-warning text-dark me-2 mb-2 p-3 fs-6">PHP</span>
              <span class="badge bg-warning text-dark me-2 mb-2 p-3 fs-6">MySQL</span>
              <span class="badge bg-warning text-dark me-2 mb-2 p-3 fs-6">JavaScript</span>
              <span class="badge bg-warning text-dark me-2 mb-2 p-3 fs-6">Git</span>
              <span class="badge bg-warning text-dark me-2 mb-2 p-3 fs-6">Bootstrap</span>
            </div>
          </div>
          <div class="col-md-6">
            <h4 class="text-center mb-4">Otras Tecnologías</h4>
            <div class="d-flex flex-wrap justify-content-center">
              <span class="badge bg-secondary me-2 mb-2 p-3 fs-6">Docker</span>
              <span class="badge bg-secondary me-2 mb-2 p-3 fs-6">Java</span>
              <span class="badge bg-secondary me-2 mb-2 p-3 fs-6">Python</span>
              <span class="badge bg-secondary me-2 mb-2 p-3 fs-6">Firebase</span>
              <span class="badge bg-secondary me-2 mb-2 p-3 fs-6">Webpack</span>
              <span class="badge bg-secondary me-2 mb-2 p-3 fs-6">REST APIs</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-bottom mb-5">
      <div class="container mb-5">
        <h2 class="text-center mt-5">Proyectos Destacados</h2>
        <div class="row">
          <div v-for="proyecto in proyectos" :key="proyecto.id" class="col-lg-4 col-md-6 col-xs-12 col-12 mt-5" v-show="proyecto.status == 1">
            <div class="card" style="border:none; position: relative;" @click="goToProject(proyecto)">
              <img 
                :src="proyecto.images ? proyecto.images[0] : ''" 
                class="card-img-top img-thumbnail img-fluid" 
                alt="..." 
                style="height: 200px; object-fit: cover;" 
                @mouseover="showEyeIcon($event)" 
                @mouseleave="hideEyeIcon($event)"
              />
              <div 
                class="eye-icon"
                style="position: absolute; top: 20%; left: 50%; transform: translate(-50%, -50%); display: none; cursor: pointer;"
              >
                <i class="fa-solid fa-eye fa-2x" style="color: white;"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title text-center">{{proyecto.title}}</h5>
                <hr>
                <p class="card-text">{{proyecto.subtitle}}</p>
              </div>
              <div class="card-footer border-none">
                <small class="text-body-secondary">Realizado en: {{proyecto.created_at}}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="container" data-aos="fade-up">
      <div class="row">
        <div class="col-md-12">
          <h2>Trabajemos Juntos</h2>
          <p>
            ¿Tienes un proyecto en mente o necesitas consultoría técnica? Con más de 4 años de experiencia en desarrollo full stack y liderazgo técnico, 
            puedo ayudarte a llevar tus ideas al siguiente nivel.<br />
            Especializado en desarrollo web con Vue.js, PHP y MySQL, estoy disponible para proyectos freelance, consultoría técnica o colaboraciones.
          </p>
          <div class="d-flex">
            <!-- instagram fontawesome -->
            <a href="https://www.instagram.com/francis._.13/" target="_blank" class="btn  me-2"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/francismch/" target="_blank" class="btn  me-2"><i class="fa-brands fa-linkedin"></i></a>
            <!-- correo -->
            <a href="mailto:francismelendez134@gmail.com"  target="_blank" class="btn  me-2"><i class="fa-solid fa-envelope"></i></a>
          </div>
        </div>
        <!-- <div class="col-md-6">
          <div class="d-flex flex-column">
            <div class="mb-3">
              <input type="text" class="form-control" name="write_something" placeholder="Nombre" />
            </div>
            <div class="mb-3">
              <input type="email" class="form-control" name="email" placeholder="Email" />
            </div>
            <div class="mb-3">
              <textarea class="form-control" name="write_something" placeholder="Escribe tu mensaje aquí"></textarea>
            </div>
            <button class="btn btn-primary mt-2 align-self-center">
              <ion-icon name="send-outline"></ion-icon> Enviar
            </button>
          </div>
        </div> -->
      </div>
    </footer>
    
    </div>
  </div>
</template>

<script>
import { getBlogPosts } from "../assets/js/firebase.js";
import 'aos/dist/aos.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Swal from 'sweetalert2';
// Importa y configura AOS
import AOS from 'aos';
import anime from 'animejs/lib/anime.es.js';

export default {
  name: "HomeComponent",
  data() {
    return {
      message: "Hello Vue!",
      isMobile: false,
      isLoading: true,
      proyectos: [],
      initialStyles: {
        body: {
          overflow: "hidden",
          position: "absolute",
        },
        wrapper: {
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        },
        particule: {
          position: "absolute",
        },
      },
      finalStyles: {
        body: {
          overflow: "auto",
          position: "static",
          width: "auto",
          height: "auto",
        },
        particule: {
          position: "static",
        },
      },
    };
  },
  async mounted() {
    var numberOfEls = 200;
    var duration = 1000;
    var midScreenX = window.innerWidth / 2;
    var midScreenY = window.innerHeight / 2;
    var radius = Math.sqrt(midScreenX * midScreenX + midScreenY * midScreenY);
    var fragment = document.createDocumentFragment();

    // for (var i = 0; i < numberOfEls; i++) {
    //   var hue = Math.round((360 / numberOfEls) * i);
    //   var angle = Math.random() * Math.PI * 2;
    //   var el = document.createElement("div");
    //   el.classList.add("particule");
    //   el.style.backgroundColor = "hsl(" + hue + ", 40%, 60%)";
    //   el.style.width = "1px";
    //   el.style.height = "1px";
    //   anime({
    //     targets: el,
    //     width: ["1px", "10px"],
    //     height: ["1px", "10px"],
    //     left: [midScreenX + "px", Math.cos(angle) * radius + midScreenX + "px"],
    //     top: [midScreenY + "px", Math.sin(angle) * radius + midScreenY + "px"],
    //     delay: (duration / numberOfEls) * i,
    //     duration: duration,
    //     easing: "easeInExpo",
    //     loop: false,
    //   });
    //   fragment.appendChild(el);
    // }

    document.body.appendChild(fragment);
    this.checkDevice();
    window.addEventListener("resize", this.checkDevice);
    console.log("Vue app mounted!");
    setTimeout(this.finishLoading, 0);
    this.proyectos = [];
    this.proyectos = await getBlogPosts();
    console.log(this.proyectos);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkDevice);
  },
  methods: {
    showEyeIcon(event) {
      const eyeIcon = event.target.nextElementSibling;
      if (eyeIcon) {
        eyeIcon.style.display = 'block';
      }
    },
    hideEyeIcon(event) {
      const eyeIcon = event.target.nextElementSibling;
      if (eyeIcon) {
        eyeIcon.style.display = 'none';
      }
    },
    openImage(imageUrl) {
      if (imageUrl) {
        Swal.fire({
          imageUrl: imageUrl,
          imageAlt: 'Imagen del proyecto',
          showCloseButton: true,
          showConfirmButton: false,
          background: '#333',
          customClass: {
            popup: 'swal-custom-popup'
          }
        });
      }
    },
    goToProject(proyecto) {
      this.$router.push({ path: `/projects/${proyecto.title}`, query: { id: proyecto.id } });
    },
    checkDevice() {
      this.isMobile = window.matchMedia("(max-width: 768px)").matches;
    },
    finishLoading() {
      this.isLoading = false;
      //eliminar todos los elementos con la clase particule
      const particules = document.querySelectorAll(".particule");
      particules.forEach((particule) => {
        particule.remove();
      });
      this.$nextTick(() => {
        AOS.init({
          disable: 'mobile', // Desactiva en dispositivos móviles
        });
      });
    },
  },
};
</script>

<style scoped>
  .eye-icon {
    transition: opacity 0.3s ease;
  }
  .card:hover .eye-icon {
    display: block !important;
    background-color: black;
    border-radius: 50%;
    padding: 10px;
  }
  .profile-img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    .profile-img {
      width: 200px;
      height: 200px;
    }
  }
</style>