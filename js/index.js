document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('clientesCarousel');
    if (carousel) {
        carousel.addEventListener('slide.bs.carousel', function (event) {
            console.log(`Slide del carrusel cambiado a: ${event.to + 1}`);
        });
    }
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        heroTitle.addEventListener('mouseenter', function () {
            this.style.color = '#e07b39';
            this.style.transition = 'color 0.3s';
        });
        heroTitle.addEventListener('mouseleave', function () {
            this.style.color = '';
        });
    }
});