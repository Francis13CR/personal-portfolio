<!-- src/components/HomeComponent.vue -->
<template>
  <div v-bind:style="bodyStyles">
    <div  v-show="!isLoading">
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
            <img src="/images/yo.jpg" alt="Image" class="col-md-6 col-sm-6 mb-3 me-5 profile-img" style="border-radius: 50%;" />
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
          <div class="col-md-6 mt-5" data-aos="fade-right">
            <div class="card mb-3 bg-dark-subtle">
              <div class="row g-0">
                <div class="col-2 d-flex align-items-center justify-content-center">
                  <img src="/images/icon-design.svg" alt="design icon" class="img-fluid rounded-start">
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
          <div class="col-md-6 mt-5" data-aos="fade-left">
            <div class="card mb-3 bg-dark-subtle">
              <div class="row g-0">
                <div class="col-2 d-flex align-items-center justify-content-center">
                  <img src="/images/icon-dev.svg" alt="design icon" class="img-fluid rounded-start">
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
          <div class="col-md-6 mt-5" data-aos="fade-right">
            <div class="card mb-3 bg-dark-subtle">
              <div class="row g-0">
                <div class="col-2 d-flex align-items-center justify-content-center">
                  <img src="/images/icon-app.svg" alt="design icon" class="img-fluid rounded-start">
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
          <div class="col-md-6 mt-5" data-aos="fade-left">
            <div class="card mb-3 bg-dark-subtle">
              <div class="row g-0">
                <div class="col-2 d-flex align-items-center justify-content-center">
                  <img src="/images/icon-db.svg" alt="design icon" class="img-fluid rounded-start">
                </div>
                <div class="col-10">
                  <div class="card-body">
                    <h5 class="card-title">Gestión de base de datos</h5>
                    <p class="card-text">Conocimientos en SQL, MySQL, MariaDB y OracleSQL.</p>
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
          <div v-for="proyecto in proyectos" class="col-lg-4 col-md-6 mt-5" data-aos="zoom-in-up">
            <div class="card" style="border:none;">
              <img :src="proyecto.images[0]" class="card-img-top" alt="..." style="height: 300px;">
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
        <div class="col-md-6">
          <h2>Trabajemos Juntos</h2>
          <p>
            ¡Será un placer para mí atenderte y discutir sobre tus proyectos! No dudes en contactarme a través de mis redes sociales o por correo electrónico.<br />Déjame ayudarte a transformar tus ideas en realidad digital.
          </p>
          <div class="d-flex">
            <img src="" alt="Discord" class="me-3" />
            <img src="" alt="Facebook" class="me-3" />
            <img src="" alt="Instagram" class="me-3" />
          </div>
        </div>
        <div class="col-md-6">
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
        </div>
      </div>
    </footer>
    
  </div>
</template>

<script>
import { getBlogPosts } from "../assets/js/firebase.js";
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

    for (var i = 0; i < numberOfEls; i++) {
      var hue = Math.round((360 / numberOfEls) * i);
      var angle = Math.random() * Math.PI * 2;
      var el = document.createElement("div");
      el.classList.add("particule");
      el.style.backgroundColor = "hsl(" + hue + ", 40%, 60%)";
      el.style.width = "1px";
      el.style.height = "1px";
      anime({
        targets: el,
        width: ["1px", "10px"],
        height: ["1px", "10px"],
        left: [midScreenX + "px", Math.cos(angle) * radius + midScreenX + "px"],
        top: [midScreenY + "px", Math.sin(angle) * radius + midScreenY + "px"],
        delay: (duration / numberOfEls) * i,
        duration: duration,
        easing: "easeInExpo",
        loop: false,
      });
      fragment.appendChild(el);
    }

    document.body.appendChild(fragment);
    this.checkDevice();
    window.addEventListener("resize", this.checkDevice);
    console.log("Vue app mounted!");
    setTimeout(this.finishLoading, 1500);
    this.proyectos = await getBlogPosts();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkDevice);
  },
  methods: {
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
        AOS.init(); // Inicializa AOS después de que el DOM esté listo
      });
    },
  },
};
</script>
