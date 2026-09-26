<template>
  <section class="section page" aria-labelledby="contacto-title" v-reveal>
    <div class="container">
      <p class="section-label">Contacto</p>
      <h1 id="contacto-title">Hablemos</h1>
      <p class="lede">
        ¿Tienes un proyecto, una idea o una vacante? Escríbeme. El formulario abre tu cliente de
        correo con el mensaje listo.
      </p>

      <div class="contact-layout">
        <form class="contact-form" novalidate @submit.prevent="onSubmit">
          <div class="field">
            <label for="contacto-nombre">Nombre</label>
            <input
              id="contacto-nombre"
              v-model.trim="form.nombre"
              type="text"
              name="name"
              autocomplete="name"
              required
              :aria-invalid="errors.nombre ? 'true' : 'false'"
              :aria-describedby="errors.nombre ? 'error-nombre' : null"
              @blur="validateField('nombre')"
            />
            <p v-if="errors.nombre" id="error-nombre" class="field-error" role="alert">
              {{ errors.nombre }}
            </p>
          </div>

          <div class="field">
            <label for="contacto-correo">Correo</label>
            <input
              id="contacto-correo"
              v-model.trim="form.correo"
              type="email"
              name="email"
              autocomplete="email"
              required
              :aria-invalid="errors.correo ? 'true' : 'false'"
              :aria-describedby="errors.correo ? 'error-correo' : null"
              @blur="validateField('correo')"
            />
            <p v-if="errors.correo" id="error-correo" class="field-error" role="alert">
              {{ errors.correo }}
            </p>
          </div>

          <div class="field">
            <label for="contacto-mensaje">Mensaje</label>
            <textarea
              id="contacto-mensaje"
              v-model.trim="form.mensaje"
              name="message"
              rows="6"
              autocomplete="off"
              required
              :aria-invalid="errors.mensaje ? 'true' : 'false'"
              :aria-describedby="errors.mensaje ? 'error-mensaje' : null"
              @blur="validateField('mensaje')"
            ></textarea>
            <p v-if="errors.mensaje" id="error-mensaje" class="field-error" role="alert">
              {{ errors.mensaje }}
            </p>
          </div>

          <button type="submit" class="btn btn-primary">Enviar</button>
          <p class="form-status mono" role="status" aria-live="polite">{{ status }}</p>
        </form>

        <aside class="contact-direct" aria-labelledby="directo-title">
          <h2 id="directo-title">Directo</h2>
          <ul class="direct-list" role="list">
            <li>
              <a href="mailto:francismelendez134@gmail.com">francismelendez134@gmail.com</a>
            </li>
            <li>
              <a href="https://github.com/Francis13CR" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/francismch/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
          </ul>
          <button type="button" class="btn btn-ghost copy-btn" @click="copyEmail">
            Copiar correo
          </button>
          <p class="copy-status mono" role="status" aria-live="polite">{{ copyStatus }}</p>
          <p class="contact-place mono">Esparza, Costa Rica</p>
        </aside>
      </div>
    </div>
  </section>
</template>

<script>
const EMAIL = 'francismelendez134@gmail.com';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default {
  name: 'ContactPage',
  data() {
    return {
      form: { nombre: '', correo: '', mensaje: '' },
      errors: { nombre: '', correo: '', mensaje: '' },
      status: '',
      copyStatus: '',
    };
  },
  methods: {
    validateField(field) {
      const value = this.form[field];
      let message = '';

      if (field === 'nombre' && !value) {
        message = 'Escribe tu nombre.';
      } else if (field === 'correo') {
        if (!value) {
          message = 'Escribe tu correo.';
        } else if (!EMAIL_RE.test(value)) {
          message = 'Escribe un correo válido.';
        }
      } else if (field === 'mensaje' && !value) {
        message = 'Cuéntame brevemente en qué puedo ayudarte.';
      }

      this.errors[field] = message;
      return !message;
    },
    validateAll() {
      return ['nombre', 'correo', 'mensaje']
        .map((field) => this.validateField(field))
        .every(Boolean);
    },
    onSubmit() {
      if (!this.validateAll()) {
        this.status = 'Revisa los campos marcados antes de enviar.';
        this.$nextTick(() => {
          const firstInvalid = this.$el.querySelector('[aria-invalid="true"]');
          if (firstInvalid) {
            firstInvalid.focus();
          }
        });
        return;
      }

      const subject = encodeURIComponent(`Contacto desde el portafolio — ${this.form.nombre}`);
      const body = encodeURIComponent(
        `${this.form.mensaje}\n\n${this.form.nombre}\n${this.form.correo}`
      );
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      this.status = 'Abriendo tu cliente de correo…';
    },
    async copyEmail() {
      try {
        await navigator.clipboard.writeText(EMAIL);
        this.copyStatus = 'Correo copiado al portapapeles.';
      } catch (error) {
        this.copyStatus = `No se pudo copiar automáticamente. El correo es ${EMAIL}`;
      }
    },
  },
};
</script>

<style scoped>
.contact-layout {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: var(--space-4);
  margin-top: var(--space-4);
  align-items: start;
}

.field {
  margin-bottom: var(--space-3);
}

.field label {
  display: block;
  margin-bottom: 0.4rem;
  font: 600 0.72rem/1 var(--font-mono);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.field input,
.field textarea {
  width: 100%;
  padding: 0.75rem 0.9rem;
  background: var(--bg-2);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font: 400 0.95rem/1.5 var(--font-sans);
}

.field textarea {
  resize: vertical;
}

.field input[aria-invalid='true'],
.field textarea[aria-invalid='true'] {
  border-color: #ff9d9d;
}

.field-error {
  margin: 0.4rem 0 0;
  color: #ff9d9d;
  font-size: 0.82rem;
}

.form-status {
  min-height: 1.2rem;
  margin: var(--space-2) 0 0;
  font-size: 0.75rem;
  color: var(--accent-movement);
}

.contact-direct {
  padding: var(--space-3);
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
}

.contact-direct h2 {
  font-size: 1.1rem;
}

.direct-list {
  margin: 0 0 var(--space-3);
  padding: 0;
  list-style: none;
}

.direct-list li + li {
  margin-top: 0.5rem;
}

.copy-btn {
  min-height: 44px;
}

.copy-status {
  min-height: 1.2rem;
  margin: var(--space-1) 0 0;
  font-size: 0.72rem;
  color: var(--text-dim);
}

.contact-place {
  margin: var(--space-3) 0 0;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  color: var(--text-dim);
}

@media (max-width: 720px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }
}
</style>
