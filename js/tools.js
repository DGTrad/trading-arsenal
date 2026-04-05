/* ===================================================
   TRADING ARSENAL — Tool Renderers
   =================================================== */

// === POSITION SIZE CALCULATOR ===
function renderPositionSize(container) {
  container.innerHTML = `
    <div class="calc-grid">
      <div class="calc-field"><label>Capital de la cuenta ($)</label><input type="number" id="ps-capital" value="10000" step="100"></div>
      <div class="calc-field"><label>Riesgo por operación (%)</label><input type="number" id="ps-risk" value="1" step="0.1" min="0.1" max="10"></div>
      <div class="calc-field"><label>Precio de entrada</label><input type="number" id="ps-entry" value="1.0850" step="0.0001"></div>
      <div class="calc-field"><label>Stop Loss</label><input type="number" id="ps-sl" value="1.0800" step="0.0001"></div>
      <div class="calc-field">
        <label>Par / Instrumento</label>
        <select id="ps-pair">
          <option value="100000">Forex (lote estándar = 100K)</option>
          <option value="10">Índices (valor punto = $10)</option>
          <option value="100">XAU/USD (100 oz)</option>
          <option value="1000">WTI Crudo (1000 bbl)</option>
        </select>
      </div>
    </div>
    <button class="calc-btn" onclick="calcPositionSize()">Calcular Tamaño de Posición</button>
    <div id="ps-result"></div>
  `;
}

function calcPositionSize() {
  const capital = +document.getElementById('ps-capital').value;
  const riskPct = +document.getElementById('ps-risk').value;
  const entry = +document.getElementById('ps-entry').value;
  const sl = +document.getElementById('ps-sl').value;
  const contractSize = +document.getElementById('ps-pair').value;

  const riskAmount = capital * (riskPct / 100);
  const slDistance = Math.abs(entry - sl);
  const pipValue = slDistance * contractSize;
  const lots = pipValue > 0 ? riskAmount / pipValue : 0;

  document.getElementById('ps-result').innerHTML = `
    <div class="result-box">
      <div class="result-row"><span class="result-label">Capital en riesgo</span><span class="result-value gold">$${riskAmount.toFixed(2)}</span></div>
      <div class="result-row"><span class="result-label">Distancia al SL</span><span class="result-value">${slDistance.toFixed(5)}</span></div>
      <div class="result-row"><span class="result-label">Valor del movimiento/lote</span><span class="result-value">$${pipValue.toFixed(2)}</span></div>
      <div class="result-row"><span class="result-label">Tamaño de posición (lotes)</span><span class="result-value green">${lots.toFixed(4)}</span></div>
      <div class="result-row"><span class="result-label">Mini lotes (0.1)</span><span class="result-value">${(lots * 10).toFixed(2)}</span></div>
      <div class="result-row"><span class="result-label">Micro lotes (0.01)</span><span class="result-value">${(lots * 100).toFixed(1)}</span></div>
    </div>
  `;
}

// === R:R CALCULATOR ===
function renderRRCalc(container) {
  container.innerHTML = `
    <div class="calc-grid">
      <div class="calc-field"><label>Precio de entrada</label><input type="number" id="rr-entry" value="1.0850" step="0.0001"></div>
      <div class="calc-field"><label>Stop Loss</label><input type="number" id="rr-sl" value="1.0800" step="0.0001"></div>
      <div class="calc-field"><label>Take Profit</label><input type="number" id="rr-tp" value="1.0950" step="0.0001"></div>
      <div class="calc-field"><label>Win Rate estimado (%)</label><input type="number" id="rr-wr" value="55" step="1" min="1" max="99"></div>
    </div>
    <button class="calc-btn" onclick="calcRR()">Analizar R:R</button>
    <div id="rr-result"></div>
  `;
}

