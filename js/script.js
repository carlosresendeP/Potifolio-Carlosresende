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



//lista de tecnologias

const listTech = document.querySelectorAll(".tech")
const textTech = document.querySelectorAll(".tech-text")


listTech.forEach((tech, index)=>{

    tech.addEventListener("mouseover", ()=>{
        
        tech.classList.add("active")
        //html
        if(index === 0){
            textTech[0].classList.add("active")
        }
        //css
        if(index === 1){
            textTech[1].classList.add("active")
        }
        //js
        if(index === 2){
            textTech[2].classList.add("active")
        }
        //react
        if(index === 3){
            textTech[3].classList.add("active")
        }
        //node
        if(index === 4){
            textTech[4].classList.add("active")
        }
        //git
        if(index === 5){
            textTech[5].classList.add("active")
        }
        //figma
        if(index === 6){
            textTech[6].classList.add("active")
        }
        if(index === 7){
            textTech[7].classList.add("active")
        }
        
    });
    tech.addEventListener("mouseout", ()=>{
        tech.classList.remove("active")
        if(index === 0){
            textTech[0].classList.remove("active")
        }
        if(index === 1){
            textTech[1].classList.remove("active")
        }
        if(index === 2){
            textTech[2].classList.remove("active")
        }
        if(index === 3){
            textTech[3].classList.remove("active")
        }
        if(index === 4){
            textTech[4].classList.remove("active")
        }
        if(index === 5){
            textTech[5].classList.remove("active")
        }
        if(index === 6){
            textTech[6].classList.remove("active")
        }
        if(index === 7){
            textTech[7].classList.remove("active")
        }
    })
})