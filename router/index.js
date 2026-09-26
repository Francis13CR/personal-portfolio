import { createRouter, createWebHistory } from 'vue-router';

// Rutas lazy-load: cada página es un chunk independiente (spec §8.3).
const HomePage = () => import(/* webpackChunkName: "home" */ '../components/pages/HomePage.vue');
const ProjectsIndexPage = () =>
  import(/* webpackChunkName: "proyectos" */ '../components/pages/ProjectsIndexPage.vue');
const ProjectDetailPage = () =>
  import(/* webpackChunkName: "proyecto-detalle" */ '../components/pages/ProjectDetailPage.vue');
const AboutPage = () => import(/* webpackChunkName: "sobre-mi" */ '../components/pages/AboutPage.vue');
const ContactPage = () =>
  import(/* webpackChunkName: "contacto" */ '../components/pages/ContactPage.vue');
const NotFoundPage = () =>
  import(/* webpackChunkName: "no-encontrado" */ '../components/pages/NotFoundPage.vue');

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/proyectos', name: 'proyectos', component: ProjectsIndexPage },
  { path: '/proyectos/:slug', name: 'proyecto-detalle', component: ProjectDetailPage },
  { path: '/sobre-mi', name: 'sobre-mi', component: AboutPage },
  { path: '/contacto', name: 'contacto', component: ContactPage },
  { path: '/404', name: 'no-encontrado', component: NotFoundPage },
  { path: '/:pathMatch(.*)*', name: 'catch-all', component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, top: 80 };
    }
    return { top: 0 };
  },
});

export default router;
