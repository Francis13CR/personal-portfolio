
const { createApp } = Vue
import { getBlogPosts } from '../assets/js/firebase.js';
const vApp = createApp({
  data() {
    return {
      message: 'Hello Vue!',
      isMobile: false,
      isLoading: true,
      proyectos: [],
      initialStyles: {
        body: {
          overflow: 'hidden',
          position: 'absolute',
        },
        wrapper: {
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
        },
        particule: {
          position: 'absolute',
        },
      },
      finalStyles: {
        body: {
          overflow: 'auto',
          position: 'static',
          width: 'auto',
          height: 'auto',
        },
        particule: {
          position: 'static',
        },
      },
    }
  }, 
  async mounted() {
    
    var numberOfEls = 200;
    var duration = 1000;
    var midScreenX = window.innerWidth / 2;
    var midScreenY = window.innerHeight / 2;
    var radius = Math.sqrt(midScreenX * midScreenX + midScreenY * midScreenY);
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < numberOfEls; i++) {
      var hue = Math.round(360 / numberOfEls * i);
      var angle = Math.random() * Math.PI * 2;
      var el = document.createElement('div');
      el.classList.add('particule');
      el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
      el.style.width = '1px';
      el.style.height = '1px';
      anime({
        targets: el,
        width: ['1px', '10px'],
        height: ['1px', '10px'],
        left: [midScreenX + 'px', Math.cos(angle) * radius + midScreenX + 'px'],
        top: [midScreenY + 'px', Math.sin(angle) * radius + midScreenY + 'px'],
        delay: (duration / numberOfEls) * i,
        duration: duration,
        easing: 'easeInExpo',
        loop: false
      });
      fragment.appendChild(el);
    }

    document.body.appendChild(fragment);
    this.checkDevice();
    window.addEventListener('resize', this.checkDevice);
    console.log('Vue app mounted!');
    setTimeout(this.finishLoading, 1500);
    this.proyectos = await getBlogPosts();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkDevice);
  },
  methods: {
    checkDevice() {
     this.isMobile = window.matchMedia("(max-width: 768px)").matches;
    },
    finishLoading() {
      this.isLoading = false;
      //eliminar todos los elementos con la clase particule
      const particules = document.querySelectorAll('.particule');
      particules.forEach(particule => {
        particule.remove();
      });
      this.$nextTick(() => {
        AOS.init(); // Inicializa AOS después de que el DOM esté listo
      });
    },
  }
}).mount('#vApp');
// src/index.js
const apiKey = process.env.API_KEY;
console.log(apiKey);
