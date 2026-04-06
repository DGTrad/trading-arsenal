/* ===================================================
   TRADING ARSENAL — Course Access Protection
   Pantalla de código de acceso para cursos de pago
   =================================================== */

/*
  INSTRUCCIONES PARA DAVID:
  ========================
  1. Cambia el código de acceso aquí abajo (COURSE_ACCESS_CODE)
  2. Cuando alguien pague, envíale el código por email
  3. El código se guarda en el navegador del usuario, no tiene que ponerlo cada vez
  4. Para cambiar el código, actualiza este archivo y los usuarios tendrán que poner el nuevo
  
  NOTA: Esta protección es básica (client-side). No es 100% segura contra
  usuarios técnicos, pero funciona perfectamente para la mayoría de usuarios.
  Para protección robusta necesitarías un backend con login real.
*/

const COURSE_ACCESS_CODE = 'CURSOS2026PRO';  // <-- CAMBIA ESTE CÓDIGO

function checkCourseAccess(courseId) {
  const savedCode = localStorage.getItem('course-access-' + courseId);
  if (savedCode === COURSE_ACCESS_CODE) return true;

  // Show lock screen
  document.body.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0a0a0f;font-family:'Outfit',sans-serif;padding:24px">
      <div style="max-width:420px;width:100%;text-align:center">
        <div style="font-size:64px;margin-bottom:20px">🔒</div>
        <h1 style="font-size:28px;font-weight:900;color:#eae8e3;margin-bottom:8px;letter-spacing:-1px">Curso Premium</h1>
        <p style="font-size:14px;color:#9a9aaa;margin-bottom:28px;line-height:1.7">Este curso requiere un código de acceso. Si ya has comprado el curso, introduce el código que recibiste por email.</p>
        
        <div style="margin-bottom:16px">
          <input type="text" id="accessCodeInput" placeholder="Introduce tu código de acceso" 
            style="width:100%;padding:14px 18px;background:#16161f;border:2px solid #2a2a38;border-radius:10px;color:#eae8e3;font-family:'JetBrains Mono',monospace;font-size:16px;text-align:center;letter-spacing:3px;outline:none;transition:border-color .2s"
            onfocus="this.style.borderColor='#d4a843'"
            onblur="this.style.borderColor='#2a2a38'"
            onkeydown="if(event.key==='Enter')validateAccess('${courseId}')"
          >
        </div>
        
        <button onclick="validateAccess('${courseId}')" 
          style="width:100%;padding:14px;background:#d4a843;color:#060609;border:none;border-radius:10px;font-family:'Outfit',sans-serif;font-size:15px;font-weight:700;cursor:pointer;transition:all .2s;margin-bottom:12px"
          onmouseover="this.style.background='#f0c050'"
          onmouseout="this.style.background='#d4a843'"
        >Acceder al curso →</button>
        
        <div id="accessError" style="color:#e74c3c;font-size:13px;font-weight:600;margin-top:8px;display:none">Código incorrecto. Verifica e inténtalo de nuevo.</div>
        
        <div style="margin-top:32px;padding-top:24px;border-top:1px solid #1e1e2a">
          <p style="font-size:13px;color:#5a5a6e;margin-bottom:12px">¿No tienes código?</p>
          <a href="../premium.html" 
            style="display:inline-block;padding:10px 24px;border:1px solid #2a2a38;border-radius:8px;color:#9a9aaa;font-size:13px;font-weight:600;text-decoration:none;transition:all .2s"
            onmouseover="this.style.borderColor='#d4a843';this.style.color='#d4a843'"
            onmouseout="this.style.borderColor='#2a2a38';this.style.color='#9a9aaa'"
          >Ver planes Premium →</a>
        </div>
        
        <div style="margin-top:20px">
          <a href="../cursos.html" style="font-size:12px;color:#5a5a6e;text-decoration:none">← Volver al catálogo de cursos</a>
        </div>
      </div>
    </div>
  `;

  return false;
}

function validateAccess(courseId) {
  const input = document.getElementById('accessCodeInput');
  const error = document.getElementById('accessError');
  const code = input.value.trim().toUpperCase();

  if (code === COURSE_ACCESS_CODE) {
    localStorage.setItem('course-access-' + courseId, code);
    location.reload();
  } else {
    error.style.display = 'block';
    input.style.borderColor = '#e74c3c';
    input.value = '';
    setTimeout(() => {
      input.style.borderColor = '#2a2a38';
      error.style.display = 'none';
    }, 3000);
  }
}
