/* ===================================================
   TRADING ARSENAL — Main JS
   =================================================== */

// === NAV SCROLL EFFECT ===
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// === MOBILE MENU ===
const burger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');
if (burger) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    burger.classList.toggle('active');
  });
}

// === TOOL FILTER ===
function filterTools(category, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.tool-card').forEach(card => {
    card.style.display = (category === 'all' || card.dataset.category === category) ? '' : 'none';
  });
}

// === COOKIE CONSENT ===
function initCookieBanner() {
  const consent = localStorage.getItem('cookie-consent');
  if (!consent) {
    setTimeout(() => {
      document.getElementById('cookieBanner').classList.add('show');
    }, 1500);
  }
}

function acceptCookies() {
  localStorage.setItem('cookie-consent', 'accepted');
  document.getElementById('cookieBanner').classList.remove('show');
  // Aquí activar Google Analytics u otros scripts
  // initAnalytics();
}

function rejectCookies() {
  localStorage.setItem('cookie-consent', 'rejected');
  document.getElementById('cookieBanner').classList.remove('show');
}

// === NEWSLETTER ===
function subscribeNewsletter() {
  const email = document.getElementById('newsletterEmail').value;
  const msg = document.getElementById('newsletterMsg');
  if (!email || !email.includes('@')) {
    msg.textContent = 'Por favor, introduce un email válido.';
    msg.style.color = 'var(--red)';
    return;
  }
  // TODO: Integrar con servicio de email (Mailchimp, ConvertKit, etc.)
  msg.textContent = '✓ ¡Gracias! Te has suscrito correctamente.';
  msg.style.color = 'var(--green)';
  document.getElementById('newsletterEmail').value = '';
}

// === MODAL ===
function openTool(toolId) {
  const overlay = document.getElementById('modalOverlay');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');

  const tools = {
    positionSize: { title: 'Calculadora de Posición', render: renderPositionSize },
    rrCalc: { title: 'Calculadora Riesgo/Beneficio', render: renderRRCalc },
    pipCalc: { title: 'Calculadora de Pips', render: renderPipCalc },
    candlePatterns: { title: 'Guía de Patrones de Velas', render: renderCandlePatterns },
    plCalc: { title: 'Calculadora P&L', render: renderPLCalc },
    compound: { title: 'Simulador de Interés Compuesto', render: renderCompound }
  };

  const tool = tools[toolId];
  if (!tool) return;

  title.textContent = tool.title;
  body.innerHTML = '';
  tool.render(body);
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// === SMOOTH SCROLL FOR ANCHOR LINKS ===
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
  initCookieBanner();
});
