const content = document.querySelector(".content-projects")
const card = document.querySelector('.project-card')
const title = document.querySelector(".project-title")


let listProject = ''



function showProjects(projects){
    listProject = ''

    projects.forEach((project) => {

        
    listProject +=`
        <div class="project-card reveal">
        <img src="${project.img}" alt="Imagem do Projeto 1" class="project-image">
        <h3 class="project-title">${project.titulo}</h3>
        <p class="technologies">${project.tech}</p>
        <div class="project-links">

            <a href="${project.linkSite}" target="_blank" class="access-button">Acessar Site</a>
        </div>
        </div>
    `
    });

    content.innerHTML = listProject
    
    
}


document.addEventListener("DOMContentLoaded", ()=> {
    showProjects(myprojects);
});


/*<a href="${project.linkFont}" target="_blank" class="source-code">Código
                Fonte</a>*/