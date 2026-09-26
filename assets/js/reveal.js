// reveal.js — Directiva de Vue para revelar elementos al entrar en el viewport.
// Progresiva: sin JavaScript el contenido es visible igual. Con
// prefers-reduced-motion o sin IntersectionObserver se muestra de inmediato.

export default {
  mounted(el, binding) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      el.classList.add('is-visible');
      return;
    }

    el.classList.add('reveal');
    if (typeof binding.value === 'number') {
      el.style.transitionDelay = `${binding.value}ms`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    el.__revealObserver = observer;
  },

  unmounted(el) {
    if (el.__revealObserver) {
      el.__revealObserver.disconnect();
      delete el.__revealObserver;
    }
  },
};
