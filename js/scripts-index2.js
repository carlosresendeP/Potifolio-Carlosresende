//data
const date = document.querySelector('.date')
const newdate = new Date().getFullYear()
date.innerHTML = newdate

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});



// Toggle menu para dispositivos móveis
document.querySelector('.menu-toggle').addEventListener('click', ()=>{
    document.querySelector('.nav-links').classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Adicionar classe ativa no menu durante a rolagem
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animação de digitação para o texto do hero
document.addEventListener('DOMContentLoaded', function () {
    const text = document.querySelector('.hero h1');
    const originalText = text.innerHTML;

    // Descomente para ativar a animação de digitação
    /*
    text.innerHTML = '';
    let i = 0;
    
    function typeWriter() {
        if (i < originalText.length) {
            text.innerHTML += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    typeWriter();
    */
});


//texto com o nome da tecnologia nas skill-tag 

const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.addEventListener('mouseover', () => {
        tag.classList.add('active');

    })

    tag.addEventListener('mouseout', () => {
        tag.classList.remove('active');
    })

});