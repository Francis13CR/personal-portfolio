import '../assets/css/tokens.css';
import '../assets/css/base.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '../router';
import reveal from '../assets/js/reveal.js';

const app = createApp(App);

app.directive('reveal', reveal);
app.use(router);

app.mount('#vApp');
