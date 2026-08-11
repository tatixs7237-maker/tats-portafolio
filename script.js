const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.project-media').forEach(card => {
  card.addEventListener('click', () => {
    const url = card.dataset.video;
    if (!url || url.startsWith('VIDEO_URL_')) {
      alert('Añade aquí el enlace de tu vídeo en index.html (VIDEO_URL_1, VIDEO_URL_2 o VIDEO_URL_3).');
      return;
    }
    window.open(url, '_blank', 'noopener');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
