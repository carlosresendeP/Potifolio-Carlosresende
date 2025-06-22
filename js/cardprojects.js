const containerProjects = document.querySelector(".projects")
const card = document.querySelector('.project-card')
const GridCards = document.querySelector(".projects-grid")
const progress = document.querySelector('.progress')

let listProject = ''



function showProjects(projects) {
    listProject = ''

    //pegar apenas 3 projetos com o highlight =true

    projects.filter((project) => project.highlight === true).forEach((project) => {

        listProject += `
            <div class="project-card" id="${project.id}">
                <img src="../../${project.img}" alt="Projeto Justly" class="project-img">
                <div class="project-info">
                    <h3>${project.titulo}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tech.split(',').map((tag) => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.linkFont} target="_blank"  ">Código</a>
                        <a href="${project.linkSite} target="_blank" ">Live</a>
                    </div>
                </div>
            </div>`;
    })

    GridCards.innerHTML = listProject
};


//pegar os projetos do array e criar cards para cada um
/* projects.forEach((project) => {

         {
             listProject +=`
             <div class="project-card">
                 <img src="../../${project.img}" alt="Projeto Justly" class=".project-img ">
                 <div class="project-info">
                     <h3>Nome</h3>
                     <p>Descrição do projeto 1.</p>
                     <div class="project-tags">
                         <span class="tag">HTML</span>
                         <span class="tag">CSS</span>
                         <span class="tag">JavaScript</span> 
                     </div>    

                     <div class="project-links">
                         <a href="#">Codigo</a>
                         <a href="#">Live</a>
                     </div>    
                 </div>
     `
     }       
 });*/


    


    



document.addEventListener("DOMContentLoaded", () => {
    showProjects(myprojects);
});