function calcRR() {
  const entry = +document.getElementById('rr-entry').value;
  const sl = +document.getElementById('rr-sl').value;
  const tp = +document.getElementById('rr-tp').value;
  const wr = +document.getElementById('rr-wr').value;

  const risk = Math.abs(entry - sl);
  const reward = Math.abs(tp - entry);
  const rr = risk > 0 ? reward / risk : 0;
  const expectancy = (wr / 100 * reward) - ((100 - wr) / 100 * risk);
  const minWR = rr > 0 ? (1 / (1 + rr)) * 100 : 0;
  const isProfit = expectancy > 0;

  document.getElementById('rr-result').innerHTML = `
    <div class="result-box">
      <div class="result-row"><span class="result-label">Riesgo (distancia SL)</span><span class="result-value red">${risk.toFixed(5)}</span></div>
      <div class="result-row"><span class="result-label">Beneficio (distancia TP)</span><span class="result-value green">${reward.toFixed(5)}</span></div>
      <div class="result-row"><span class="result-label">Ratio R:R</span><span class="result-value gold">1:${rr.toFixed(2)}</span></div>
      <div class="result-row"><span class="result-label">Win Rate mínimo rentable</span><span class="result-value">${minWR.toFixed(1)}%</span></div>
      <div class="result-row"><span class="result-label">Expectancia</span><span class="result-value ${isProfit ? 'green' : 'red'}">${isProfit ? '+' : ''}${expectancy.toFixed(5)}</span></div>
      <div class="result-row"><span class="result-label">Veredicto</span><span class="result-value ${rr >= 2 ? 'green' : rr >= 1 ? 'gold' : 'red'}">${rr >= 2 ? '✅ Excelente' : rr >= 1.5 ? '👍 Bueno' : rr >= 1 ? '⚠️ Aceptable' : '❌ Evitar'}</span></div>
    </div>
  `;
}

// === PIP CALCULATOR ===
function renderPipCalc(container) {
  container.innerHTML = `
    <div class="calc-grid">
      <div class="calc-field">
        <label>Par de divisas</label>
        <select id="pip-pair">
          <option value="EUR/USD" data-pipfactor="0.0001" data-contract="100000">EUR/USD</option>
          <option value="GBP/USD" data-pipfactor="0.0001" data-contract="100000">GBP/USD</option>
          <option value="USD/JPY" data-pipfactor="0.01" data-contract="100000">USD/JPY</option>
          <option value="USD/CHF" data-pipfactor="0.0001" data-contract="100000">USD/CHF</option>
          <option value="AUD/USD" data-pipfactor="0.0001" data-contract="100000">AUD/USD</option>
          <option value="XAU/USD" data-pipfactor="0.01" data-contract="100">XAU/USD</option>
        </select>
      </div>
      <div class="calc-field"><label>Tamaño del lote</label><input type="number" id="pip-lots" value="1" step="0.01" min="0.01"></div>
      <div class="calc-field"><label>Número de pips</label><input type="number" id="pip-pips" value="10" step="1"></div>
    </div>
    <button class="calc-btn" onclick="calcPips()">Calcular Valor</button>
    <div id="pip-result"></div>
  `;
}

function calcPips() {
  const select = document.getElementById('pip-pair');
  const pair = select.value;
  const opt = select.selectedOptions[0];
  const pipFactor = +opt.dataset.pipfactor;
  const contractSize = +opt.dataset.contract;
  const lots = +document.getElementById('pip-lots').value;
  const pips = +document.getElementById('pip-pips').value;

  const pipValue1Lot = pipFactor * contractSize;
  const totalValue = pipValue1Lot * lots * pips;

  document.getElementById('pip-result').innerHTML = `
    <div class="result-box">
      <div class="result-row"><span class="result-label">Par</span><span class="result-value gold">${pair}</span></div>
      <div class="result-row"><span class="result-label">Valor de 1 pip (1 lote)</span><span class="result-value">$${pipValue1Lot.toFixed(2)}</span></div>
      <div class="result-row"><span class="result-label">Valor de 1 pip (${lots} lotes)</span><span class="result-value">$${(pipValue1Lot * lots).toFixed(2)}</span></div>
      <div class="result-row"><span class="result-label">Valor total (${pips} pips)</span><span class="result-value green">$${totalValue.toFixed(2)}</span></div>
    </div>
  `;
}

