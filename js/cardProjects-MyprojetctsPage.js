const containerProjects = document.querySelector(".projects")
const card = document.querySelector('.project-card')
const GridCards = document.querySelector(".projects-grid")
const progress = document.querySelector('.progress')

let listProject = ''



function showProjects(projects) {

    listProject = ''

    projects.reverse().forEach((project) => {

        if (project.specificPage === true) {
            listProject += `
                <div class="project-card" id="${project.id}">
                    ${project.isNew ? '<span class="new-badge">NOVO</span>' : ''}
                    <img src="../../${project.img}" alt="${project.titulo}" class="project-image">
                    <div class="project-info">
                        <h3>${project.titulo}</h3>
                        <p>${project.description}</p>
                        <div class="project-tags">
                            ${project.tech.split(',').map((tag) => `<span class="tag">${tag}</span>`).join('')}
                        </div>    

                        <div class="project-links">
                            
                            <a href=../../${project.linkSite} >Acessar Pagina</a>
                        </div>    
                    </div>
                </div>
            `
        } else {
            listProject += `
                <div class="project-card" id="${project.id}">
                    ${project.isNew ? '<span class="new-badge">NOVO</span>' : ''}
                    <img src="../../${project.img}" alt="${project.titulo}" class="project-image">
                    <div class="project-info">
                        <h3>${project.titulo}</h3>
                        <p>${project.description}</p>
                        <div class="project-tags">
                            ${project.tech.split(',').map((tag) => `<span class="tag">${tag}</span>`).join('')}
                        </div>    

                        <div class="project-links">
                            ${project.linkFont ? `<a href="../../${project.linkFont}" target="_blank">Código</a>` : ''}
                            ${project.linkSite ? `<a href="../../${project.linkSite}" target="_blank">Live</a>` : ''}

                        </div>    
                    </div>
                </div>
            `
        }



    });

    GridCards.innerHTML = listProject




}


document.addEventListener("DOMContentLoaded", () => {
    showProjects(myprojects);
});

