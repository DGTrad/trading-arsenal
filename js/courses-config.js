/* ===================================================
   ZONA TRADING PRO — Configuración de Cursos
   ===================================================
   
   ⚠️ INSTRUCCIONES PARA EDITAR LOS CURSOS ⚠️
   
   Cada curso tiene un campo "status" que puede tener 3 valores:
   
   1. "active"      → El curso está visible y se puede acceder
   2. "coming_soon" → Aparece la portada con cartel "PRÓXIMAMENTE"
                      (no se puede entrar al curso)
   3. "hidden"      → No aparece en el catálogo (totalmente oculto)
   
   EJEMPLO DE USO:
   
   - Para OCULTAR un curso completamente:
     Cambia: status: 'active'
     Por:    status: 'hidden'
   
   - Para marcar un curso como PRÓXIMAMENTE (estás trabajando en él):
     Cambia: status: 'active'
     Por:    status: 'coming_soon'
   
   - Para REACTIVAR un curso:
     Cambia: status: 'coming_soon' o 'hidden'
     Por:    status: 'active'
   
   Después de guardar, los cambios se reflejan automáticamente
   en la página de cursos (pages/cursos.html).
   =================================================== */

const COURSES_CONFIG = [
  {
    id: 'analisis-tecnico',
    status: 'active',                            // ← active / coming_soon / hidden
    icon: '📊',
    level: 'beginner',                            // beginner / intermediate / advanced
    levelLabel: 'Principiante',
    title: 'Fundamentos del Análisis Técnico',
    desc: 'Aprende a leer gráficos, identificar tendencias, soportes, resistencias y los indicadores más usados.',
    lessons: 12,
    hours: '~4',
    url: 'cursos/analisis-tecnico.html'
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
    url: 'cursos/patrones-velas.html'
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
    url: 'cursos/gestion-riesgo.html'
  },
  {
    id: 'estrategias-trading',
    status: 'active',
    icon: '⚡',
    level: 'advanced',
    levelLabel: 'Avanzado',
    title: 'Estrategias de Trading Completas',
    desc: '3 estrategias probadas con reglas claras de entrada, salida, gestión y backtesting detallado.',
    lessons: 10,
    hours: '~8',
    url: 'cursos/estrategias-trading.html'
  },
  {
    id: 'psicologia-trading',
    status: 'active',
    icon: '🧠',
    level: 'intermediate',
    levelLabel: 'Intermedio',
    title: 'Psicología del Trading',
    desc: 'Domina las emociones, los sesgos cognitivos y desarrolla la mentalidad de un trader profesional.',
    lessons: 8,
    hours: '~3',
    url: 'cursos/psicologia-trading.html'
  },
  {
    id: 'price-action',
    status: 'active',
    icon: '📊',
    level: 'intermediate',
    levelLabel: 'Intermedio',
    title: 'Price Action Puro',
    desc: 'Aprende a leer el gráfico desnudo: estructura, velas, soportes y resistencias. Sin indicadores.',
    lessons: 8,
    hours: '~3',
    url: 'cursos/price-action.html'
  },
  {
    id: 'smart-money-concepts',
    status: 'active',
    icon: '💎',
    level: 'advanced',
    levelLabel: 'Avanzado',
    title: 'Smart Money Concepts (SMC)',
    desc: 'Order blocks, liquidez, FVG y los conceptos institucionales más demandados del trading actual.',
    lessons: 8,
    hours: '~3',
    url: 'cursos/smart-money-concepts.html'
  },
  {
    id: 'trading-noticias',
    status: 'active',
    icon: '📰',
    level: 'intermediate',
    levelLabel: 'Intermedio',
    title: 'Trading de Noticias y Eventos',
    desc: 'Cómo operar (o evitar) NFP, FOMC, IPC, BCE y otros eventos de alto impacto.',
    lessons: 8,
    hours: '~3',
    url: 'cursos/trading-noticias.html'
  }
];

if (typeof window !== 'undefined') {
  window.COURSES_CONFIG = COURSES_CONFIG;
  window.getVisibleCourses = function() {
    return COURSES_CONFIG.filter(c => c.status !== 'hidden');
  };
}
