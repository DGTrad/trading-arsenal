/* ===================================================
   ZONA TRADING PRO — Configuración de Brokers
   Solo 4 brokers fiables para la Unión Europea
   Todos regulados por ESMA / MiFID II / FCA / CySEC / CNMV
   =================================================== */

const BROKERS_CONFIG = [
  {
    id: 'darwinex',
    enabled: true,
    name: 'Darwinex',
    affiliateUrl: 'https://www.darwinex.com/',
    featured: true,
    logo: 'DX',
    logoGradient: 'linear-gradient(135deg,#1a1a2e,#16213e)',
    logoColor: '#4cc9f0',
    rating: '4.8/5',
    stars: '★★★★★',
    tagline: 'Broker + Asset Manager · Regulado CNMV/FCA',
    description: 'Darwinex es un broker y asset manager con sede en Londres y oficina en Madrid. Regulado por FCA (UK) y CNMV (España), cumple al 100% con normativa MiFID II/ESMA. Su modelo innovador permite a traders profesionales atraer capital de inversores a través del sistema DARWINs, ganando comisiones por rendimiento. Spreads desde 0.0 pips, ejecución de 25ms, integración con Interactive Brokers para acciones y futuros. Ideal para traders serios con visión profesional.',
    regulation: 'FCA, CNMV (España)',
    spread: '0.0 pips',
    minDeposit: '500€',
    leverage: '1:30 (ESMA)',
    platforms: 'MT4, MT5, FIX API',
    features: [
      'Regulado FCA + CNMV España',
      'Spreads desde 0.0 pips',
      'Programa DarwinIA (capital semilla)',
      'Integración Interactive Brokers',
      'Protección FSCS hasta £85K',
      'Ejecución 25ms ECN'
    ],
    bannerTitle: 'Regulado CNMV España · Capital semilla DarwinIA',
    bannerColor: '#4cc9f0'
  },
  {
    id: 'pepperstone',
    enabled: true,
    name: 'Pepperstone',
    affiliateUrl: 'https://pepperstone.com/es/',
    featured: true,
    logo: 'PP',
    logoGradient: 'linear-gradient(135deg,#dc2626,#ef4444)',
    logoColor: 'white',
    rating: '4.8/5',
    stars: '★★★★★',
    tagline: 'Mejor ejecución · Regulado FCA/CySEC/BaFin',
    description: 'Pepperstone opera en la UE a través de su entidad CySEC (Chipre) y BaFin (Alemania), cumpliendo totalmente con ESMA/MiFID II. Más de 15 años de trayectoria, ejecución de 30ms de media sin dealing desk. Ofrece MT4, MT5 y cTrader con spreads desde 0.0 pips. Sin depósito mínimo. Copy trading integrado. Ideal para scalping y swing trading con condiciones institucionales.',
    regulation: 'FCA, CySEC, BaFin',
    spread: '0.0 pips',
    minDeposit: '0€',
    leverage: '1:30 (ESMA)',
    platforms: 'MT4, MT5, cTrader',
    features: [
      'Regulado CySEC + BaFin + FCA',
      'Sin depósito mínimo',
      'Ejecución 30ms NDD',
      'MT4, MT5 y cTrader',
      'Copy trading incluido',
      'Protección saldo negativo'
    ],
    bannerTitle: 'Ejecución 30ms · Sin depósito mínimo',
    bannerColor: '#dc2626'
  },
  {
    id: 'icmarkets',
    enabled: true,
    name: 'IC Markets',
    affiliateUrl: 'https://www.icmarkets.eu/',
    featured: false,
    logo: 'IC',
    logoGradient: 'linear-gradient(135deg,#059669,#10b981)',
    logoColor: 'white',
    rating: '4.7/5',
    stars: '★★★★★',
    tagline: 'Top ECN para scalping · Regulado CySEC',
    description: 'IC Markets opera en Europa a través de IC Markets (EU) Ltd, regulado por CySEC (Chipre) bajo licencia 362/18, cumpliendo con ESMA y MiFID II. Top broker ECN global, favorito entre scalpers y traders algorítmicos por su liquidez institucional profunda y ejecución sub-40ms. Permite todos los estilos sin restricciones: scalping, hedging y Expert Advisors.',
    regulation: 'CySEC (362/18)',
    spread: '0.0 pips',
    minDeposit: '200€',
    leverage: '1:30 (ESMA)',
    platforms: 'MT4, MT5, cTrader',
    features: [
      'Regulado CySEC UE',
      'Ejecución Raw ECN',
      'Permite scalping y EAs',
      'Liquidez institucional',
      'Spread promedio 0.1 pips',
      'Protección saldo negativo'
    ],
    bannerTitle: 'ECN institucional · Ideal para scalping',
    bannerColor: '#10b981'
  },
  {
    id: 'xtb',
    enabled: true,
    name: 'XTB',
    affiliateUrl: 'https://www.xtb.com/es/',
    featured: false,
    logo: 'XTB',
    logoGradient: 'linear-gradient(135deg,#0f172a,#1e293b)',
    logoColor: '#22c55e',
    rating: '4.7/5',
    stars: '★★★★★',
    tagline: 'Cotiza en bolsa · Regulado KNF/CySEC/FCA',
    description: 'XTB es un broker europeo cotizado en la Bolsa de Varsovia, lo que le obliga a una transparencia máxima. Regulado por KNF (Polonia), CySEC (Chipre) y FCA (UK). Su plataforma propia xStation 5 es una de las más avanzadas del mercado con gráficos profesionales, análisis integrado y ejecución inmediata. Sin comisiones en acciones reales (hasta 100K€/mes). Ideal para traders que buscan transparencia y tecnología europea.',
    regulation: 'KNF, CySEC, FCA',
    spread: '0.1 pips',
    minDeposit: '0€',
    leverage: '1:30 (ESMA)',
    platforms: 'xStation 5',
    features: [
      'Cotiza en bolsa (máxima transparencia)',
      'Regulado KNF + CySEC + FCA',
      'Plataforma xStation 5 premiada',
      'Sin depósito mínimo',
      'Acciones reales sin comisión',
      'Protección saldo negativo'
    ],
    bannerTitle: 'Cotiza en bolsa · xStation 5 premiada',
    bannerColor: '#22c55e'
  }
];

if (typeof window !== 'undefined') {
  window.BROKERS_CONFIG = BROKERS_CONFIG;
  window.getEnabledBrokers = function() {
    return BROKERS_CONFIG.filter(function(b) { return b.enabled; });
  };
  window.getBrokerById = function(id) {
    return BROKERS_CONFIG.find(function(b) { return b.id === id && b.enabled; });
  };
}
