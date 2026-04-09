/* ===================================================
   TRADINGVIEW THEME SYNC
   Sincroniza el tema de los widgets TradingView con el tema de la web
   DEBE cargarse ANTES que los scripts de widgets TradingView
   =================================================== */

(function() {
  // Detectar tema actual (dark por defecto)
  const theme = localStorage.getItem('theme') || 'dark';
  
  // Observador de nuevos scripts añadidos al DOM
  // Intercepta los scripts de TradingView y cambia "colorTheme" antes de que los procesen
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      mutation.addedNodes.forEach(function(node) {
        if (node.tagName === 'SCRIPT' && node.src && node.src.includes('tradingview.com/external-embedding')) {
          // Modificar la config del script inline
          if (node.textContent) {
            node.textContent = node.textContent
              .replace(/"colorTheme"\s*:\s*"(dark|light)"/g, `"colorTheme": "${theme}"`)
              .replace(/"theme"\s*:\s*"(dark|light)"/g, `"theme": "${theme}"`);
          }
        }
      });
    });
  });
  
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
  
  // Detener observer después de 5 segundos (todos los widgets ya se habrán cargado)
  setTimeout(() => observer.disconnect(), 5000);
})();
