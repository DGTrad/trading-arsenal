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

// === FIBONACCI CALCULATOR ===
function renderFibonacci(container) {
  container.innerHTML = `
    <div class="calc-grid">
      <div class="calc-field">
        <label>Tipo de movimiento</label>
        <select id="fib-dir">
          <option value="up">Alcista (retroceso en pullback)</option>
          <option value="down">Bajista (retroceso en rebote)</option>
        </select>
      </div>
      <div class="calc-field"><label>Precio Swing Low</label><input type="number" id="fib-low" value="1.0700" step="0.0001"></div>
      <div class="calc-field"><label>Precio Swing High</label><input type="number" id="fib-high" value="1.0900" step="0.0001"></div>
    </div>
    <button class="calc-btn" onclick="calcFibonacci()">Calcular Niveles Fibonacci</button>
    <div id="fib-result"></div>
  `;
}

function calcFibonacci() {
  const dir = document.getElementById('fib-dir').value;
  const low = +document.getElementById('fib-low').value;
  const high = +document.getElementById('fib-high').value;
  const diff = high - low;
  const levels = [0, 0.236, 0.382, 0.5, 0.618, 0.786, 1, 1.272, 1.618];
  const names = ['0%', '23.6%', '38.2%', '50%', '61.8%', '78.6%', '100%', '127.2% (ext)', '161.8% (ext)'];
  const zones = ['', '', 'Zona de entrada común', 'Equilibrio', 'Zona dorada (más fiable)', '', '', 'TP extensión 1', 'TP extensión 2'];

  let rows = '';
  levels.forEach((l, i) => {
    const price = dir === 'up' ? high - diff * l : low + diff * l;
    const isGolden = l === 0.618 || l === 0.5 || l === 0.382;
    const isExt = l > 1;
    const cls = isGolden ? 'gold' : isExt ? 'green' : '';
    rows += `<div class="result-row">
      <span class="result-label">${names[i]} ${zones[i] ? '<span style="font-size:10px;color:var(--text-3);margin-left:6px">' + zones[i] + '</span>' : ''}</span>
      <span class="result-value ${cls}">${price.toFixed(5)}</span>
    </div>`;
  });

  document.getElementById('fib-result').innerHTML = `
    <div class="result-box">
      <div class="result-row"><span class="result-label">Rango del movimiento</span><span class="result-value">${diff.toFixed(5)} (${(diff / low * 100).toFixed(2)}%)</span></div>
      ${rows}
    </div>
    <div style="margin-top:16px;padding:16px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:8px;">
      <p style="font-size:13px;color:var(--text-2);line-height:1.7;">
        <strong style="color:var(--gold)">Cómo usar:</strong> Los niveles 38.2%, 50% y 61.8% son las zonas de retroceso más fiables para buscar entradas. 
        Los niveles 127.2% y 161.8% sirven como objetivos de Take Profit en extensiones.
        La <strong>zona dorada</strong> (61.8%) es estadísticamente la más respetada por el precio.
      </p>
    </div>
  `;
}

// === MARGIN & LEVERAGE CALCULATOR ===
function renderMarginCalc(container) {
  container.innerHTML = `
    <div class="calc-grid">
      <div class="calc-field"><label>Precio del instrumento</label><input type="number" id="mg-price" value="1.0850" step="0.0001"></div>
      <div class="calc-field"><label>Tamaño del lote</label><input type="number" id="mg-lots" value="1" step="0.01" min="0.01"></div>
      <div class="calc-field">
        <label>Apalancamiento</label>
        <select id="mg-leverage">
          <option value="30">1:30 (EU Retail)</option>
          <option value="50">1:50</option>
          <option value="100" selected>1:100</option>
          <option value="200">1:200</option>
          <option value="500">1:500</option>
        </select>
      </div>
      <div class="calc-field">
        <label>Tamaño contrato</label>
        <select id="mg-contract">
          <option value="100000">Forex (100K)</option>
          <option value="100">XAU/USD (100 oz)</option>
          <option value="1000">WTI (1000 bbl)</option>
          <option value="1">Índice ($1/pto)</option>
        </select>
      </div>
      <div class="calc-field"><label>Capital de la cuenta ($)</label><input type="number" id="mg-capital" value="10000" step="100"></div>
    </div>
    <button class="calc-btn" onclick="calcMargin()">Calcular Margen</button>
    <div id="mg-result"></div>
  `;
}

