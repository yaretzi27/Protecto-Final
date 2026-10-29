// =========================================
// LÓGICA PARA EL FORMULARIO DE RUTINA (rutina.html)
// =========================================
document.addEventListener("DOMContentLoaded", function() {
    const formRutina = document.getElementById("formRutina");

    if (formRutina) {
        formRutina.addEventListener("submit", function(event) {
            // Previene que la página se recargue (Punto 3.5)
            event.preventDefault(); 

            // Captura de datos (Punto 3.5)
            const nombre = document.getElementById("nombre").value.trim();
            const tipoPiel = document.getElementById("tipo-piel").value;

            // Validación lógica extra
            if (nombre === "" || tipoPiel === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Por favor, completa todos los campos obligatorios.',
                    confirmButtonColor: '#d4a373'
                });
                return;
            }

            // Renderizado dinámico con SweetAlert2 (Punto 3.5 y 3.6)
            Swal.fire({
                icon: 'success',
                title: `¡Hola, ${nombre}!`,
                text: `Hemos registrado que tu piel es ${tipoPiel}. Pronto recibirás tu rutina ideal.`,
                confirmButtonColor: '#d4a373',
                background: '#fdfbf7'
            }).then((result) => {
                if (result.isConfirmed) {
                    formRutina.reset(); // Limpia el formulario después de enviar
                }
            });
        });
    }

    // =========================================
    // LÓGICA PARA EL FORMULARIO DE CONTACTO (contacto.html)
    // =========================================
    const formContacto = document.getElementById("formContacto");

    if (formContacto) {
        formContacto.addEventListener("submit", function(event) {
            event.preventDefault(); // Previene la recarga

            const email = document.getElementById("email").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            if (email === "" || mensaje === "") {
                Swal.fire({
                    icon: 'warning',
                    title: 'Campos vacíos',
                    text: 'Por favor, llena todos los campos para enviar tu mensaje.',
                    confirmButtonColor: '#d4a373'
                });
                return;
            }

            // Simulación de envío exitoso
            Swal.fire({
                icon: 'success',
                title: '¡Mensaje Enviado!',
                text: 'Gracias por contactarnos. Te responderemos pronto.',
                confirmButtonColor: '#d4a373',
                background: '#fdfbf7'
            }).then(() => {
                formContacto.reset();
            });
        });
    }
});