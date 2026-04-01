(function() {
    const formulario = document.getElementById('formulario-contacto');

    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();

            // Obtener los valores del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            // Validar que los campos no estén vacíos
            if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
                showToast('Por favor completa todos los campos', 'error');
                return;
            }

            // Limpiar el formulario
            formulario.reset();

            // Mostrar toast de éxito
            showToast('¡Mensaje enviado con éxito!', 'success');
        });
    }

    function showToast(message, type = 'success') {
        // Eliminar toast existente si hay uno
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }

        // Crear el elemento toast
        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;
        toast.textContent = message;

        // Agregar estilos al toast
        toast.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background-color: ${type === 'success' ? '#4CAF50' : '#f44336'};
            color: white;
            padding: 1.5rem 2.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.2);
            font-family: var(--fuenteHeading, 'Open Sans', sans-serif);
            font-size: 1.6rem;
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;

        // Agregar animación
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Agregar el toast al body
        document.body.appendChild(toast);

        // Eliminar el toast después de 3 segundos
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                toast.remove();
                style.remove();
            }, 300);
        }, 3000);
    }
})();
