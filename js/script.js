const date = document.querySelector('.date')

const newdate = new Date().getFullYear()

date.innerHTML = newdate




//cta-button planos

const buttons = document.querySelectorAll(".cta-button")
const alertMessage = document.querySelector(".alert-message")

function alertWin(){
    alertMessage.classList.add("active")
    setTimeout(() => {
        alertMessage.classList.remove("active")
    }, 3000);
}

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener("click", ()=> alertWin())

})