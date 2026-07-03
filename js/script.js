// ===== TOGGLE MODO OSCURO =====
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('darkModeToggle');
    const icon = document.getElementById('darkIcon');

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        if (icon) icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            const currentTheme = document.documentElement.getAttribute('data-bs-theme');
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-bs-theme');
                if (icon) icon.classList.replace('bi-sun-fill', 'bi-moon-fill');
            } else {
                document.documentElement.setAttribute('data-bs-theme', 'dark');
                if (icon) icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
            }
        });
    }

    // Efecto hover en badge de estado
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
});

// ===== ALERTA GLOBAL =====
function showAlert(titulo, mensaje) {
    alert(`🍗 ${titulo}\n\n${mensaje}`);
}