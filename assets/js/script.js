
const { createApp } = Vue

const vApp = createApp({
  data() {
    return {
      message: 'Hello Vue!',
      isMobile: false
    }
  }, 
  mounted() {
    this.checkDevice();
    window.addEventListener('resize', this.checkDevice);
    console.log('Vue app mounted!');
   
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkDevice);
  },
  methods: {
    checkDevice() {
     this.isMobile = window.matchMedia("(max-width: 768px)").matches;
    }
  }
}).mount('#vApp');
AOS.init()