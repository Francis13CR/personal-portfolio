import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/pages/HomePage.vue';
import AboutComponent from '../components/AboutComponent.vue';
import ProjectsComponent from '../components/ProjectsComponent.vue';
import BlogComponent from '../components/BlogComponent.vue';
import ContactComponent from '../components/ContactComponent.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutComponent },
  { path: '/projects', component: ProjectsComponent },
  { path: '/projects/:id', component: ProjectsComponent },
  { path: '/blog', component: BlogComponent },
  { path: '/contact', component: ContactComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
