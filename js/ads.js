/* ===================================================
   ZONA TRADING PRO — Ad Blocks
   Bloques publicitarios que leen brokers-config.js
   =================================================== */

/*
  INSTRUCCIONES:
  
  Este archivo NO se edita para cambiar enlaces de brokers.
  Los enlaces están en: js/brokers-config.js
  
  Para usar bloques en HTML:
  
  <!-- Banner de broker afiliado -->
  <div data-ad="affiliate" data-variant="exness"></div>
  <div data-ad="affiliate" data-variant="xm"></div>
  
  <!-- Si el broker está DESACTIVADO en brokers-config.js,
       el bloque muestra otro broker habilitado automáticamente -->
  
  <!-- Placeholder para Google AdSense -->
  <div data-ad="adsense" data-variant="horizontal"></div>
  <div data-ad="adsense" data-variant="square"></div>
  <div data-ad="adsense" data-variant="vertical"></div>
*/

// Bloque AdSense (placeholder)
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

// Banner de broker afiliado (lee de brokers-config.js)
function affiliateBanner(brokerId) {
  if (!window.BROKERS_CONFIG) {
    console.warn('brokers-config.js no está cargado');
    return '';
  }
  
  // Buscar el broker solicitado
  let broker = window.BROKERS_CONFIG.find(b => b.id === brokerId && b.enabled);
  
  // Si el solicitado está desactivado, buscar el primero habilitado
  if (!broker) {
    broker = window.BROKERS_CONFIG.find(b => b.enabled);
  }
  
  // Si no hay ninguno habilitado, no mostrar nada
  if (!broker) return '';
  
  return `<a href="${broker.affiliateUrl}" target="_blank" rel="noopener sponsored" class="ad-block ad-affiliate" style="display:flex;align-items:center;gap:20px;padding:20px 24px;background:linear-gradient(135deg,${broker.bannerColor}15,transparent);border:1px solid ${broker.bannerColor}30;border-radius:12px;margin:24px auto;max-width:100%;text-decoration:none;transition:all .3s;position:relative;overflow:hidden">
    <div style="width:60px;height:60px;border-radius:10px;background:${broker.logoGradient};color:${broker.logoColor};display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;flex-shrink:0">${broker.logo}</div>
    <div style="flex:1;min-width:0">
      <div style="font-size:12px;color:var(--text-3);text-transform:uppercase;letter-spacing:1.5px;font-weight:600;margin-bottom:2px">Broker recomendado</div>
      <div style="font-size:16px;font-weight:800;color:var(--text-1);margin-bottom:2px">${broker.name}</div>
      <div style="font-size:13px;color:var(--text-2)">${broker.bannerTitle}</div>
    </div>
    <div style="padding:10px 20px;background:${broker.bannerColor};color:#fff;border-radius:8px;font-size:13px;font-weight:700;white-space:nowrap;flex-shrink:0">Abrir cuenta →</div>
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
