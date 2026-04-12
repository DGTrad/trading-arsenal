/* ===================================================
   ZONA TRADING PRO — Configuración de Brokers
   ===================================================
   
   ⚠️ EDITA SOLO ESTE ARCHIVO PARA CAMBIAR ENLACES Y VISIBILIDAD ⚠️
   
   - affiliateUrl: tu enlace único de afiliado
   - enabled: true (visible) / false (oculto)
   - featured: true (badge "TOP CHOICE") / false
=================================================== */

const BROKERS_CONFIG = [
  {
    id: 'exness',
    enabled: true,
    name: 'Exness',
    affiliateUrl: 'https://one.exnessonelink.com/a/jh1tl7note',
    featured: true,
    logo: 'EX',
    logoGradient: 'linear-gradient(135deg,#fbbf24,#f59e0b)',
    logoColor: '#0a0a0f',
    rating: '4.9/5',
    stars: '★★★★★',
    tagline: 'Mejores spreads del mercado',
    description: 'Exness destaca por ofrecer los spreads más bajos del mercado (desde 0.0 pips), retiros instantáneos 24/7 y apalancamiento flexible. Regulado por FCA, CySEC y FSCA. Ejecución sin requotes ni slippage, una de las más rápidas del sector. Ideal para traders de cualquier nivel que buscan condiciones competitivas y fiabilidad institucional.',
    regulation: 'FCA, CySEC, FSCA',
    spread: '0.0 pips',
    minDeposit: '$10',
    leverage: 'Ilimitado',
    platforms: 'MT4, MT5',
    features: [
      'Spreads desde 0.0 pips',
      'Retiros instantáneos 24/7',
      'Apalancamiento flexible',
      'Sin requotes ni slippage',
      'MT4, MT5 y app móvil',
      'Protección saldo negativo'
    ],
    bannerTitle: 'Spreads desde 0.0 pips · Retiros instantáneos',
    bannerColor: '#f59e0b'
  },
  {
    id: 'xm',
    enabled: true,
    name: 'XM',
    affiliateUrl: 'https://affs.click/mH2EQ',
    featured: true,
    logo: 'XM',
    logoGradient: 'linear-gradient(135deg,#1e3a8a,#3b82f6)',
    logoColor: 'white',
    rating: '4.9/5',
    stars: '★★★★★',
    tagline: 'Mejor para principiantes',
    description: 'XM es uno de los brokers más establecidos globalmente, con más de 15 millones de clientes en 190+ países. Regulado por CySEC, ASIC y FSC. Plataforma ideal para principiantes gracias a su material educativo en español, webinars gratuitos y cuenta desde solo $5. Bonus de bienvenida disponibles y soporte 24/5 en español.',
    regulation: 'CySEC, ASIC, FSC',
    spread: '0.1 pips',
    minDeposit: '$5',
    leverage: '1:1000',
    platforms: 'MT4, MT5',
    features: [
      'Cuenta desde $5',
      'Sin comisiones de depósito',
      'Spreads desde 0.1 pips',
      'Bonus de bienvenida',
      'Soporte 24/5 español',
      '+1.000 instrumentos'
    ],
    bannerTitle: 'Bonus de bienvenida · Desde $5',
    bannerColor: '#3b82f6'
  },
  {
    id: 'pepperstone',
    enabled: false,
    name: 'Pepperstone',
    affiliateUrl: 'https://pepperstone.com/es/',
    featured: false,
    logo: 'PP',
    logoGradient: 'linear-gradient(135deg,#dc2626,#ef4444)',
    logoColor: 'white',
    rating: '4.8/5',
    stars: '★★★★★',
    tagline: 'Mejor para swing trading',
    description: 'Broker australiano premiado con más de 15 años de trayectoria. Regulado por FCA, ASIC, CySEC y DFSA (todos Tier-1). Famoso por su ejecución de 30ms de media y por la excelente atención al cliente. Ideal para operativa swing e intraday. Ofrece MT4, MT5 y cTrader, con copy trading incluido.',
    regulation: 'FCA, ASIC, CySEC',
    spread: '0.0 pips',
    minDeposit: '$0',
    leverage: '1:500',
    platforms: 'MT4, MT5, cTrader',
    features: [
      'Sin depósito mínimo',
      'Ejecución 30ms promedio',
      'MT4, MT5 y cTrader',
      '+1.200 instrumentos',
      'Regulación Tier-1',
      'Copy trading incluido'
    ],
    bannerTitle: 'Broker premiado · Ejecución 30ms',
    bannerColor: '#dc2626'
  },
  {
    id: 'fpmarkets',
    enabled: false,
    name: 'FP Markets',
    affiliateUrl: 'https://www.fpmarkets.com/es/',
    featured: false,
    logo: 'FP',
    logoGradient: 'linear-gradient(135deg,#7c3aed,#a855f7)',
    logoColor: 'white',
    rating: '4.6/5',
    stars: '★★★★☆',
    tagline: 'Mejor relación calidad/precio',
    description: 'Broker australiano con 18+ años de trayectoria. Regulado por ASIC y CySEC. Ofrece tecnología institucional a precios retail, con más de 10.000 instrumentos: forex, acciones reales, índices, commodities y criptomonedas. Cuenta Raw ECN con spreads desde 0.0 pips, soporte 24/7 multilenguaje y plataforma IRESS disponible.',
    regulation: 'ASIC, CySEC',
    spread: '0.0 pips',
    minDeposit: '$100',
    leverage: '1:500',
    platforms: 'MT4, MT5, cTrader',
    features: [
      '+10.000 instrumentos',
      'Spread desde 0.0 pips',
      'Cuenta Raw ECN',
      'Acciones CFDs reales',
      'Soporte 24/7',
      'IRESS disponible'
    ],
    bannerTitle: '+10.000 instrumentos · Raw ECN',
    bannerColor: '#a855f7'
  },
  {
    id: 'vantage',
    enabled: false,
    name: 'Vantage',
    affiliateUrl: 'https://www.vantagemarkets.com/es/',
    featured: false,
    logo: 'VT',
    logoGradient: 'linear-gradient(135deg,#0f172a,#1e293b)',
    logoColor: 'white',
    rating: '4.5/5',
    stars: '★★★★☆',
    tagline: 'Award-winning multi-asset',
    description: 'Broker multi-activo con más de 15 años de experiencia, reconocido internacionalmente con múltiples premios. Regulado por ASIC, FCA y FSCA. Excelente tanto para traders institucionales como retail. Ofrece plataforma propia ProTrader, cuenta RAW ECN, copy trading social integrado y una completa biblioteca de educación gratuita.',
    regulation: 'ASIC, FCA, FSCA',
    spread: '0.0 pips',
    minDeposit: '$50',
    leverage: '1:500',
    platforms: 'MT4, MT5, ProTrader',
    features: [
      '+1.000 instrumentos',
      'Plataforma propia ProTrader',
      'Cuenta RAW ECN',
      'Copy trading social',
      'Educación gratuita',
      'App móvil premiada'
    ],
    bannerTitle: 'Award-winning · Multi-activo',
    bannerColor: '#1e293b'
  },
  {
    id: 'fxpro',
    enabled: false,
    name: 'FXPro',
    affiliateUrl: 'https://www.fxpro.es/',
    featured: false,
    logo: 'FX',
    logoGradient: 'linear-gradient(135deg,#1e40af,#3b82f6)',
    logoColor: 'white',
    rating: '4.5/5',
    stars: '★★★★☆',
    tagline: 'Broker veterano premiado',
    description: 'FXPro lleva más de 15 años operando con regulación de FCA, CySEC, FSCA y SCB. Acumula más de 90 premios internacionales, uno de los brokers más galardonados del sector. Ejecución NDD (No Dealing Desk) garantizada, más de 2.100 instrumentos disponibles, spreads desde 0.0 pips y soporte en 19 idiomas.',
    regulation: 'FCA, CySEC, FSCA',
    spread: '0.0 pips',
    minDeposit: '$100',
    leverage: '1:500',
    platforms: 'MT4, MT5, cTrader',
    features: [
      '+90 premios internacionales',
      'Ejecución NDD garantizada',
      'cTrader, MT4, MT5',
      '+2.100 instrumentos',
      'Spreads desde 0.0 pips',
      'Soporte 19 idiomas'
    ],
    bannerTitle: '+90 premios · Ejecución NDD',
    bannerColor: '#1e40af'
  },
  {
    id: 'avatrade',
    enabled: false,
    name: 'AvaTrade',
    affiliateUrl: 'https://www.avatrade.es/',
    featured: false,
    logo: 'AV',
    logoGradient: 'linear-gradient(135deg,#0891b2,#06b6d4)',
    logoColor: 'white',
    rating: '4.5/5',
    stars: '★★★★☆',
    tagline: 'Perfecto para principiantes',
    description: 'Broker irlandés con más de 15 años de trayectoria, regulado en 9 jurisdicciones globales diferentes. Su plataforma propia AvaTradeGo destaca por ser intuitiva y visual, ideal para principiantes. Ofrece además academia de trading gratuita, opciones vanilla (poco comunes en retail), protección de saldo negativo y más de 1.250 instrumentos.',
    regulation: 'CBI, ASIC, FSCA',
    spread: '0.9 pips',
    minDeposit: '$100',
    leverage: '1:400',
    platforms: 'MT4, MT5, AvaGo',
    features: [
      'Plataforma propia fácil',
      'Academia de trading gratis',
      'Opciones vanilla únicas',
      'Protección saldo negativo',
      '9 regulaciones globales',
      '+1.250 instrumentos'
    ],
    bannerTitle: 'Plataforma propia · Academia gratis',
    bannerColor: '#0891b2'
  }
];

if (typeof window !== 'undefined') {
  window.BROKERS_CONFIG = BROKERS_CONFIG;
  window.getEnabledBrokers = function() {
    return BROKERS_CONFIG.filter(b => b.enabled);
  };
  window.getBrokerById = function(id) {
    return BROKERS_CONFIG.find(b => b.id === id && b.enabled);
  };
}
