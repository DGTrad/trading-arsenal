# Trading Arsenal — Guía de Despliegue

## 📁 Estructura del Proyecto

```
trading-hub/
├── index.html              ← Página principal
├── css/
│   └── main.css            ← Estilos globales
├── js/
│   ├── main.js             ← Navegación, cookies, newsletter
│   └── tools.js            ← Calculadoras y herramientas
├── pages/
│   ├── brokers.html        ← Brokers recomendados (afiliados)
│   ├── cursos.html         ← Catálogo de cursos
│   ├── premium.html        ← Planes de suscripción
│   ├── recursos.html       ← Recursos (placeholder)
│   ├── sobre.html          ← Sobre nosotros
│   └── legal/
│       └── disclaimer.html ← Disclaimer financiero
├── assets/
│   ├── icons/
│   │   └── favicon.svg
│   └── img/                ← Imágenes (añadir manualmente)
└── README.md               ← Este archivo
```

---

## 🚀 PASO A PASO PARA PUBLICAR

### 1. Comprar Dominio

**Recomendado:** [Namecheap](https://namecheap.com) o [Porkbun](https://porkbun.com)

Sugerencias de dominio:
- `tradingarsonal.com`
- `tradingtools.es`
- `mitrading.pro`
- `tradinglab.es`

Coste: ~8-15€/año

### 2. Crear Cuenta en GitHub

1. Ve a [github.com](https://github.com) y crea una cuenta
2. Crea un nuevo repositorio llamado `trading-arsenal` (o el nombre que prefieras)
3. Sube todos los archivos de este proyecto al repositorio

**Desde terminal (si tienes Git instalado):**
```bash
cd trading-hub
git init
git add .
git commit -m "Initial release - Trading Arsenal"
git remote add origin https://github.com/TU_USUARIO/trading-arsenal.git
git push -u origin main
```

### 3. Desplegar en Vercel (Recomendado)

1. Ve a [vercel.com](https://vercel.com) y crea cuenta con tu GitHub
2. Click en "New Project"
3. Importa tu repositorio `trading-arsenal`
4. Vercel detectará que es HTML estático → Deploy automático
5. Te dará una URL tipo `trading-arsenal.vercel.app`

### 4. Conectar Dominio Propio

**En Vercel:**
1. Ve a Settings → Domains
2. Añade tu dominio (ej: `tradingarsonal.com`)
3. Vercel te dará los DNS records necesarios

**En Namecheap/Porkbun:**
1. Ve a DNS Settings de tu dominio
2. Añade los registros que Vercel te indica:
   - Tipo A → `76.76.21.21`
   - Tipo CNAME → `cname.vercel-dns.com`
3. Espera 24-48h para propagación DNS
4. HTTPS se activa automáticamente

---

## 💰 MONETIZACIÓN — Próximos Pasos

### Afiliados de Brokers (Inmediato)
1. Regístrate como afiliado en brokers:
   - IC Markets, Pepperstone, XM, eToro, etc.
2. Obtén tus links de referido
3. Reemplaza los `href="#"` en `pages/brokers.html` con tus links
4. Añade `rel="noopener sponsored"` a cada link (ya está incluido)

### Pagos con Stripe (Suscripciones)
1. Crea cuenta en [stripe.com](https://stripe.com)
2. Configura productos:
   - Plan Pro: 19€/mes o 228€/año
   - Plan Elite: 49€/mes o 588€/año
3. Usa Stripe Checkout (sin backend):
   ```html
   <script async src="https://js.stripe.com/v3/buy-button.js"></script>
   <stripe-buy-button
     buy-button-id="buy_btn_XXXXX"
     publishable-key="pk_live_XXXXX">
   </stripe-buy-button>
   ```
4. Reemplaza botones en `pages/premium.html`

### Newsletter (Email Marketing)
1. Crea cuenta en [ConvertKit](https://convertkit.com) o [Mailchimp](https://mailchimp.com)
2. Crea un formulario
3. Integra la API en `js/main.js` → función `subscribeNewsletter()`

### Google Analytics
1. Crea cuenta en [analytics.google.com](https://analytics.google.com)
2. Obtén tu ID de medición (G-XXXXXXXXXX)
3. Descomenta el bloque de Analytics en `index.html`
4. Reemplaza `G-XXXXXXXXXX` con tu ID

---

## ⚖️ LEGAL — Imprescindible

Para operar legalmente en España con monetización:

1. **Aviso legal** — Con datos del titular (nombre, NIF/CIF, dirección)
2. **Política de privacidad** — Obligatoria por RGPD (ya tienes placeholder)
3. **Política de cookies** — Obligatoria con banner (ya implementado)
4. **Disclaimer financiero** — Ya creado en `pages/legal/disclaimer.html`
5. **Términos de uso** — Para suscripciones de pago

> **Recomendación:** Consulta con un abogado o usa servicios como
> [Termly](https://termly.io) para generar documentos legales válidos para España/UE.

---

## 🔧 PERSONALIZACIÓN

### Cambiar nombre de marca
Busca y reemplaza "Trading Arsenal" en todos los archivos.

### Cambiar colores
Edita las variables CSS en `css/main.css`:
```css
--gold: #d4a843;      /* Color principal */
--green: #2ecc71;     /* Positivo/alcista */
--red: #e74c3c;       /* Negativo/bajista */
```

### Añadir herramientas nuevas
1. Crea la función `renderNuevaHerramienta(container)` en `js/tools.js`
2. Regístrala en el objeto `tools` dentro de `openTool()` en `js/main.js`
3. Añade la tarjeta HTML en `index.html` dentro de `#toolsGrid`

### Añadir imagen OG para redes sociales
1. Crea una imagen de 1200x630px
2. Guárdala como `assets/img/og-cover.png`
3. Actualiza la URL en los meta tags de `index.html`

---

## 📋 CHECKLIST PRE-LANZAMIENTO

- [ ] Dominio comprado y DNS configurado
- [ ] Proyecto subido a GitHub
- [ ] Desplegado en Vercel con dominio conectado
- [ ] Links de afiliados reemplazados
- [ ] Google Analytics configurado
- [ ] Textos legales revisados por profesional
- [ ] Imagen OG para redes sociales creada
- [ ] Testeado en móvil y escritorio
- [ ] Newsletter integrada
- [ ] Stripe configurado (cuando actives Premium)
