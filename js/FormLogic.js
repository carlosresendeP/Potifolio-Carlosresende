



function FormWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const phone = 5532998283189;


    const text = `Olá, meu nome é ${name}, meu email é ${email} e ${message}`

    const msgFormat = encodeURIComponent(text)

    const url = `https://wa.me/${phone}?text=${msgFormat}`


    window.open(url, '_blank');
}
