<template>
    <div>
      <header class="bg-dark border-bottom">
        <nav class="navbar bg-dark fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><ion-icon name="home-outline"></ion-icon></a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"

            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav" ref="navbarNav" >
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <router-link to="/" class="nav-link" @click="closeNavbar">Inicio</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/about" class="nav-link" @click="closeNavbar">Sobre mí</router-link>
                </li>
                <li class="nav-item">
                  <a href="/#proyectos" class="nav-link" @click="closeNavbar">Proyectos</a>
                </li>
                <li class="nav-item">
                  <a @click="showContact(); closeNavbar()" class="nav-link pointer">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <router-view></router-view>
      </main>

      <footer class="py-4 mt-5 border-top" style="border-color: var(--accent-dim) !important;">
        <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <span class="text-muted" style="font-size:0.9rem;">© 2026 Francis Meléndez — Esparza, Costa Rica</span>
          <div>
            <a href="https://github.com/Francis13CR" target="_blank" class="social-icon-link"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/francismch/" target="_blank" class="social-icon-link"><i class="fab fa-linkedin"></i></a>
            <a href="mailto:francismelendez134@gmail.com" class="social-icon-link"><i class="fas fa-envelope"></i></a>
          </div>
        </div>
      </footer>
    </div>
  </template>

  <script>
  export default {
    name: 'App',
    components: {
    },
    data() {
      return {
      };
    },
    mounted() {
      document.addEventListener('click', this.handleOutsideClick);
    },
    beforeUnmount() {
      document.removeEventListener('click', this.handleOutsideClick);
    },
    methods: {
      handleOutsideClick(event) {
        const navbar = this.$refs.navbarNav;
        if (navbar && !navbar.contains(event.target)) {
          this.closeNavbar();
        }
      },
      showContact() {
        this.$router.push('/contact');
      },
      closeNavbar() {
        const navbar = this.$refs.navbarNav;
        if (navbar) {
          navbar.classList.remove("show");
        }
      }
    },
  }

  </script>

  <style>
  .pointer {
    cursor: pointer;
  }

  .nav-link {
    position: relative;
    transition: color 0.3s;
  }
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent);
    transition: width 0.3s;
  }
  .nav-link:hover::after,
  .router-link-active::after {
    width: 100%;
  }
  .router-link-active {
    color: var(--accent) !important;
  }
  </style>
