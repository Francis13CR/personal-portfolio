<template>
  <section id="ahora" class="section now" aria-labelledby="ahora-title" v-reveal>
    <div class="container">
      <p class="section-label">04 / Ahora</p>
      <h2 id="ahora-title">Ahora mismo</h2>
      <p class="now-role mono">Software Developer<br />Programming Supervisor</p>
      <p class="now-text">
        Trabajo en Facture.cr. Desarrollo, priorizo el backlog, refino tickets, asigno, reviso y
        garantizo que nada llegue a producción sin QA.
      </p>
      <pre
        class="codeblock mono"
        role="region"
        tabindex="0"
        aria-label="Comandos y stack actual"
      ><code>&gt; ahora_construyo_con:
  Vue · PHP · MySQL · APIs · automatización
&gt; estado: <span class="code-ok">siempre aprendiendo.</span></code></pre>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NowSection',
};
</script>

<style scoped>
.now-role {
  margin: 0 0 var(--space-2);
  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1.9;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent-software);
}

.now-text {
  max-width: 62ch;
  color: var(--text-muted);
}

.codeblock {
  margin: var(--space-3) 0 0;
  padding: var(--space-2) var(--space-3);
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  color: var(--text-muted);
  font-size: 0.85rem;
  line-height: 1.9;
  overflow-x: auto;
}

.code-ok {
  color: var(--accent-movement);
}
</style>