// === CANDLESTICK PATTERNS ===
function renderCandlePatterns(container) {
  const patterns = [
    { name: 'Doji', signal: 'Neutral / Reversión', type: 'neutral',
      desc: 'Cuerpo muy pequeño con mechas largas. Indica indecisión del mercado. En zona de soporte/resistencia puede señalar reversión. Siempre confirmar con la vela siguiente.',
      candles: [{ t: 'doji', wu: 25, wd: 25, b: 2 }] },
    { name: 'Hammer (Martillo)', signal: 'Alcista', type: 'bullish',
      desc: 'Cuerpo pequeño en la parte superior con mecha inferior larga (≥2x cuerpo). Aparece en tendencias bajistas. Señal de posible reversión alcista. Más fiable en soportes.',
      candles: [{ t: 'bull', wu: 3, wd: 30, b: 12 }] },
    { name: 'Shooting Star', signal: 'Bajista', type: 'bearish',
      desc: 'Cuerpo pequeño en la parte inferior con mecha superior larga (≥2x cuerpo). Aparece en tendencias alcistas. Señal de reversión bajista. Más fiable en resistencias.',
      candles: [{ t: 'bear', wu: 30, wd: 3, b: 12 }] },
    { name: 'Engulfing Alcista', signal: 'Alcista', type: 'bullish',
      desc: 'Vela verde grande que envuelve completamente el cuerpo de la vela roja anterior. Fuerte señal de reversión alcista, especialmente en zonas de soporte con volumen.',
      candles: [{ t: 'bear', wu: 5, wd: 5, b: 18 }, { t: 'bull', wu: 3, wd: 3, b: 35 }] },
    { name: 'Engulfing Bajista', signal: 'Bajista', type: 'bearish',
      desc: 'Vela roja grande que envuelve completamente el cuerpo de la vela verde anterior. Fuerte señal de reversión bajista en zonas de resistencia.',
      candles: [{ t: 'bull', wu: 5, wd: 5, b: 18 }, { t: 'bear', wu: 3, wd: 3, b: 35 }] },
    { name: 'Morning Star', signal: 'Alcista', type: 'bullish',
      desc: 'Patrón de 3 velas: bajista grande → cuerpo pequeño (gap) → alcista grande. Señal potente de reversión alcista. El gap en la segunda vela aumenta la fiabilidad.',
      candles: [{ t: 'bear', wu: 3, wd: 3, b: 28 }, { t: 'doji', wu: 8, wd: 8, b: 3 }, { t: 'bull', wu: 3, wd: 3, b: 28 }] },
    { name: 'Evening Star', signal: 'Bajista', type: 'bearish',
      desc: 'Patrón de 3 velas: alcista grande → cuerpo pequeño (gap) → bajista grande. Señal potente de reversión bajista. Ideal en zonas de resistencia.',
      candles: [{ t: 'bull', wu: 3, wd: 3, b: 28 }, { t: 'doji', wu: 8, wd: 8, b: 3 }, { t: 'bear', wu: 3, wd: 3, b: 28 }] },
    { name: 'Three White Soldiers', signal: 'Alcista', type: 'bullish',
      desc: 'Tres velas alcistas consecutivas con cierres progresivamente más altos. Cada apertura dentro del cuerpo anterior. Fuerte continuación/reversión alcista.',
      candles: [{ t: 'bull', wu: 2, wd: 2, b: 20 }, { t: 'bull', wu: 2, wd: 2, b: 24 }, { t: 'bull', wu: 2, wd: 2, b: 28 }] },
    { name: 'Three Black Crows', signal: 'Bajista', type: 'bearish',
      desc: 'Tres velas bajistas consecutivas con cierres progresivamente más bajos. Fuerte señal de continuación/reversión bajista.',
      candles: [{ t: 'bear', wu: 2, wd: 2, b: 28 }, { t: 'bear', wu: 2, wd: 2, b: 24 }, { t: 'bear', wu: 2, wd: 2, b: 20 }] },
  ];

  let html = '<div class="patterns-grid">';
  patterns.forEach(p => {
    const signalClass = p.type === 'bullish' ? 'signal-bullish' : p.type === 'bearish' ? 'signal-bearish' : 'signal-neutral';
    let candlesHtml = '';
    p.candles.forEach(c => {
      const cls = c.t === 'bull' ? 'candle-bull' : c.t === 'bear' ? 'candle-bear' : 'candle-doji';
      candlesHtml += `<div class="candle ${cls}">
        <div class="candle-wick" style="height:${c.wu}px"></div>
        <div class="candle-body" style="height:${c.b}px"></div>
        <div class="candle-wick" style="height:${c.wd}px"></div>
      </div>`;
    });
    html += `
      <div class="pattern-card" onclick="this.classList.toggle('expanded')">
        <div class="pattern-visual">${candlesHtml}</div>
        <div class="pattern-name">${p.name}</div>
        <div class="pattern-signal ${signalClass}">● ${p.signal}</div>
        <div class="pattern-detail">${p.desc}</div>
      </div>`;
  });
  html += '</div>';
  container.innerHTML = html;
}

