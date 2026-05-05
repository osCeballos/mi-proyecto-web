// ============================================
// main.js — lógica compartida entre páginas
// ============================================


// --------------------------------------------
// 1. ANIMACIÓN DE ENTRADA
// Las secciones aparecen al hacer scroll.
// Usamos IntersectionObserver para detectar
// cuándo un elemento entra en la pantalla.
// --------------------------------------------

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity    = '1';
      entry.target.style.transform  = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// Seleccionamos los elementos que queremos animar
const animatedElements = document.querySelectorAll('.card, .about-grid, .hero');

animatedElements.forEach(el => {
  // Estado inicial: invisible y desplazado hacia abajo
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

  // El observer los "activa" cuando son visibles
  observer.observe(el);
});


// --------------------------------------------
// 2. BOTÓN "AÑADIR HABILIDAD" (about.html)
// Solo se ejecuta si el botón existe en la página.
// --------------------------------------------

const addSkillBtn = document.getElementById('add-skill-btn');
const skillList   = document.getElementById('skill-list');

if (addSkillBtn && skillList) {
  addSkillBtn.addEventListener('click', () => {
    // Pedimos al usuario que escriba una habilidad
    const skill = prompt('¿Qué habilidad quieres añadir?');

    // Si escribió algo (y no canceló), lo añadimos a la lista
    if (skill && skill.trim() !== '') {
      const li = document.createElement('li');
      li.textContent = skill.trim();
      skillList.appendChild(li);
    }
  });
}


// --------------------------------------------
// 3. AÑO ACTUAL EN EL FOOTER
// Así no tienes que actualizarlo cada año a mano.
// --------------------------------------------

const footer = document.querySelector('.site-footer p');

if (footer) {
  const year = new Date().getFullYear();
  footer.innerHTML += ` · ${year}`;
}