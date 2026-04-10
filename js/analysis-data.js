/* ===================================================
   ANÁLISIS SEMANAL — Datos centralizados
   Edita SOLO este archivo cada domingo
   =================================================== */

const ANALYSIS_DATA = {
  weekRange: "14 — 18 Abril 2026",
  weekStatus: "Análisis activo",
  
  macro: {
    dxy: { value: "99.81", change: "-0.21%", trend: "down", note: "Cae tras rumores de alto el fuego Irán-EEUU" },
    sentiment: { value: "Risk-Off", trend: "neutral", note: "Estrecho de Ormuz cerrado. Tensión elevada." },
    us10y: { value: "4.34%", change: "+4bps", trend: "up", note: "NFP 178K muy fuerte. Fed sin recortes en 2026." },
    wti: { value: "$113.72", change: "+1.95%", trend: "up", note: "Crisis Ormuz impulsa crudo a máximos de 2 años" }
  },
  
  geopolitical: "El conflicto Irán-EEUU y el cierre del Estrecho de Ormuz dominan todos los mercados esta semana. Reduce tamaño de posición y gestiona riesgo estrictamente.",
  
  instruments: [
    {
      id: "xauusd", icon: "🥇", iconBg: "rgba(212,168,67,0.1)", iconBorder: "rgba(212,168,67,0.2)",
      name: "Oro", pair: "XAU/USD", price: "$4,674", bias: "bull", biasLabel: "Alcista",
      analysis: "Oro mantiene estructura alcista de largo plazo. Conflicto Irán-EEUU mantiene demanda de refugio. EMA 50 D1 actúa como soporte dinámico.",
      resistances: [{label: "R3 (fuerte)", value: "4,970"}, {label: "R2", value: "4,800"}, {label: "R1", value: "4,700"}],
      supports: [{label: "S1", value: "4,580"}, {label: "S2", value: "4,520"}, {label: "S3 (fuerte)", value: "4,310"}],
      bullScenario: "Retroceso a 4,580-4,520 con rebote. Hammer en H4 formado. Objetivo 4,800-4,970 si se mantiene sobre 4,520.",
      bearScenario: "Pérdida de 4,520 con cierre por debajo confirmaría corrección hacia 4,310.",
      setup: { type: "buy", entry: "4,580", sl: "4,510", tp: "4,800", rr: "1:3.1" }
    },
    {
      id: "eurusd", icon: "💶", iconBg: "rgba(52,152,219,0.1)", iconBorder: "rgba(52,152,219,0.2)",
      name: "Euro/Dólar", pair: "EUR/USD", price: "1.1483", bias: "bull", biasLabel: "Alcista",
      analysis: "EUR/USD se beneficia del debilitamiento del dólar. Sesgo alcista mientras se mantenga sobre 1.1300. IPC EEUU clave esta semana.",
      resistances: [{label: "R2", value: "1.1800"}, {label: "R1", value: "1.1550"}],
      supports: [{label: "S1", value: "1.1400"}, {label: "S2", value: "1.1300"}],
      bullScenario: "Mientras se mantenga sobre 1.1400, sesgo alcista hacia 1.1550-1.1800.",
      bearScenario: "Pérdida de 1.1300 abriría camino a 1.1200 o más abajo.",
      setup: { type: "buy", entry: "1.1420", sl: "1.1350", tp: "1.1600", rr: "1:2.6" }
    },
    {
      id: "sp500", icon: "📈", iconBg: "rgba(46,204,113,0.1)", iconBorder: "rgba(46,204,113,0.2)",
      name: "S&P 500", pair: "US500", price: "6,529", bias: "bull", biasLabel: "Alcista",
      analysis: "S&P 500 rebotó +3.36% la semana pasada. NFP fuerte y rumores de resolución del conflicto apoyaron la recuperación.",
      resistances: [{label: "R2", value: "6,700"}, {label: "R1", value: "6,583"}],
      supports: [{label: "S1", value: "6,400"}, {label: "S2 (EMA 50)", value: "6,250"}],
      bullScenario: "Mientras mantenga 6,400, objetivo 6,700.",
      bearScenario: "Pérdida de 6,400 abriría corrección a EMA 50 (6,250).",
      setup: { type: "buy", entry: "6,400", sl: "6,240", tp: "6,700", rr: "1:1.9" }
    }
  ]
};

if (typeof window !== 'undefined') window.ANALYSIS_DATA = ANALYSIS_DATA;
