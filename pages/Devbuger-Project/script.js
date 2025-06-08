const navbar = document.querySelector('.navbar');

//fixar navbar quando rolar a página
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-fixed');
    } else {
        navbar.classList.remove('navbar-fixed');
    }
});

//data
const date = document.querySelector('.date')
const newdate = new Date().getFullYear()
date.innerHTML = newdate