// ================= SCROLL SUAVE PARA SECCIONES INTERNAS =================
const menuLinks = document.querySelectorAll('.nav a');

menuLinks.forEach(link => {
    link.addEventListener('click', function(e){
        const href = this.getAttribute('href');

        // Scroll suau només si és un enllaç a una secció de la mateixa pàgina
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // Enllaços externs (.html) deixen que el navegador carregui la pàgina normalment
    });
});

// ================= ANIMACIÓN DE SECCIONES AL HACER SCROLL =================
const sections = document.querySelectorAll('.section');

const appearOnScroll = () => {
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < windowHeight - 100){
            section.classList.add('visible');
        }
    });
}

// Executar animació al fer scroll i al carregar la pàgina
window.addEventListener('scroll', appearOnScroll);
window.addEventListener('load', appearOnScroll);
