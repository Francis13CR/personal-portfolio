<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <p class="footer-copy">
        <img
          class="footer-mark"
          src="/images/mascot-badge-96.png"
          alt=""
          width="28"
          height="28"
          loading="lazy"
          decoding="async"
        >
        © 2026 FRANCIS.M
      </p>

      <p class="footer-tags">SOFTWARE · MOVIMIENTO · MÚSICA · EXPERIMENTOS</p>

      <p class="footer-legal">
        <router-link to="/accesibilidad">Accesibilidad</router-link>
      </p>

      <ul class="footer-social">
        <li>
          <a
            href="https://github.com/Francis13CR"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Francis Meléndez"
          >
            <span v-html="icons.github"></span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/francismch/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Francis Meléndez"
          >
            <span v-html="icons.linkedin"></span>
          </a>
        </li>
        <li>
          <a href="mailto:francismelendez134@gmail.com" aria-label="Enviar correo a Francis Meléndez">
            <span v-html="icons.mail"></span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { icons } from '../../assets/js/icons.js';

export default {
  name: 'SiteFooter',
  data() {
    return { icons };
  },
};
</script>

<style scoped>
.site-footer {
  margin-top: var(--space-8);
  padding: var(--space-6) 0;
  border-top: 1px solid var(--line);
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
}

.footer-copy,
.footer-tags {
  margin: 0;
  font: 400 0.72rem/1.5 var(--font-mono);
  letter-spacing: 0.1em;
  color: var(--text-dim);
}

.footer-legal {
  margin: 0;
  font: 400 0.72rem/1.5 var(--font-mono);
  letter-spacing: 0.1em;
}

.footer-legal a {
  color: var(--text-muted);
}

.footer-legal a:hover {
  color: var(--accent-software);
}

.footer-copy {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}

.footer-mark {
  width: 28px;
  height: 28px;
  border-radius: 50%;
}

.footer-social {
  display: flex;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer-social a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  color: var(--text-muted);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
}

.footer-social a:hover {
  color: var(--accent-software);
  border-color: var(--accent-software);
  text-decoration: none;
}

@media (max-width: 720px) {
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
