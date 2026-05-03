/* ===================================================
   ZONA TRADING PRO — Configuración de Bots
   ===================================================
   STATUS: 'active' / 'coming_soon' / 'hidden'
   PREMIUM: true (pago) / false (gratis)
   =================================================== */

const BOTS_CONFIG = [
  {
    id: 'signal-commander-pro',
    status: 'active',
    icon: '🥇',
    name: 'SignalCommander Pro XAUUSD',
    type: 'Expert Advisor · MT5 · Oro H1',
    desc: 'EA especializado exclusivamente en XAUUSD H1. Utiliza 5 factores de confluencia (EMA 20/50/200, RSI, MACD, patrones de velas) con filtro ADX para evitar mercados laterales. Sistema de doble posición con break-even automático. Filtro estacional (pausa en verano y Navidad). Techo mensual con trailing de protección. Sin martingala, sin grid, sin promediado. Cada operación tiene SL fijo.',
    tags: ['MT5', 'Gold', 'H1'],
    winRate: '52.4%',
    returns: '+67.4%',
    drawdown: '-7.9%',
    extraStats: {
      profitFactor: '1.88',
      sharpe: '8.38',
      trades: '170',
      period: '16 meses',
      deposit: '30.000€',
      recoveryFactor: '4.66',
      lrCorrelation: '0.97'
    },
    premium: true,
    price: '217 USD (IVA incl.)',
    rentPrice: '47 USD/mes (IVA incl.)',
    url: 'bot-signal-commander.html',
    features: [
      '5 factores de confluencia (EMA, RSI, MACD, velas, ADX)',
      'Doble posición: TP1 (1:1) + TP2 (1:2) con break-even',
      'Filtro estacional (julio-agosto, Navidad)',
      'Techo mensual con protección trailing',
      'Sin martingala, sin grid, SL fijo en cada operación',
      'Config conservadora 0.25% riesgo/leg recomendada',
      'Backtest 28 meses: positivo TODOS los años'
    ]
  }
];

if (typeof window !== 'undefined') {
  window.BOTS_CONFIG = BOTS_CONFIG;
  window.getVisibleBots = function() {
    return BOTS_CONFIG.filter(function(b) { return b.status !== 'hidden'; });
  };
}
