/* ===================================================
   ZONA TRADING PRO — Configuración de Cursos
   ===================================================
   
   STATUS:
     'active'      → Visible y accesible
     'coming_soon' → Portada con "PROXIMAMENTE"
     'hidden'      → No aparece en el catálogo
   
   PREMIUM:
     premium: true  → Curso de pago (muestra precio)
     premium: false  → Curso gratuito (o no poner la línea)
   
   PRECIOS POR NIVEL:
     Principiante = 29€
     Intermedio = 49€
     Avanzado = 99€
   =================================================== */

const COURSES_CONFIG = [
  {
    id: 'analisis-tecnico',
    status: 'active',
    icon: '📊',
    level: 'beginner',
    levelLabel: 'Principiante',
    title: 'Fundamentos del Análisis Técnico',
    desc: 'Aprende a leer gráficos, identificar tendencias, soportes, resistencias y los indicadores más usados.',
    lessons: 12,
    hours: '~4',
    url: 'cursos/analisis-tecnico.html',
    premium: false
  },
  {
    id: 'patrones-velas',
    status: 'active',
    icon: '🕯️',
    level: 'intermediate',
    levelLabel: 'Intermedio',
    title: 'Patrones de Velas Japonesas',
    desc: 'Domina los 20 patrones más rentables. Ejercicios prácticos con gráficos reales y quiz interactivo.',
    lessons: 18,
    hours: '~6',
    url: 'cursos/patrones-velas.html',
    premium: false
  },
  {
    id: 'gestion-riesgo',
    status: 'active',
    icon: '🛡️',
    level: 'intermediate',
    levelLabel: 'Intermedio',
    title: 'Gestión de Riesgo Profesional',
    desc: 'Position sizing, drawdown control, correlaciones y cómo sobrevivir a largo plazo en los mercados.',
    lessons: 10,
    hours: '~3',
    url: 'cursos/gestion-riesgo.html',
    premium: false
  },
  {
    id: 'estrategias-trading',
    status: 'active',
    icon: '⚡',
    level: 'advanced',
    levelLabel: 'Avanzado',
    title: 'Estrategias de Trading Completas',
    desc: '3 estrategias probadas con reglas claras de entrada, salida, gestión y backtesting detallado.',
    lessons: 20,
    hours: '~12',
    url: 'cursos/estrategias-trading.html',
    premium: true,
    price: '99€'
  },
  {
    id: 'psicologia-trading',
    status: 'hidden',
    icon: '🧠',
    level: 'intermediate',
    levelLabel: 'Intermedio',
    title: 'Psicología del Trading',
    desc: 'Domina las emociones, los sesgos cognitivos y desarrolla la mentalidad de un trader profesional.',
    lessons: 8,
    hours: '~3',
    url: 'cursos/psicologia-trading.html',
    premium: false
  },
  {
    id: 'price-action',
    status: 'hidden',
    icon: '📊',
    level: 'intermediate',
    levelLabel: 'Intermedio',
    title: 'Price Action Puro',
    desc: 'Aprende a leer el gráfico desnudo: estructura, velas, soportes y resistencias. Sin indicadores.',
    lessons: 8,
    hours: '~3',
    url: 'cursos/price-action.html',
    premium: false
  },
  {
    id: 'smart-money-concepts',
    status: 'hidden',
    icon: '💎',
    level: 'advanced',
    levelLabel: 'Avanzado',
    title: 'Smart Money Concepts (SMC)',
    desc: 'Order blocks, liquidez, FVG y los conceptos institucionales más demandados del trading actual.',
    lessons: 8,
    hours: '~3',
    url: 'cursos/smart-money-concepts.html',
    premium: false
  },
  {
    id: 'trading-noticias',
    status: 'hidden',
    icon: '📰',
    level: 'intermediate',
    levelLabel: 'Intermedio',
    title: 'Trading de Noticias y Eventos',
    desc: 'Cómo operar (o evitar) NFP, FOMC, IPC, BCE y otros eventos de alto impacto.',
    lessons: 8,
    hours: '~3',
    url: 'cursos/trading-noticias.html',
    premium: false
  }
];

if (typeof window !== 'undefined') {
  window.COURSES_CONFIG = COURSES_CONFIG;
  window.getVisibleCourses = function() {
    return COURSES_CONFIG.filter(c => c.status !== 'hidden');
  };
}
