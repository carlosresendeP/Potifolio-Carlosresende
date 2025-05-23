const containerProjects = document.querySelector(".projects")
const card = document.querySelector('.project-card')
const GridCards = document.querySelector(".projects-grid")
const progress = document.querySelector('.progress')

let listProject = ''



function showProjects(projects){
    listProject = ''

    projects.forEach((project) => {

        //verficar se a pagina é especifica
        if(project.specificPage === true )
            
            {
                listProject +=`
                <div class="project-card">
                    <div class="project-img">
                        <img src=${project.img} alt="Projeto ${project.titulo}">
                        <div class="project-overlay specific">
                            <div class="project-links specific">
                                <a href=${project.linkSite} title="Ver Projeto" target="_blank" class='specific' ><span> Ver Projeto</span></a>
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
        }

        else
            {
                listProject +=`
                <div class="project-card">
                    <div class="project-img">
                        <img src=${project.img} alt="Projeto ${project.titulo}">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href=${project.linkSite} title="Ver Projeto" target="_blank" ><span>👁️</span></a>
                                <a href=${project.linkFont} title="Ver Código" target="_blank" ><span>💻</span>  </a>
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
        }
        



    });

    GridCards.innerHTML = listProject
    


    
}


document.addEventListener("DOMContentLoaded", ()=> {
    showProjects(myprojects);
});

