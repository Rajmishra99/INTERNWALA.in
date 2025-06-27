// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Hero Slider
const slider = document.getElementById('hero-slider');
let currentSlide = 0;
const slideWidth = 100 / 3; // 33.33% for each slide

function nextSlide() {
    currentSlide = (currentSlide + 1) % 3;
    slider.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
}

setInterval(nextSlide, 2000);

// Scroll Animations
const animateElements = document.querySelectorAll('.scroll-animate');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // For service cards, apply delay dynamically
            if (entry.target.classList.contains('service-card')) {
                const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                entry.target.style.animationDelay = `${index * 0.1}s`;
            }
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

animateElements.forEach(el => observer.observe(el));
