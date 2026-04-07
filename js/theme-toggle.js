/* ===================================================
   TRADING ARSENAL — Theme Toggle (Dark / Light)
   =================================================== */

(function() {
  // Aplicar tema guardado ANTES de que se renderice (evita flash)
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  // Crear botón flotante cuando el DOM esté listo
  function createToggle() {
    if (document.getElementById('themeToggle')) return;

    const btn = document.createElement('button');
    btn.id = 'themeToggle';
    btn.setAttribute('aria-label', 'Cambiar tema');
    btn.title = 'Cambiar tema oscuro/claro';
    btn.innerHTML = getCurrentTheme() === 'light' ? '🌙' : '☀️';

    // Estilos inline para que funcione sin tocar CSS principal
    Object.assign(btn.style, {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      border: '1px solid var(--border-2)',
      background: 'var(--bg-3)',
      color: 'var(--text-1)',
      fontSize: '20px',
      cursor: 'pointer',
      zIndex: '999',
      boxShadow: 'var(--shadow-md)',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    });

    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'scale(1.1) rotate(15deg)';
      btn.style.borderColor = 'var(--gold)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'scale(1) rotate(0deg)';
      btn.style.borderColor = 'var(--border-2)';
    });

    btn.addEventListener('click', toggleTheme);
    document.body.appendChild(btn);
  }

  function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }

  function toggleTheme() {
    const current = getCurrentTheme();
    const newTheme = current === 'light' ? 'dark' : 'light';
    
    if (newTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    
    localStorage.setItem('theme', newTheme);
    
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.innerHTML = newTheme === 'light' ? '🌙' : '☀️';
      btn.style.transform = 'scale(0.8) rotate(360deg)';
      setTimeout(() => {
        btn.style.transform = 'scale(1) rotate(0deg)';
      }, 300);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createToggle);
  } else {
    createToggle();
  }
})();
