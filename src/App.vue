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
                <li class="nav-item">
                  <router-link to="/projects" class="nav-link">Proyectos</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/blog" class="nav-link">Blog</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/contact" class="nav-link">Contacto</router-link>
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
  export default {
    name: 'App'
  }
  </script>
  
  <style>
  /* Your styles here */
  </style>
  