const containerProjects = document.querySelector(".projects")
const card = document.querySelector('.project-card')
const GridCards = document.querySelector(".projects-grid")
const progress = document.querySelector('.progress')

let listProject = ''



function showProjects(projects) {

    listProject = ''

    projects.forEach((project) => {

        {
        listProject += `
            <div class="project-card" id="${project.id}">
                <img src="../../${project.img}" alt="${project.titulo}" class="project-image">
                <div class="project-info">
                    <h3>${project.titulo}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tech.split(',').map((tag) => `<span class="tag">${tag}</span>`).join('')}
                    </div>    

                    <div class="project-links">
                        <a href=${project.linkFont}>Codigo</a>
                        <a href=${project.linkSite}>Live</a>
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

