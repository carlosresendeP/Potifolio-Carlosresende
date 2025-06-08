//header
const navbar = document.querySelector('.header');

//fixar navbar quando rolar a página
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('header-fixed');
    } else {
        navbar.classList.remove('header-fixed');
    }
});

//data
const date = document.querySelector('.date')
const newdate = new Date().getFullYear()
date.innerHTML = newdate