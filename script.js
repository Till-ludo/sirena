// Navigation douce
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
ent.addEventListener('DOMContentLoaded', () => {
    const icons = ['🍕', '🍝', '🍨', '🦐', '🎂'];
    for (let i = 0; i < 30; i++) {
      const el = document.createElement('div');
      el.className = 'falling-icon';
      el.textContent = icons[Math.floor(Math.random() * icons.length)];
      el.style.left = Math.random() * 100 + 'vw';
      el.style.animationDuration = (5 + Math.random() * 5) + 's';
      el.style.fontSize = (20 + Math.random() * 20) + 'px';
      document.body.appendChild(el);
    }
  });
  