/* ===================================================
   TRADING ARSENAL — Ad Blocks
   Bloques publicitarios reutilizables para la web
   =================================================== */

/*
  INSTRUCCIONES PARA DAVID:
  =========================
  
  Esta web tiene 3 tipos de espacios publicitarios:
  
  1. BLOQUES ADSENSE - Google AdSense (anuncios automáticos)
     - Necesitas registrarte en https://www.google.com/adsense/
     - Una vez aprobado (puede tardar días/semanas), reemplaza los
       placeholders con el código real que te dé Google
     - Busca en el código: "ADSENSE_PLACEHOLDER"
  
  2. BLOQUES AFILIADOS - Banners de brokers
     - Los brokers te dan banners cuando te registras como afiliado
     - Reemplaza los placeholders con los banners reales
     - Cada broker suele dar código HTML listo para pegar
  
  3. BLOQUES NATIVOS - Promociones propias
     - Enlaces a tus propios cursos, planes premium, etc.
     - Ya están configurados y funcionando
*/

// Función para insertar un bloque de anuncio AdSense
function adsenseBlock(size = 'horizontal') {
  const sizes = {
    horizontal: { w: '100%', h: '90px', label: '728x90' },
    square: { w: '300px', h: '250px', label: '300x250' },
    vertical: { w: '160px', h: '600px', label: '160x600' },
    mobile: { w: '100%', h: '100px', label: '320x100' }
  };
  const s = sizes[size] || sizes.horizontal;
  
  return `<div class="ad-block ad-adsense" style="width:${s.w};max-width:100%;min-height:${s.h};display:flex;align-items:center;justify-content:center;background:var(--bg-3);border:1px dashed var(--border-2);border-radius:8px;margin:24px auto;color:var(--text-3);font-size:12px;font-family:var(--font-mono);text-align:center;padding:20px">
    <!-- ADSENSE_PLACEHOLDER: reemplaza este div con el código de Google AdSense -->
    <div>
      <div style="font-size:11px;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:4px;color:var(--text-3)">Publicidad</div>
      <div style="font-size:10px;color:var(--text-4)">${s.label} — AdSense</div>
    </div>
  </div>`;
}

// Función para insertar un banner de broker afiliado
function affiliateBanner(broker) {
  const brokers = {
    exness: {
      name: 'Exness',
      title: 'Spreads desde 0.0 pips · Retiros instantáneos',
      cta: 'Abrir cuenta →',
      color: '#f59e0b',
      url: 'https://www.exness.com/'
    },
    xm: {
      name: 'XM',
      title: 'Bonus de bienvenida · Desde $5',
      cta: 'Abrir cuenta →',
      color: '#3b82f6',
      url: 'https://www.xm.com/es/'
    },
    pepperstone: {
      name: 'Pepperstone',
      title: 'Broker premiado · Ejecución 30ms',
      cta: 'Abrir cuenta →',
      color: '#dc2626',
      url: 'https://pepperstone.com/es/'
    },
    icmarkets: {
      name: 'IC Markets',
      title: 'Top ECN · Ideal para scalping',
      cta: 'Abrir cuenta →',
      color: '#10b981',
      url: 'https://www.icmarkets.com/global/es/'
    }
  };
  
  const b = brokers[broker] || brokers.exness;
  
  return `<a href="${b.url}" target="_blank" rel="noopener sponsored" class="ad-block ad-affiliate" style="display:flex;align-items:center;gap:20px;padding:20px 24px;background:linear-gradient(135deg,${b.color}15,transparent);border:1px solid ${b.color}30;border-radius:12px;margin:24px auto;max-width:100%;text-decoration:none;transition:all .3s;position:relative;overflow:hidden">
    <div style="width:60px;height:60px;border-radius:10px;background:${b.color};color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;flex-shrink:0">${b.name.substring(0,2).toUpperCase()}</div>
    <div style="flex:1;min-width:0">
      <div style="font-size:12px;color:var(--text-3);text-transform:uppercase;letter-spacing:1.5px;font-weight:600;margin-bottom:2px">Broker recomendado</div>
      <div style="font-size:16px;font-weight:800;color:var(--text-1);margin-bottom:2px">${b.name}</div>
      <div style="font-size:13px;color:var(--text-2)">${b.title}</div>
    </div>
    <div style="padding:10px 20px;background:${b.color};color:#fff;border-radius:8px;font-size:13px;font-weight:700;white-space:nowrap;flex-shrink:0">${b.cta}</div>
  </a>`;
}

// Insertar bloques automáticamente en elementos con atributo data-ad
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-ad]').forEach(el => {
    const type = el.getAttribute('data-ad');
    const variant = el.getAttribute('data-variant') || 'horizontal';
    
    if (type === 'adsense') {
      el.innerHTML = adsenseBlock(variant);
    } else if (type === 'affiliate') {
      el.innerHTML = affiliateBanner(variant);
    }
  });
});
