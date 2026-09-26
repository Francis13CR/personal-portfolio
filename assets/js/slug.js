// slug.js — Deriva un slug legible desde el `id` de un proyecto.
// No modifica projects-data.js: solo transforma el id para usarlo en la URL.

export function slugify(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // quita acentos
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function projectSlug(project) {
  return slugify(project && project.id);
}

export function findProjectBySlug(projects, slug) {
  const target = slugify(slug);
  return (projects || []).find((project) => projectSlug(project) === target) || null;
}

export default { slugify, projectSlug, findProjectBySlug };