function calcMargin() {
  const price = +document.getElementById('mg-price').value;
  const lots = +document.getElementById('mg-lots').value;
  const leverage = +document.getElementById('mg-leverage').value;
  const contract = +document.getElementById('mg-contract').value;
  const capital = +document.getElementById('mg-capital').value;

  const positionValue = price * contract * lots;
  const marginRequired = positionValue / leverage;
  const freeMargin = capital - marginRequired;
  const marginLevel = capital / marginRequired * 100;
  const marginUsedPct = marginRequired / capital * 100;

  const fmt = n => n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const isSafe = marginLevel > 200;
  const isWarning = marginLevel > 100 && marginLevel <= 200;

  document.getElementById('mg-result').innerHTML = `
    <div class="result-box">
      <div class="result-row"><span class="result-label">Valor de la posición</span><span class="result-value">$${fmt(positionValue)}</span></div>
      <div class="result-row"><span class="result-label">Margen requerido</span><span class="result-value gold">$${fmt(marginRequired)}</span></div>
      <div class="result-row"><span class="result-label">Margen libre</span><span class="result-value ${freeMargin > 0 ? 'green' : 'red'}">$${fmt(freeMargin)}</span></div>
      <div class="result-row"><span class="result-label">Margen utilizado</span><span class="result-value">${marginUsedPct.toFixed(1)}%</span></div>
      <div class="result-row"><span class="result-label">Nivel de margen</span><span class="result-value ${isSafe ? 'green' : isWarning ? 'gold' : 'red'}">${marginLevel.toFixed(0)}%</span></div>
      <div class="result-row"><span class="result-label">Estado</span><span class="result-value ${isSafe ? 'green' : isWarning ? 'gold' : 'red'}">${isSafe ? '✅ Seguro' : isWarning ? '⚠️ Precaución' : '❌ Riesgo de Margin Call'}</span></div>
    </div>
    <div style="margin-top:16px;padding:16px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:8px;">
      <p style="font-size:13px;color:var(--text-2);line-height:1.7;">
        <strong style="color:var(--gold)">Referencia:</strong> Nivel de margen >200% = seguro. Entre 100-200% = precaución. 
        <100% = margin call inminente. La mayoría de brokers ejecutan stop-out entre el 20-50%.
      </p>
    </div>
  `;
}

// === DRAWDOWN CALCULATOR ===
function renderDrawdown(container) {
  container.innerHTML = `
    <div class="calc-grid">
      <div class="calc-field"><label>Capital inicial ($)</label><input type="number" id="dd-capital" value="10000" step="100"></div>
      <div class="calc-field"><label>Riesgo por operación (%)</label><input type="number" id="dd-risk" value="2" step="0.5" min="0.1" max="20"></div>
      <div class="calc-field"><label>Racha de pérdidas consecutivas</label><input type="number" id="dd-streak" value="10" step="1" min="1" max="50"></div>
    </div>
    <button class="calc-btn" onclick="calcDrawdown()">Simular Drawdown</button>
    <div id="dd-result"></div>
  `;
}

