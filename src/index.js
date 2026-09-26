import '../assets/css/tokens.css';
import '../assets/css/base.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '../router';

const app = createApp(App);

app.use(router);

app.mount('#vApp');