// === P&L CALCULATOR ===
function renderPLCalc(container) {
  container.innerHTML = `
    <div class="calc-grid">
      <div class="calc-field">
        <label>Dirección</label>
        <select id="pl-dir">
          <option value="buy">Compra (Long)</option>
          <option value="sell">Venta (Short)</option>
        </select>
      </div>
      <div class="calc-field"><label>Tamaño del lote</label><input type="number" id="pl-lots" value="1" step="0.01"></div>
      <div class="calc-field"><label>Precio de entrada</label><input type="number" id="pl-entry" value="1.0850" step="0.0001"></div>
      <div class="calc-field"><label>Precio de salida</label><input type="number" id="pl-exit" value="1.0920" step="0.0001"></div>
      <div class="calc-field"><label>Comisión por lote ($)</label><input type="number" id="pl-comm" value="7" step="0.5"></div>
      <div class="calc-field">
        <label>Instrumento</label>
        <select id="pl-inst">
          <option value="100000">Forex estándar (100K)</option>
          <option value="100">XAU/USD (100 oz)</option>
          <option value="1000">WTI (1000 bbl)</option>
          <option value="1">Índice ($1/punto)</option>
        </select>
      </div>
    </div>
    <button class="calc-btn" onclick="calcPL()">Calcular P&L</button>
    <div id="pl-result"></div>
  `;
}

function calcPL() {
  const dir = document.getElementById('pl-dir').value;
  const lots = +document.getElementById('pl-lots').value;
  const entry = +document.getElementById('pl-entry').value;
  const exit = +document.getElementById('pl-exit').value;
  const comm = +document.getElementById('pl-comm').value;
  const contractSize = +document.getElementById('pl-inst').value;

  const diff = dir === 'buy' ? exit - entry : entry - exit;
  const grossPL = diff * contractSize * lots;
  const totalComm = comm * lots;
  const netPL = grossPL - totalComm;
  const isProfit = netPL > 0;

  document.getElementById('pl-result').innerHTML = `
    <div class="result-box">
      <div class="result-row"><span class="result-label">Movimiento de precio</span><span class="result-value">${diff > 0 ? '+' : ''}${diff.toFixed(5)}</span></div>
      <div class="result-row"><span class="result-label">P&L bruto</span><span class="result-value ${grossPL >= 0 ? 'green' : 'red'}">$${grossPL >= 0 ? '+' : ''}${grossPL.toFixed(2)}</span></div>
      <div class="result-row"><span class="result-label">Comisiones</span><span class="result-value red">-$${totalComm.toFixed(2)}</span></div>
      <div class="result-row"><span class="result-label">P&L neto</span><span class="result-value ${isProfit ? 'green' : 'red'}" style="font-size:20px">$${netPL >= 0 ? '+' : ''}${netPL.toFixed(2)}</span></div>
    </div>
  `;
}

