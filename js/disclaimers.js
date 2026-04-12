/* ===================================================
   ZONA TRADING PRO — Sistema de Disclaimers
   ===================================================
   
   Uso en HTML:
   
   <!-- Aviso de riesgo completo (para páginas importantes) -->
   <div data-disclaimer="risk-full"></div>
   
   <!-- Aviso corto (para footer/inline) -->
   <div data-disclaimer="risk-short"></div>
   
   <!-- Aviso de análisis/educativo -->
   <div data-disclaimer="educational"></div>
   
   <!-- Aviso de afiliados -->
   <div data-disclaimer="affiliate"></div>
   
   <!-- Barra pegajosa superior (para toda la web) -->
   <div data-disclaimer="sticky-bar"></div>
   =================================================== */

const DISCLAIMERS = {
  'risk-full': `<div style="background:rgba(231,76,60,0.04);border:1px solid rgba(231,76,60,0.2);border-radius:12px;padding:20px;margin:24px 0;font-size:12px;color:var(--text-3);line-height:1.7">
    <div style="display:flex;align-items:center;gap:8px;color:var(--red);font-weight:700;text-transform:uppercase;letter-spacing:1.5px;font-size:11px;margin-bottom:10px">⚠️ Aviso de riesgo</div>
    <p style="margin:0 0 8px"><strong>El trading de CFDs, Forex y criptoactivos conlleva un alto nivel de riesgo</strong> y puede no ser adecuado para todos los inversores. Los productos apalancados pueden generar pérdidas que superen su depósito inicial.</p>
    <p style="margin:0 0 8px"><strong>Esto NO es asesoramiento financiero.</strong> El contenido publicado en Zona Trading Pro es únicamente de carácter educativo e informativo. Antes de tomar cualquier decisión de inversión, consulte con un asesor financiero autorizado.</p>
    <p style="margin:0"><strong>Rentabilidades pasadas no garantizan rentabilidades futuras.</strong> Asegúrese de entender completamente los riesgos antes de operar. Solo invierta dinero que pueda permitirse perder.</p>
  </div>`,
  
  'risk-short': `<div style="background:rgba(231,76,60,0.04);border:1px solid rgba(231,76,60,0.2);border-radius:10px;padding:14px 18px;margin:20px 0;font-size:12px;color:var(--text-3);line-height:1.6">
    ⚠️ <strong style="color:var(--red)">Aviso de riesgo:</strong> El trading conlleva riesgo de pérdida del capital. El contenido es educativo, no constituye asesoramiento financiero. Opera con tu propia gestión de riesgo.
  </div>`,
  
  'educational': `<div style="background:rgba(52,152,219,0.04);border:1px solid rgba(52,152,219,0.2);border-radius:10px;padding:14px 18px;margin:20px 0;font-size:12px;color:var(--text-3);line-height:1.6">
    📚 <strong style="color:var(--blue)">Contenido educativo:</strong> Este análisis es orientativo y tiene fines educativos. No constituye recomendación de compra/venta. Los niveles y setups son referencias técnicas, no consejos de inversión personalizados.
  </div>`,
  
  'affiliate': `<div style="background:rgba(212,168,67,0.04);border:1px solid rgba(212,168,67,0.2);border-radius:10px;padding:14px 18px;margin:20px 0;font-size:12px;color:var(--text-3);line-height:1.6">
    🤝 <strong style="color:var(--gold)">Aviso de afiliación:</strong> Esta página puede contener enlaces de afiliados. Zona Trading Pro puede recibir compensación cuando te registras a través de ellos, sin coste adicional para ti. Las recomendaciones se basan en evaluaciones objetivas.
  </div>`,
  
  'sticky-bar': `<div id="stickyDisclaimer" style="position:fixed;bottom:0;left:0;right:0;background:rgba(10,10,15,0.96);backdrop-filter:blur(10px);border-top:1px solid rgba(231,76,60,0.3);padding:10px 16px;font-size:11px;color:var(--text-2);text-align:center;z-index:9999;line-height:1.5">
    <span style="color:var(--red);font-weight:700">⚠️</span> El trading conlleva riesgo de pérdida. Contenido educativo, no asesoramiento financiero.
    <button onclick="document.getElementById('stickyDisclaimer').style.display='none';localStorage.setItem('ztp-disclaimer-seen','1')" style="margin-left:12px;background:transparent;border:1px solid var(--border-2);color:var(--text-2);padding:3px 10px;border-radius:4px;cursor:pointer;font-size:10px">Entendido</button>
  </div>`
};

document.addEventListener('DOMContentLoaded', function() {
  // Renderizar los disclaimers con data-disclaimer
  document.querySelectorAll('[data-disclaimer]').forEach(el => {
    const type = el.getAttribute('data-disclaimer');
    if (type === 'sticky-bar') {
      // Solo mostrar la barra pegajosa si el usuario no la ha cerrado antes
      if (localStorage.getItem('ztp-disclaimer-seen') !== '1') {
        el.innerHTML = DISCLAIMERS[type] || '';
      }
    } else if (DISCLAIMERS[type]) {
      el.innerHTML = DISCLAIMERS[type];
    }
  });
});
