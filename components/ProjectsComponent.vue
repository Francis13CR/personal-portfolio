<template>
  <div>
    <div v-if="loading" class="container mt-5 pt-5 text-center">
      <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt-3">Cargando proyecto...</p>
    </div>

    <div v-else-if="proyecto" class="project-detail">
      <!-- Header del proyecto -->
      <div class="border-bottom bg-dark-subtle" data-aos="fade-up">
        <div class="container mt-5 pt-5">
          <div class="row p-5">
            <div class="col-12">
              <button @click="goBack" class="btn btn-outline-warning mb-4">
                <i class="fa-solid fa-arrow-left"></i> Volver
              </button>
              <h1 class="mb-3">{{ proyecto.title }}</h1>
              <p class="lead text-secondary">{{ proyecto.description }}</p>
              <div class="mt-4">
                <span class="badge bg-primary me-2">
                  <i class="fa-solid fa-calendar"></i> {{ proyecto.created_at }}
                </span>
                <span v-if="proyecto.status == 1" class="badge bg-success">
                  <i class="fa-solid fa-check-circle"></i> Activo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Galería de imágenes -->
      <div v-if="proyecto.images && proyecto.images.length > 0" class="border-bottom mb-5" data-aos="fade-up">
        <div class="container mb-5 mt-5">
          <h2 class="text-center mb-5">Galería</h2>
          <div class="row">
            <div v-for="(image, index) in proyecto.images" :key="index" class="col-md-6 col-lg-4 mb-4">
              <div class="card bg-dark-subtle h-100" @click="openImageModal(image)">
                <img 
                  :src="image" 
                  class="card-img-top project-image" 
                  :alt="`Imagen ${index + 1} de ${proyecto.title}`"
                  style="height: 300px; object-fit: cover; cursor: pointer;"
                />
                <div class="image-overlay">
                  <i class="fa-solid fa-search-plus fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Descripción detallada -->
      <div class="border-bottom mb-5" data-aos="fade-up">
        <div class="container mb-5">
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <div class="card bg-dark-subtle p-4">
                <h3 class="mb-4">Detalles del Proyecto</h3>
                <div class="project-description">
                  <p style="white-space: pre-wrap;">{{ proyecto.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tecnologías utilizadas (si están disponibles) -->
      <div v-if="proyecto.technologies && proyecto.technologies.length > 0" class="border-bottom mb-5" data-aos="fade-up">
        <div class="container mb-5">
          <h2 class="text-center mb-5">Tecnologías Utilizadas</h2>
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <div class="d-flex flex-wrap justify-content-center">
                <span 
                  v-for="(tech, index) in proyecto.technologies" 
                  :key="index" 
                  class="badge bg-warning text-dark me-2 mb-2 p-3 fs-6"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Enlaces del proyecto (si están disponibles) -->
      <div v-if="proyecto.link || proyecto.github" class="mb-5" data-aos="fade-up">
        <div class="container mb-5">
          <h2 class="text-center mb-5">Enlaces</h2>
          <div class="row">
            <div class="col-md-8 offset-md-2 text-center">
              <a v-if="proyecto.link" :href="proyecto.link" target="_blank" class="btn btn-primary btn-lg me-3">
                <i class="fa-solid fa-external-link-alt"></i> Ver Proyecto
              </a>
              <a v-if="proyecto.github" :href="proyecto.github" target="_blank" class="btn btn-outline-light btn-lg">
                <i class="fa-brands fa-github"></i> Ver en GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Error state -->
    <div v-else class="container mt-5 pt-5 text-center">
      <div class="alert alert-warning" role="alert">
        <i class="fa-solid fa-exclamation-triangle fa-3x mb-3"></i>
        <h3>Proyecto no encontrado</h3>
        <p>Lo sentimos, no pudimos encontrar el proyecto que buscas.</p>
        <button @click="goBack" class="btn btn-primary mt-3">
          <i class="fa-solid fa-arrow-left"></i> Volver al inicio
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { getProjectById } from '../assets/js/firebase.js';
import 'aos/dist/aos.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from 'aos';
import Swal from 'sweetalert2';

export default {
  name: 'ProjectsComponent',
  data() {
    return {
      proyecto: null,
      loading: true
    }
  },
  async mounted() {
    const projectId = this.$route.params.id || this.$route.query.id;
    
    if (projectId) {
      try {
        this.proyecto = await getProjectById(projectId);
      } catch (error) {
        console.error('Error al cargar el proyecto:', error);
      } finally {
        this.loading = false;
      }
    } else {
      this.loading = false;
    }

    this.$nextTick(() => {
      AOS.init({
        disable: 'mobile',
        duration: 800
      });
    });
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
    openImageModal(imageUrl) {
      Swal.fire({
        imageUrl: imageUrl,
        imageAlt: 'Imagen del proyecto',
        showCloseButton: true,
        showConfirmButton: false,
        background: '#333',
        imageWidth: '90%',
        imageHeight: 'auto',
        customClass: {
          popup: 'swal-custom-popup'
        }
      });
    }
  },
  watch: {
    '$route.params.id': async function(newId) {
      if (newId) {
        this.loading = true;
        try {
          this.proyecto = await getProjectById(newId);
        } catch (error) {
          console.error('Error al cargar el proyecto:', error);
        } finally {
          this.loading = false;
        }
      }
    }
  }
}
</script>

<style scoped>
.project-detail {
  min-height: 80vh;
}

.project-image {
  transition: transform 0.3s ease;
}

.card {
  position: relative;
  overflow: hidden;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
}

.card:hover .image-overlay {
  opacity: 1;
}

.card:hover .project-image {
  transform: scale(1.05);
}

.project-description {
  line-height: 1.8;
  font-size: 1.05rem;
}

.lead {
  font-size: 1.2rem;
  line-height: 1.7;
}

.spinner-border {
  width: 3rem;
  height: 3rem;
}
</style>
  