function calcDrawdown() {
  const capital = +document.getElementById('dd-capital').value;
  const riskPct = +document.getElementById('dd-risk').value;
  const streak = +document.getElementById('dd-streak').value;
  const fmt = n => n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  let balance = capital;
  let tableHtml = '<div style="max-height:280px;overflow-y:auto;margin-top:16px;"><table style="width:100%;border-collapse:collapse;">';
  tableHtml += '<tr style="position:sticky;top:0;background:var(--bg-3);"><th style="text-align:left;padding:8px;color:var(--text-3);font-size:11px;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid var(--border-1)">Pérdida #</th><th style="text-align:right;padding:8px;color:var(--text-3);font-size:11px;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid var(--border-1)">Pérdida $</th><th style="text-align:right;padding:8px;color:var(--text-3);font-size:11px;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid var(--border-1)">Balance</th><th style="text-align:right;padding:8px;color:var(--text-3);font-size:11px;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid var(--border-1)">DD %</th></tr>';

  for (let i = 1; i <= streak; i++) {
    const loss = balance * (riskPct / 100);
    balance -= loss;
    const dd = ((capital - balance) / capital * 100);
    tableHtml += `<tr style="border-bottom:1px solid rgba(255,255,255,0.03);">
      <td style="padding:8px;font-family:var(--font-mono);font-size:13px;">#${i}</td>
      <td style="padding:8px;text-align:right;font-family:var(--font-mono);font-size:13px;color:var(--red);">-$${fmt(loss)}</td>
      <td style="padding:8px;text-align:right;font-family:var(--font-mono);font-size:13px;">$${fmt(balance)}</td>
      <td style="padding:8px;text-align:right;font-family:var(--font-mono);font-size:13px;color:${dd > 20 ? 'var(--red)' : dd > 10 ? 'var(--gold)' : 'var(--text-2)'};">${dd.toFixed(1)}%</td>
    </tr>`;
  }
  tableHtml += '</table></div>';

  const totalDD = ((capital - balance) / capital * 100);
  const recoveryNeeded = ((capital - balance) / balance * 100);

  document.getElementById('dd-result').innerHTML = `
    <div class="result-box">
      <div class="result-row"><span class="result-label">Capital final</span><span class="result-value red">$${fmt(balance)}</span></div>
      <div class="result-row"><span class="result-label">Pérdida total</span><span class="result-value red">-$${fmt(capital - balance)}</span></div>
      <div class="result-row"><span class="result-label">Drawdown total</span><span class="result-value red">${totalDD.toFixed(1)}%</span></div>
      <div class="result-row"><span class="result-label">Ganancia necesaria para recuperar</span><span class="result-value gold">${recoveryNeeded.toFixed(1)}%</span></div>
    </div>
    ${tableHtml}
    <div style="margin-top:16px;padding:16px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:8px;">
      <p style="font-size:13px;color:var(--text-2);line-height:1.7;">
        <strong style="color:var(--red)">Lección clave:</strong> Con ${riskPct}% de riesgo y ${streak} pérdidas seguidas, 
        pierdes ${totalDD.toFixed(1)}% pero necesitas ganar <strong>${recoveryNeeded.toFixed(1)}%</strong> para recuperarte. 
        ${recoveryNeeded > 50 ? 'Esto es extremadamente difícil. Considera reducir tu riesgo.' : recoveryNeeded > 25 ? 'Recuperable pero costoso. Mantén disciplina.' : 'Drawdown manejable con buena gestión.'}
      </p>
    </div>
  `;
}

// === SESSIONS & VOLATILITY CLOCK ===
function renderSessionsClock(container) {
  const now = new Date();
  const utcH = now.getUTCHours();
  const utcM = now.getUTCMinutes();

  const sessions = [
    { name: 'Sídney', open: 22, close: 7, emoji: '🇦🇺', color: '#3498db', pairs: 'AUD/USD, NZD/USD, AUD/JPY' },
    { name: 'Tokio', open: 0, close: 9, emoji: '🇯🇵', color: '#e74c3c', pairs: 'USD/JPY, EUR/JPY, GBP/JPY' },
    { name: 'Londres', open: 8, close: 17, emoji: '🇬🇧', color: '#2ecc71', pairs: 'EUR/USD, GBP/USD, EUR/GBP' },
    { name: 'Nueva York', open: 13, close: 22, emoji: '🇺🇸', color: '#e67e22', pairs: 'EUR/USD, USD/CAD, XAU/USD' }
  ];

  function isOpen(s) {
    if (s.open < s.close) return utcH >= s.open && utcH < s.close;
    return utcH >= s.open || utcH < s.close;
  }

  const overlaps = [];
  if (utcH >= 0 && utcH < 7) overlaps.push('Sídney + Tokio');
  if (utcH >= 8 && utcH < 9) overlaps.push('Tokio + Londres');
  if (utcH >= 13 && utcH < 17) overlaps.push('Londres + Nueva York');

  let sessionsHtml = sessions.map(s => {
    const open = isOpen(s);
    return `<div style="background:var(--bg-2);border:1px solid ${open ? s.color : 'var(--border-1)'};border-radius:10px;padding:18px;${open ? 'box-shadow:0 0 20px ' + s.color + '22;' : 'opacity:0.6;'}">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
        <span style="font-size:24px">${s.emoji}</span>
        <div>
          <div style="font-size:16px;font-weight:700;color:${open ? s.color : 'var(--text-3)'}">${s.name}</div>
          <div style="font-size:11px;color:var(--text-3)">${s.open}:00 - ${s.close}:00 UTC</div>
        </div>
        <div style="margin-left:auto;padding:4px 12px;border-radius:20px;font-size:11px;font-weight:700;background:${open ? s.color + '22' : 'var(--bg-3)'};color:${open ? s.color : 'var(--text-4)'}">
          ${open ? '● ABIERTA' : '○ CERRADA'}
        </div>
      </div>
      <div style="font-size:12px;color:var(--text-3)">Pares principales: <span style="color:var(--text-2)">${s.pairs}</span></div>
    </div>`;
  }).join('');

  container.innerHTML = `
    <div style="text-align:center;margin-bottom:24px;">
      <div style="font-family:var(--font-mono);font-size:36px;font-weight:700;color:var(--gold)">${String(utcH).padStart(2,'0')}:${String(utcM).padStart(2,'0')} UTC</div>
      <div style="font-size:13px;color:var(--text-3);margin-top:4px">Hora actual del mercado</div>
      ${overlaps.length ? '<div style="margin-top:8px;padding:6px 14px;background:rgba(46,204,113,0.1);border:1px solid rgba(46,204,113,0.2);border-radius:20px;display:inline-block;font-size:12px;color:var(--green);font-weight:600">⚡ Solapamiento: ' + overlaps.join(', ') + ' — Mayor volatilidad</div>' : ''}
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      ${sessionsHtml}
    </div>
    <div style="margin-top:20px;padding:16px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:8px;">
      <p style="font-size:13px;color:var(--text-2);line-height:1.7;">
        <strong style="color:var(--gold)">Horarios clave:</strong> La mayor volatilidad ocurre durante los solapamientos. 
        <strong>Londres + NY (13:00-17:00 UTC)</strong> es la ventana con más volumen y mejores oportunidades.
        Evita operar cuando solo Sídney está abierta (baja liquidez).
      </p>
    </div>
  `;
}

