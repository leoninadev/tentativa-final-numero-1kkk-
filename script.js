// script.js

// Adicionando efeito de rolagem suave aos links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adicionando efeito de paralaxe ao Banner 3
window.addEventListener('scroll', function() {
    const banner3 = document.querySelector('.banner-3');
    const scrollPosition = window.pageYOffset;

    // Ajuste a velocidade do paralaxe alterando o valor de '0.4'
    banner3.style.backgroundPositionY = scrollPosition * 0.4 + 'px';
});
