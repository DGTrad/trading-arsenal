/* ===================================================
   ZONA TRADING PRO — Configuración de Brokers
   ===================================================
   
   ⚠️ ARCHIVO PRINCIPAL PARA EDITAR TUS ENLACES DE AFILIADOS ⚠️
   
   Instrucciones:
   
   1. Para CAMBIAR un enlace de afiliado:
      - Busca el broker en la lista de abajo
      - Cambia el valor de "affiliateUrl" por tu enlace único
   
   2. Para OCULTAR un broker de la web:
      - Cambia "enabled: true" por "enabled: false"
      - El broker desaparecerá de la página de brokers y de los banners
   
   3. Para MOSTRAR un broker que estaba oculto:
      - Cambia "enabled: false" por "enabled: true"
   
   4. Para CAMBIAR EL ORDEN:
      - Mueve los bloques completos de cada broker arriba o abajo
      - El primero de la lista será el más destacado
   
   Después de guardar, los cambios se verán automáticamente en:
   - Página de Brokers (pages/brokers.html)
   - Banners de afiliados del index, análisis, cursos, etc.
   =================================================== */

const BROKERS_CONFIG = [
  {
    id: 'exness',
    enabled: false,                                    // ← Cambia a false para ocultar
    name: 'Exness',
    affiliateUrl: 'https://www.exness.com/',          // ← PON AQUÍ tu enlace único
    featured: true,                                   // ← Destaca con "★ TOP CHOICE"
    
    // Datos visuales
    logo: 'EX',
    logoGradient: 'linear-gradient(135deg,#fbbf24,#f59e0b)',
    logoColor: '#0a0a0f',
    rating: '4.9/5',
    stars: '★★★★★',
    tagline: 'Mejores spreads · Top CPA',
    
    // Descripción larga
    description: 'Exness destaca por ofrecer los spreads más bajos del mercado (desde 0.0 pips), retiros instantáneos 24/7 y apalancamiento ilimitado. Regulado por FCA, CySEC y FSCA. Su programa de afiliados paga hasta $1,850 por cliente referido y hasta 40% revenue share lifetime.',
    
    // Stats para la tabla comparativa
    regulation: 'FCA, CySEC, FSCA',
    spread: '0.0 pips',
    minDeposit: '$10',
    leverage: 'Ilimitado',
    platforms: 'MT4, MT5',
    
    // Features (bullets verdes)
    features: [
      'Spreads desde 0.0 pips',
      'Retiros instantáneos 24/7',
      'Apalancamiento ilimitado',
      'Sin requotes ni slippage',
      'MT4, MT5 y app móvil',
      'Protección saldo negativo'
    ],
    
    // Para el banner pequeño (ads.js)
    bannerTitle: 'Spreads desde 0.0 pips · Retiros instantáneos',
    bannerColor: '#f59e0b'
  },
  
  {
    id: 'xm',
    enabled: false,
    name: 'XM',
    affiliateUrl: 'https://affs.click/Eh1V5',           // ← PON AQUÍ tu enlace único
    featured: true,
    
    logo: 'XM',
    logoGradient: 'linear-gradient(135deg,#1e3a8a,#3b82f6)',
    logoColor: 'white',
    rating: '4.9/5',
    stars: '★★★★★',
    tagline: 'Mejor para principiantes',
    description: 'XM es uno de los brokers más establecidos con +15M de clientes en 190+ países. Regulado por CySEC, ASIC y FSC. Plataforma ideal para principiantes con material educativo en español. Programa de afiliados con CPA hasta $1,000 + 10% sub-affiliate, pagos diarios automáticos.',
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
    affiliateUrl: 'https://pepperstone.com/es/',      // ← PON AQUÍ tu enlace único
    featured: false,
    
    logo: 'PP',
    logoGradient: 'linear-gradient(135deg,#dc2626,#ef4444)',
    logoColor: 'white',
    rating: '4.8/5',
    stars: '★★★★★',
    tagline: 'Mejor para swing trading',
    description: 'Broker australiano premiado con +15 años. Regulado por FCA, ASIC, CySEC y DFSA (Tier-1). Ejecución de 30ms y atención al cliente excelente. Ideal para swing e intraday. Hasta 50% revenue share y CPA personalizado.',
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
    id: 'icmarkets',
    enabled: false,
    name: 'IC Markets',
    affiliateUrl: 'https://www.icmarkets.com/global/es/',  // ← PON AQUÍ tu enlace único
    featured: false,
    
    logo: 'IC',
    logoGradient: 'linear-gradient(135deg,#059669,#10b981)',
    logoColor: 'white',
    rating: '4.8/5',
    stars: '★★★★★',
    tagline: 'Mejor para scalping y EAs',
    description: 'Top ECN broker global, favorito de scalpers y traders algorítmicos por su ejecución sub-40ms y liquidez institucional. Regulado por ASIC, CySEC y FSA Seychelles. CPA hasta $1,000 + 50% rev share.',
    regulation: 'ASIC, CySEC, FSA',
    spread: '0.0 pips',
    minDeposit: '$200',
    leverage: '1:500',
    platforms: 'MT4, MT5, cTrader',
    features: [
      'Ejecución Raw ECN',
      'Permite scalping y EAs',
      'Liquidez institucional',
      'VPS gratuito',
      'MT4, MT5 y cTrader',
      'Spread promedio 0.1 pips'
    ],
    bannerTitle: 'Top ECN · Ideal para scalping',
    bannerColor: '#10b981'
  },
  
  {
    id: 'fpmarkets',
    enabled: false,
    name: 'FP Markets',
    affiliateUrl: 'https://www.fpmarkets.com/es/',    // ← PON AQUÍ tu enlace único
    featured: false,
    
    logo: 'FP',
    logoGradient: 'linear-gradient(135deg,#7c3aed,#a855f7)',
    logoColor: 'white',
    rating: '4.6/5',
    stars: '★★★★☆',
    tagline: 'Mejor relación calidad/precio',
    description: 'Broker australiano con 18+ años. Regulado por ASIC y CySEC. Tecnología institucional a precios retail con +10.000 instrumentos: forex, acciones reales, índices, commodities y crypto. CPA hasta $800 + 43% rev share.',
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
    affiliateUrl: 'https://www.vantagemarkets.com/es/',  // ← PON AQUÍ tu enlace único
    featured: false,
    
    logo: 'VT',
    logoGradient: 'linear-gradient(135deg,#0f172a,#1e293b)',
    logoColor: 'white',
    rating: '4.5/5',
    stars: '★★★★☆',
    tagline: 'Award-winning multi-asset',
    description: 'Broker multi-activo con +15 años, premiado y regulado por ASIC, FCA y FSCA. Excelente para institucionales y retail. Su programa ofrece hasta $1,200 CPA y plataforma CellXpert para tracking avanzado y conversiones móviles.',
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
    bannerTitle: 'Award-winning · CPA hasta $1,200',
    bannerColor: '#1e293b'
  },
  
  {
    id: 'fxpro',
    enabled: false,
    name: 'FXPro',
    affiliateUrl: 'https://www.fxpro.es/',            // ← PON AQUÍ tu enlace único
    featured: false,
    
    logo: 'FX',
    logoGradient: 'linear-gradient(135deg,#1e40af,#3b82f6)',
    logoColor: 'white',
    rating: '4.5/5',
    stars: '★★★★☆',
    tagline: 'Broker veterano premiado',
    description: 'FXPro lleva +15 años operando con regulación de FCA, CySEC, FSCA y SCB. +90 premios internacionales. Ejecución NDD garantizada. Programa de afiliados con CPA hasta $1,100 y rev share del 5%.',
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
    affiliateUrl: 'https://www.avatrade.es/',         // ← PON AQUÍ tu enlace único
    featured: false,
    
    logo: 'AV',
    logoGradient: 'linear-gradient(135deg,#0891b2,#06b6d4)',
    logoColor: 'white',
    rating: '4.5/5',
    stars: '★★★★☆',
    tagline: '+70.000 partners afiliados',
    description: 'Broker irlandés con +15 años, regulado en 9 jurisdicciones. Plataforma propia AvaTradeGo intuitiva ideal para principiantes. AvaPartner ha pagado +$400M en comisiones a +70.000 afiliados con modelos CPA, RevShare e Híbrido.',
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

// Exponer para que otros scripts lo usen
if (typeof window !== 'undefined') {
  window.BROKERS_CONFIG = BROKERS_CONFIG;
  window.getEnabledBrokers = function() {
    return BROKERS_CONFIG.filter(b => b.enabled);
  };
  window.getBrokerById = function(id) {
    return BROKERS_CONFIG.find(b => b.id === id && b.enabled);
  };
}
