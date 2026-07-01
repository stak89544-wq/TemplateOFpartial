// ===== TOGGLE MODO OSCURO =====
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('darkModeToggle');
    const icon = document.getElementById('darkIcon');

    // Detectar preferencia del sistema al cargar
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
    }

    toggleBtn.addEventListener('click', function () {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-bs-theme');
            icon.classList.replace('bi-sun-fill', 'bi-moon-fill');
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
        }
    });
});

// ===== ALERTAS PERSONALIZADAS (usadas en los botones) =====
function showAlert(titulo, mensaje) {
    // Usamos el modal de Bootstrap o un alert nativo. En este caso usamos alert nativo
    // pero también podríamos usar un modal dinámico. Mantenemos simplicidad.
    alert(`📢 ${titulo}\n\n${mensaje}`);
}

// ===== EFECTO DE CAMBIO DE COLOR/FONDO AL PASAR EL MOUSE (ejemplo en tarjetas) =====
// Se aplica con CSS :hover, pero añadimos un efecto adicional en el footer o elementos.
// Por ejemplo, en el badge de estado hacemos un cambio de color.
const statusBadge = document.getElementById('statusBadge');
if (statusBadge) {
    statusBadge.addEventListener('mouseenter', function () {
        this.style.backgroundColor = '#d4edda';
        this.style.color = '#155724';
        this.style.transition = 'all 0.3s';
    });
    statusBadge.addEventListener('mouseleave', function () {
        this.style.backgroundColor = '';
        this.style.color = '';
    });
}

// ===== MODAL: Al cerrar el modal de privacidad, podemos mostrar un mensaje (opcional) =====
// Se usa el evento 'hidden.bs.modal' para detectar cierre.
const privacyModal = document.getElementById('privacyModal');
if (privacyModal) {
    privacyModal.addEventListener('hidden.bs.modal', function () {
        // Podemos hacer algo aquí si se cierra sin aceptar, pero no es necesario.
        console.log('Modal de privacidad cerrado');
    });
}

// ===== PEQUEÑO EFECTO EN EL HERO (cambio de color al pasar mouse sobre el título) =====
const heroTitle = document.querySelector('.hero-text h1');
if (heroTitle) {
    heroTitle.addEventListener('mouseenter', function () {
        this.style.color = '#0d6efd';
        this.style.transition = 'color 0.3s';
    });
    heroTitle.addEventListener('mouseleave', function () {
        this.style.color = '';
    });
}

// ===== CARRUSEL: Inicialización automática con Bootstrap, pero podemos agregar
// un efecto al cambiar de slide (por ejemplo, log en consola) =====
const carouselElement = document.getElementById('proyectosCarousel');
if (carouselElement) {
    carouselElement.addEventListener('slide.bs.carousel', function (event) {
        console.log(`Slide cambiado a: ${event.to + 1}`);
    });
}

// ===== BOTÓN MAILTO: Ya está en el HTML, pero podemos agregar un tracking =====
const mailBtn = document.querySelector('a[href^="mailto:"]');
if (mailBtn) {
    mailBtn.addEventListener('click', function (e) {
        console.log('Correo iniciado desde el botón de contacto.');
        // No prevenimos el comportamiento por defecto.
    });
}