// === CANDLESTICK QUIZ ===
function renderCandleQuiz(container) {
  const quizPatterns = [
    { candles: [{t:'bull',wu:3,wd:30,b:12}], name:'Hammer (Martillo)', options:['Shooting Star','Hammer','Doji','Hanging Man'], correct:1 },
    { candles: [{t:'bear',wu:30,wd:3,b:12}], name:'Shooting Star', options:['Hammer','Engulfing','Shooting Star','Morning Star'], correct:2 },
    { candles: [{t:'doji',wu:25,wd:25,b:2}], name:'Doji', options:['Spinning Top','Doji','Marubozu','Hammer'], correct:1 },
    { candles: [{t:'bear',wu:5,wd:5,b:18},{t:'bull',wu:3,wd:3,b:35}], name:'Engulfing Alcista', options:['Harami','Engulfing Alcista','Morning Star','Piercing Line'], correct:1 },
    { candles: [{t:'bull',wu:5,wd:5,b:18},{t:'bear',wu:3,wd:3,b:35}], name:'Engulfing Bajista', options:['Engulfing Bajista','Dark Cloud','Evening Star','Harami'], correct:0 },
    { candles: [{t:'bear',wu:3,wd:3,b:28},{t:'doji',wu:8,wd:8,b:3},{t:'bull',wu:3,wd:3,b:28}], name:'Morning Star', options:['Evening Star','Three Soldiers','Morning Star','Hammer'], correct:2 },
    { candles: [{t:'bull',wu:3,wd:3,b:28},{t:'doji',wu:8,wd:8,b:3},{t:'bear',wu:3,wd:3,b:28}], name:'Evening Star', options:['Morning Star','Evening Star','Engulfing','Doji Star'], correct:1 },
    { candles: [{t:'bull',wu:2,wd:2,b:20},{t:'bull',wu:2,wd:2,b:24},{t:'bull',wu:2,wd:2,b:28}], name:'Three White Soldiers', options:['Three Crows','Staircase','Three White Soldiers','Rising Three'], correct:2 },
  ];

  let currentQ = 0;
  let score = 0;
  let answered = false;

  function renderQuestion() {
    const q = quizPatterns[currentQ];
    let candlesHtml = q.candles.map(c => {
      const cls = c.t === 'bull' ? 'candle-bull' : c.t === 'bear' ? 'candle-bear' : 'candle-doji';
      return `<div class="candle ${cls}"><div class="candle-wick" style="height:${c.wu}px"></div><div class="candle-body" style="height:${c.b}px"></div><div class="candle-wick" style="height:${c.wd}px"></div></div>`;
    }).join('');

    let optionsHtml = q.options.map((opt, i) => 
      `<button class="quiz-opt" id="qopt-${i}" onclick="checkAnswer(${i})" style="width:100%;padding:14px;margin:5px 0;background:var(--bg-2);border:2px solid var(--border-2);border-radius:8px;color:var(--text-1);font-size:14px;font-weight:600;cursor:pointer;transition:all .2s;font-family:var(--font-display);text-align:left;padding-left:20px">${opt}</button>`
    ).join('');

    container.innerHTML = `
      <div style="text-align:center;margin-bottom:8px;">
        <span style="font-size:12px;color:var(--text-3);text-transform:uppercase;letter-spacing:2px">Pregunta ${currentQ + 1} de ${quizPatterns.length}</span>
        <div style="width:100%;height:4px;background:var(--bg-5);border-radius:2px;margin-top:8px">
          <div style="width:${(currentQ / quizPatterns.length) * 100}%;height:100%;background:var(--gold);border-radius:2px;transition:width .3s"></div>
        </div>
      </div>
      <div style="display:flex;align-items:flex-end;justify-content:center;gap:8px;height:100px;margin:24px 0">${candlesHtml}</div>
      <p style="text-align:center;font-size:17px;font-weight:700;margin-bottom:20px">¿Qué patrón es este?</p>
      ${optionsHtml}
      <div id="quiz-feedback" style="margin-top:16px;text-align:center"></div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:16px">
        <span style="font-family:var(--font-mono);font-size:14px;color:var(--gold)">Puntuación: ${score}/${quizPatterns.length}</span>
        <button id="quiz-next" style="display:none;padding:10px 24px;background:var(--gold);color:var(--bg-0);border:none;border-radius:8px;font-weight:700;cursor:pointer;font-family:var(--font-display)" onclick="nextQuestion()">Siguiente →</button>
      </div>
    `;
    answered = false;
  }

  window.checkAnswer = function(idx) {
    if (answered) return;
    answered = true;
    const q = quizPatterns[currentQ];
    const isCorrect = idx === q.correct;
    if (isCorrect) score++;

    for (let i = 0; i < q.options.length; i++) {
      const btn = document.getElementById('qopt-' + i);
      if (i === q.correct) {
        btn.style.borderColor = 'var(--green)';
        btn.style.background = 'rgba(46,204,113,0.1)';
      } else if (i === idx && !isCorrect) {
        btn.style.borderColor = 'var(--red)';
        btn.style.background = 'rgba(231,76,60,0.1)';
      }
      btn.style.cursor = 'default';
    }

    document.getElementById('quiz-feedback').innerHTML = isCorrect
      ? '<span style="color:var(--green);font-weight:700">✅ ¡Correcto!</span>'
      : `<span style="color:var(--red);font-weight:700">❌ Incorrecto</span> <span style="color:var(--text-2)">— Era: ${q.name}</span>`;
    document.getElementById('quiz-next').style.display = 'inline-block';

    // Update score display
    container.querySelector('[style*="Puntuación"]').textContent = `Puntuación: ${score}/${quizPatterns.length}`;
  };

  window.nextQuestion = function() {
    currentQ++;
    if (currentQ < quizPatterns.length) {
      renderQuestion();
    } else {
      const pct = (score / quizPatterns.length * 100).toFixed(0);
      const grade = pct >= 80 ? '🏆 Experto' : pct >= 60 ? '👍 Bueno' : pct >= 40 ? '📚 En progreso' : '💪 Sigue practicando';
      container.innerHTML = `
        <div style="text-align:center;padding:40px 20px">
          <div style="font-size:64px;margin-bottom:16px">${pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '📚'}</div>
          <div style="font-size:28px;font-weight:900;margin-bottom:8px">${score} de ${quizPatterns.length}</div>
          <div style="font-size:18px;color:var(--gold);font-weight:700;margin-bottom:8px">${grade}</div>
          <div style="font-size:14px;color:var(--text-2);margin-bottom:24px">Has acertado el ${pct}% de los patrones</div>
          <button onclick="currentQ=0;score=0;renderQuestion()" style="padding:12px 32px;background:var(--gold);color:var(--bg-0);border:none;border-radius:8px;font-size:15px;font-weight:700;cursor:pointer;font-family:var(--font-display)">🔄 Repetir Quiz</button>
        </div>
      `;
    }
  };

  renderQuestion();
}
