// ===== UTILIDADES GLOBALES =====
function ensureModalElement() {
    if (document.getElementById('globalModal')) return;
    const modalHtml = `
    <div class="modal fade" id="globalModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="globalModalTitle"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" id="globalModalBody"></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function showModal(title, message) {
    ensureModalElement();
    const titleEl = document.getElementById('globalModalTitle');
    const bodyEl = document.getElementById('globalModalBody');
    titleEl.textContent = `🍗 ${title}`;
    bodyEl.textContent = message;
    const modalEl = document.getElementById('globalModal');
    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();
}

function showAlert(title, message) {
    // Compatibilidad: usa modal si Bootstrap está cargado, si no, fallback a alert
    if (window.bootstrap) {
        showModal(title, message);
    } else {
        alert(`🍗 ${title}\n\n${message}`);
    }
}

// ===== MODO OSCURO CON PERSISTENCIA =====
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('darkModeToggle');
    const icon = document.getElementById('darkIcon');
    const stored = localStorage.getItem('theme');

    if (stored === 'dark' || (!stored && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        if (icon) icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            const currentTheme = document.documentElement.getAttribute('data-bs-theme');
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-bs-theme');
                localStorage.setItem('theme', 'light');
                if (icon) icon.classList.replace('bi-sun-fill', 'bi-moon-fill');
            } else {
                document.documentElement.setAttribute('data-bs-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                if (icon) icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
            }
        });
    }

    // mejora visual del badge usando clases en lugar de estilo en línea
    const statusBadge = document.getElementById('statusBadge');
    if (statusBadge) {
        statusBadge.addEventListener('mouseenter', function () {
            statusBadge.classList.add('shadow-sm');
        });
        statusBadge.addEventListener('mouseleave', function () {
            statusBadge.classList.remove('shadow-sm');
        });
    }

    // inyectar modal global si Bootstrap ya cargó
    if (window.bootstrap) ensureModalElement();

    // Inicializa listener para formulario de contacto (si existe)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = contactForm.querySelector('[name="name"]').value.trim();
            const email = contactForm.querySelector('[name="email"]').value.trim();
            const message = contactForm.querySelector('[name="message"]').value.trim();
            if (!name || !email || !message) {
                showModal('Formulario', 'Por favor completa todos los campos antes de enviar.');
                return;
            }
            // validación básica de email
            const emailRe = /^\S+@\S+\.\S+$/;
            if (!emailRe.test(email)) {
                showModal('Formulario', 'Por favor ingresa un correo válido.');
                return;
            }
            // Simular envío y reset
            showModal('Gracias', 'Tu mensaje ha sido enviado. Te responderemos pronto.');
            contactForm.reset();
        });
    }
});

// ===== ALERTA GLOBAL (compatibilidad) =====
// Se deja `showAlert` arriba para que otros scripts lo usen