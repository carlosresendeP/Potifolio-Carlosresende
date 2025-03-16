const containerProjects = document.querySelector(".projects")
const card = document.querySelector('.project-card')
const GridCards = document.querySelector(".projects-grid")
const progress = document.querySelector('.progress')

let listProject = ''



function showProjects(projects){
    listProject = ''

    projects.forEach((project) => {


    

        listProject +=`
                <div class="project-card">
                    <div class="project-img">
                        <img src=${project.img} alt="Projeto 1">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href=${project.linkSite} title="Ver Projeto"><span>👁️</span></a>
                                <a href=${project.linkSite} title="Ver Código"><span>💻</span>  </a>
                            </div>
                        </div>
                    </div>
                    <div class="project-info">
                        <h3 class="project-title">${project.titulo} <span class='progress'> ${project.Progress ? 'Desenvolvimento' : 'Finalizado'} </span></h3>
                        <p>${project.description}</p>
                        <div class="project-tags">
                            ${project.tech.split(',').map((tag) => `<span class="project-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
        `


    });

    GridCards.innerHTML = listProject
    


    
}


document.addEventListener("DOMContentLoaded", ()=> {
    showProjects(myprojects);
});

