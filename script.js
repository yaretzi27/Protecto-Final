/* =========================================
   LÓGICA DE JAVASCRIPT (Formularios)
   ========================================= */

// Espera a que todo el HTML cargue antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {
    
    // -----------------------------------------
    // 1. FORMULARIO DE RUTINA (rutina.html)
    // -----------------------------------------
    const formRutina = document.getElementById("formRutina");

    // Si el formulario existe en la página actual, activa el evento
    if (formRutina) {
        formRutina.addEventListener("submit", function(event) {
            // e.preventDefault() detiene la recarga automática de la página (Punto 3.5)
            event.preventDefault(); 

            // Captura los valores que el usuario escribió
            const nombre = document.getElementById("nombre").value.trim();
            const tipoPiel = document.getElementById("tipo-piel").value;

            // Validación: si falta algo, lanza alerta de error
            if (nombre === "" || tipoPiel === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Por favor, completa todos los campos obligatorios.',
                    confirmButtonColor: '#9c7cdb'
                });
                return; // Detiene la ejecución
            }

            // Si todo está bien, muestra una alerta de éxito con SweetAlert2
            Swal.fire({
                icon: 'success',
                title: `¡Hola, ${nombre}!`,
                text: `Hemos registrado que tu piel es ${tipoPiel}. Pronto recibirás tu rutina ideal.`,
                confirmButtonColor: '#9c7cdb',
                background: '#f4effa'
            }).then((result) => {
                // Si el usuario hace clic en "OK", limpia el formulario
                if (result.isConfirmed) {
                    formRutina.reset(); 
                }
            });
        });
    }

    // -----------------------------------------
    // 2. FORMULARIO DE CONTACTO (contacto.html)
    // -----------------------------------------
    const formContacto = document.getElementById("formContacto");

    if (formContacto) {
        formContacto.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita la recarga de página

            const email = document.getElementById("email").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            // Validación básica
            if (email === "" || mensaje === "") {
                Swal.fire({
                    icon: 'warning',
                    title: 'Campos vacíos',
                    text: 'Por favor, llena todos los campos para enviar tu mensaje.',
                    confirmButtonColor: '#9c7cdb'
                });
                return;
            }

            // Alerta de éxito
            Swal.fire({
                icon: 'success',
                title: '¡Mensaje Enviado!',
                text: 'Gracias por contactarnos. Te responderemos pronto.',
                confirmButtonColor: '#9c7cdb',
                background: '#f4effa'
            }).then(() => {
                formContacto.reset(); // Limpia los campos
            });
        });
    }
});