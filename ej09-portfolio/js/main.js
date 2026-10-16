// ============================================================
// JavaScript del portfolio
// ============================================================

// Validación de formularios de Bootstrap (ya lo hicimos en el Ejercicio 7)
document.querySelectorAll('.needs-validation').forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  });
});
