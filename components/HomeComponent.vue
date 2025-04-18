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
            <img src="../assets/images/yo2.png" alt="Image" class="col-md-6 col-sm-6 mb-3 me-5 profile-img" style="border-radius: 50%;" />
            <div class="col-sm-12 mt-4">
              <h2>Francis Melendez Chaves<br /></h2>
              <span class="text-secondary"> Full Stack Developer / UX <br /></span>
              <hr>
              <span>¡Hola! Soy un joven apasionado de la tecnología, con 22 años de edad, que encuentra en el desarrollo
                web su campo de acción. Me considero un eterno estudiante, siempre en búsqueda de nuevos conocimientos
                y con una curiosidad insaciable por comprender el porqué de las cosas.</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>

    <div class="border-bottom mb-5" data-aos="fade-down">
      <div class="container mb-5">
        <h2 class="text-center mt-5">Lo que hago</h2>
        <div class="row">
          <div class="col-md-6 mt-5 col-xs-12 col-12" data-aos="fade-right">
            <div class="card mb-3 bg-dark-subtle">
              <div class="row g-0">
                <div class="col-2 d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-object-group fa-2xl" style="color: #FFD43B;"></i>
                </div>
                <div class="col-10">
                  <div class="card-body">
                    <h5 class="card-title">Diseño Web</h5>
                    <p class="card-text">Diseño de sitios web de alta calidad con diseño minimalista y moderno.</p>
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
                    <h5 class="card-title">Desarrollo Web</h5>
                    <p class="card-text">Aplicaciones web de alta calidad con diseño responsivo y optimización.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-12 col-12 mt-5" data-aos="fade-right">
            <div class="card mb-3 bg-dark-subtle">
              <div class="row g-0">
                <div class="col-2 d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-mobile-screen-button fa-2xl" style="color: #FFD43B;"></i>
                </div>
                <div class="col-10">
                  <div class="card-body">
                    <h5 class="card-title">Aplicaciones Móviles</h5>
                    <p class="card-text">Aplicaciones móviles de alta calidad con diseño responsivo y optimización.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-12 col-12 mt-5" data-aos="fade-left">
            <div class="card mb-3 bg-dark-subtle">
              <div class="row g-0">
                <div class="col-2 d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-database fa-2xl" style="color: #FFD43B;"></i>
                </div>
                <div class="col-10">
                  <div class="card-body">
                    <h5 class="card-title">Gestión de base de datos</h5>
                    <p class="card-text">Conocimientos en SQL, MySQL, MariaDB y OracleSQL.<br> Además de conocimiento básico en Docker</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-bottom mb-5">
      <div class="container mb-5">
        <h2 class="text-center mt-5">Proyectos Destacados</h2>
        <div class="row">
                   <div v-for="proyecto in proyectos" class="col-lg-4 col-md-6 col-xs-12 col-12 mt-5"  v-show="proyecto.status == 1">
            <div class="card" style="border:none; position: relative;">
              <img 
                :src="proyecto.images ? proyecto.images[0] : ''" 
                class="card-img-top img-thumbnail img-fluid" 
                alt="..." 
                style="height: 200px; object-fit: cover;" 
                @mouseover="showEyeIcon($event)" 
                @mouseleave="hideEyeIcon($event)" 
                @click="openImage(proyecto.images ? proyecto.images[0] : '')"
              />
              <div 
                class="eye-icon"    @click="openImage(proyecto.images ? proyecto.images[0] : '')"
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
    </div>

    <footer class="container" data-aos="fade-up">
      <div class="row">
        <div class="col-md-12">
          <h2>Trabajemos Juntos</h2>
          <p>
            ¡Será un placer para mí atenderte y discutir sobre tus proyectos! No dudes en contactarme a través de mis redes sociales o por correo electrónico.<br />Déjame ayudarte a transformar tus ideas en realidad digital.
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
    this.proyectos = await getBlogPosts();
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
    width: 100%;
    height: auto;
    max-width: 300px;
  }
</style>