// === COMPOUND INTEREST SIMULATOR ===
function renderCompound(container) {
  container.innerHTML = `
    <div class="calc-grid">
      <div class="calc-field"><label>Capital inicial ($)</label><input type="number" id="ci-capital" value="10000" step="500"></div>
      <div class="calc-field"><label>Ganancia mensual (%)</label><input type="number" id="ci-rate" value="5" step="0.5" min="0.1"></div>
      <div class="calc-field"><label>Meses</label><input type="number" id="ci-months" value="12" step="1" min="1" max="120"></div>
      <div class="calc-field"><label>Aporte mensual ($)</label><input type="number" id="ci-add" value="0" step="100"></div>
    </div>
    <button class="calc-btn" onclick="calcCompound()">Simular Crecimiento</button>
    <div id="ci-result"></div>
  `;
}

function calcCompound() {
  const capital = +document.getElementById('ci-capital').value;
  const rate = +document.getElementById('ci-rate').value / 100;
  const months = +document.getElementById('ci-months').value;
  const add = +document.getElementById('ci-add').value;

  let balance = capital;
  let totalAdded = capital;
  const fmt = n => n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  let tableHtml = `<div style="max-height:300px;overflow-y:auto;margin-top:16px;">
    <table style="width:100%;border-collapse:collapse;">
    <tr style="position:sticky;top:0;background:var(--bg-3);">
      <th style="text-align:left;padding:8px;color:var(--text-3);font-size:11px;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid var(--border-1)">Mes</th>
      <th style="text-align:right;padding:8px;color:var(--text-3);font-size:11px;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid var(--border-1)">Balance</th>
      <th style="text-align:right;padding:8px;color:var(--text-3);font-size:11px;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid var(--border-1)">Ganancia</th>
    </tr>`;

  for (let m = 1; m <= months; m++) {
    const gain = balance * rate;
    balance += gain + add;
    totalAdded += add;
    tableHtml += `<tr style="border-bottom:1px solid rgba(255,255,255,0.03);">
      <td style="padding:8px;font-family:var(--font-mono);font-size:13px;">Mes ${m}</td>
      <td style="padding:8px;text-align:right;font-family:var(--font-mono);font-size:13px;color:var(--green);">$${fmt(balance)}</td>
      <td style="padding:8px;text-align:right;font-family:var(--font-mono);font-size:13px;color:var(--gold);">+$${fmt(gain)}</td>
    </tr>`;
  }
  tableHtml += '</table></div>';

  const totalProfit = balance - totalAdded;
  const roi = ((balance - capital) / capital * 100);

  document.getElementById('ci-result').innerHTML = `
    <div class="result-box">
      <div class="result-row"><span class="result-label">Balance final</span><span class="result-value green" style="font-size:20px">$${fmt(balance)}</span></div>
      <div class="result-row"><span class="result-label">Capital invertido total</span><span class="result-value">$${fmt(totalAdded)}</span></div>
      <div class="result-row"><span class="result-label">Beneficio neto</span><span class="result-value green">+$${fmt(totalProfit)}</span></div>
      <div class="result-row"><span class="result-label">ROI total</span><span class="result-value gold">${roi.toFixed(1)}%</span></div>
      <div class="result-row"><span class="result-label">Multiplicador</span><span class="result-value gold">${(balance / capital).toFixed(2)}x</span></div>
    </div>
    ${tableHtml}
  `;
}
