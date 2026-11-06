// main.js - Portfolio de Dany Megías Maya

// ---------- 1. MODO CLARO / OSCURO ----------
var botonTema = document.getElementById('botonTema');
var iconoTema = document.getElementById('iconoTema');
var paginaHtml = document.documentElement;

function ponerTema(tema) {
  paginaHtml.setAttribute('data-bs-theme', tema);
  if (tema === 'dark') {
    botonTema.setAttribute('aria-pressed', 'true');
    iconoTema.className = 'bi bi-sun-fill';
  } else {
    botonTema.setAttribute('aria-pressed', 'false');
    iconoTema.className = 'bi bi-moon-stars-fill';
  }
}

// Al cargar la página miro si el usuario ya había elegido un tema
var temaGuardado = localStorage.getItem('tema');
if (temaGuardado === 'dark') {
  ponerTema('dark');
}

botonTema.addEventListener('click', function () {
  var temaActual = paginaHtml.getAttribute('data-bs-theme');
  var temaNuevo = temaActual === 'dark' ? 'light' : 'dark';
  ponerTema(temaNuevo);
  localStorage.setItem('tema', temaNuevo);
});

// ---------- 2. MODAL CON EL DETALLE DEL PROYECTO ----------
var modalProyecto = document.getElementById('modalProyecto');

modalProyecto.addEventListener('show.bs.modal', function (evento) {
  // El botón que abre el modal trae los datos en los atributos data-
  var boton = evento.relatedTarget;
  document.getElementById('modalTitulo').textContent = boton.getAttribute('data-titulo');
  document.getElementById('modalDescripcion').textContent = boton.getAttribute('data-descripcion');
  document.getElementById('modalTecnologias').textContent = boton.getAttribute('data-tecnologias');
});

// ---------- 3. VALIDACIÓN DEL FORMULARIO ----------
var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  respuesta.innerHTML = '';

  if (!formulario.checkValidity()) {
    // Hay errores: Bootstrap enseña los mensajes
    formulario.classList.add('was-validated');
    return;
  }

  // Todo correcto (aquí no se envía a ningún servidor, es solo una demo)
  formulario.reset();
  formulario.classList.remove('was-validated');
  respuesta.innerHTML = '<div class="alert alert-success mb-0">Mensaje enviado correctamente. Te responderé lo antes posible.</div>';
});
