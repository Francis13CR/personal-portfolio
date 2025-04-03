<template>
    <div>
      <header class="bg-dark border-bottom">
        <nav class="navbar bg-dark fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><ion-icon name="home-outline"></ion-icon></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <router-link to="/" class="nav-link">Sobre mi</router-link>
                </li>
                <!-- <li class="nav-item">
                  <router-link to="/projects" class="nav-link">Proyectos</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/blog" class="nav-link">Blog</router-link>
                </li> -->
                <li class="nav-item">
                  <a @click="showContact()" class="nav-link pointer">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  
      <main>
        <router-view></router-view>
      </main>
  
      <footer class="container" data-aos="fade-up">
        <!-- Footer content here -->
      </footer>
    </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2';
  import "@fortawesome/fontawesome-free/css/all.min.css";

  export default {
    name: 'App',
    components: {
      // Your components here
    },
    data() {
      return {
        // Your data properties here
      };
    },
    methods: {
      showContact() {
        // SweetAlert
        Swal.fire({
          title: "¡Contáctame! 📩",
          html: `
            <p><i class="fa-solid fa-envelope"></i>  <strong>Correo:</strong> <a id="correo" href="mailto:francismelendez134@gmail.com">francismelendez134@gmail.com</a> <button id="copiarCorreoBtn">📋</button></p>
            <p><i class="fa-brands fa-linkedin"></i> <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/francismch/" target="_blank">Mi perfil</a></p>
          `,
          icon: "info",
          showCloseButton: true,
          showConfirmButton: false,
          didOpen: () => {
            console.log("SweetAlert abierto");
            // Agregar evento al botón después de que el SweetAlert se haya mostrado
            const copiarCorreoBtn = document.getElementById("copiarCorreoBtn");
            if (copiarCorreoBtn) {
              copiarCorreoBtn.addEventListener("click", this.copiarCorreo);
            }
          },
          didDestroy: () => {
            // Limpiar el evento al cerrar el SweetAlert
            const copiarCorreoBtn = document.getElementById("copiarCorreoBtn");
            if (copiarCorreoBtn) {
              copiarCorreoBtn.removeEventListener("click", this.copiarCorreo);
            }
          }
        }).then(() => {
          console.log("SweetAlert cerrado");
        });
      },
      copiarCorreo() {
        const correo = document.getElementById("correo").innerText;
        navigator.clipboard.writeText(correo).then(() => {
          Swal.fire({
            title: "¡Copiado!",
            text: "Correo copiado al portapapeles",
            icon: "success",
            timer: 1500,
            showConfirmButton: false
          });
        });
      }
    },
  }

  </script>
  
  <style>
  .pointer {
    cursor: pointer;
  }
  </style>
  