document.addEventListener('DOMContentLoaded', function () {
    const mailBtn = document.querySelector('a[href^="mailto:"]');
    if (mailBtn) {
        mailBtn.addEventListener('click', function () {
            console.log('Correo iniciado desde la página de contacto.');
        });
    }
});