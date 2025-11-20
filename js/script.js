// ===== SCROLL SUAVE PARA EL MENÚ =====
const menuLinks = document.querySelectorAll('.nav a');

menuLinks.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ===== ANIMACIÓN DE SECCIONES AL HACER SCROLL =====
const sections = document.querySelectorAll('.section');

const appearOnScroll = () => {
    const windowBottom = window.innerHeight;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < windowBottom - 100){
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', appearOnScroll);
window.addEventListener('load', appearOnScroll);
