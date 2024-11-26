// Inicializa o ScrollReveal



/*const sr = ScrollReveal({

});

// Aplica a animação a todos os elementos com a classe 'reveal'
sr.reveal('.reveal');

*/

const scroll= ScrollReveal().reveal('.reveal',{
    origin: 'bottom', // A animação começa de baixo
    distance: '50px', // Distância do movimento
    duration: 1000, // Duração da animação em milissegundos
    delay: 100, // Delay entre as animações
    reset: false // Não reseta a animação quando o elemento sai da tela
})

const scrolldelay300 = ScrollReveal().reveal('.revealDelay300',{
    origin: 'bottom', // A animação começa de baixo
    distance: '50px', // Distância do movimento
    duration: 1000, // Duração da animação em milissegundos
    delay: 300, // Delay entre as animações
    reset: false // Não reseta a animação quando o elemento sai da tela

})

const scrolldelay500 = ScrollReveal().reveal('.revealDelay500',{
    origin: 'bottom', // A animação começa de baixo
    distance: '60px', // Distância do movimento
    duration: 1000, // Duração da animação em milissegundos
    delay: 500, // Delay entre as animações
    reset: false // Não reseta a animação quando o elemento sai da tela

})