/* ===================================================
   ZONA TRADING PRO — Configuración de Bots
   ===================================================
   
   STATUS:
     'active'      → Visible y accesible
     'coming_soon' → Portada con "PROXIMAMENTE"
     'hidden'      → No aparece en el catálogo
   
   PREMIUM:
     premium: true   → Bot de pago
     premium: false   → Bot gratuito
   
   PRECIOS:
     Básico = Gratis
     Avanzado = 49€ - 99€ (tú decides)
   
   Para añadir un bot nuevo, copia un bloque { }
   y cambia los datos. Commit en GitHub y listo.
   =================================================== */

const BOTS_CONFIG = [
  /*
  // EJEMPLO de bot (descomenta cuando tengas uno listo):
  {
    id: 'golden-cross-scalper',
    status: 'coming_soon',
    icon: '⚡',
    name: 'Golden Cross Scalper',
    type: 'Expert Advisor · MT4/MT5',
    desc: 'Bot basado en la estrategia Golden Cross M5 del curso premium. Opera automáticamente cruces de EMA 9/21 con filtro RSI durante sesión Londres+NY.',
    tags: ['MT4', 'MT5', 'Forex', 'Gold'],
    winRate: '59%',
    returns: '+34.7%',
    drawdown: '-8.3%',
    premium: false,
    price: 'Gratis',
    url: '#'
  },
  {
    id: 'fibonacci-swing',
    status: 'coming_soon',
    icon: '📊',
    name: 'Fibonacci Swing Bot',
    type: 'Expert Advisor · MT5',
    desc: 'Bot de swing trading que opera retrocesos de Fibonacci en H4. Identifica estructura, espera retroceso al 61.8% y entra con confirmación.',
    tags: ['MT5', 'Forex'],
    winRate: '54%',
    returns: '+28%',
    drawdown: '-12%',
    premium: true,
    price: '49€',
    url: '#'
  },
  */
];

if (typeof window !== 'undefined') {
  window.BOTS_CONFIG = BOTS_CONFIG;
  window.getVisibleBots = function() {
    return BOTS_CONFIG.filter(function(b) { return b.status !== 'hidden'; });
  };
}
