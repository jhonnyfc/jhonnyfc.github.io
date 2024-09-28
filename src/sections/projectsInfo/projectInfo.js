class ProjectInfoConponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const projectTitle = this.getAttribute("projectTitle");
    const projectLink = this.getAttribute("projectLink");
    const urlBigImage = this.getAttribute("urlBigImage");
    const urlPortraitImage = this.getAttribute("urlPortraitImage");
    const description = this.getAttribute("description");

    const projectsInfoContent = document.createElement("div");
    projectsInfoContent.setAttribute("id", "ifoProyecto");
    projectsInfoContent.innerHTML = `
      <div class="subtitSK">
        <p>${projectTitle}</p>
      </div>
      <div class="project-info-content">
        <a href="${projectLink}" target="_blank" class="project-link">
          ${this.buildDescriptionContent(
            urlBigImage,
            urlPortraitImage,
            description
          )}
        </a>
      </div>
    `;
    const style = document.createElement("style");
    style.textContent = `
      * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
      }

      #ifoProyecto{
        display: flex;
        flex-direction: column;
        gap: 40px;
      }

      .project-info-content {
        display: flex;
        justify-content: center;
      }

      .project-link:hover .image {
        opacity: 0.55;
      }

      /************************************************************************/
      /* Seccion Proyectos */
      /************************************************************************/
      .image {
        opacity: 1;
      }

      .fotoProy{
        height: 300px;
      }

      .project-info-description {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
        font-size: 1.5em;
      }

      .project-link:link {
        color: #f5f7ff;
        background-color: transparent;
        text-decoration: none;
      }

      .project-link:visited {
        color: #f5f7ff;
        background-color: transparent;
        text-decoration: none;
      }

      .project-link:hover {
        color: #bfc4de;
        background-color: transparent;
        text-decoration: none;
      }

      .project-link:active {
        color: #f0f0f0;
        background-color: transparent;
        text-decoration: underline;
      }

      @media only screen and (min-width: 811px) {
        .subtitSK {
          font-size: 2.5em;
          text-align: center;
          color: rgb(255, 255, 255);
        }

        #musynFoto_mov {
          visibility: collapse;
          display: none;
        }
      }

      @media only screen and (max-width: 810.9999999px) {
        .subtitSK {
          font-size: 2.1em;
          text-align: center;
          color: rgb(255, 255, 255);
        }
        
        #musynFoto {
          visibility: collapse;
          display: none;
        }
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(projectsInfoContent);
  }

  buildDescriptionContent(urlBigImage, urlPortraitImage, description) {
    if (!urlBigImage || !urlPortraitImage) {
      return `<p class="project-info-description">${description}</p>`;
    }

    return `
      <img loading="lazy" src="${urlBigImage}" alt="foto de perfil" class="image fotoProy" id="musynFoto">
      <img loading="lazy" src="${urlPortraitImage}" alt="foto de perfil" class="image fotoProy" id="musynFoto_mov">
    `;
  }
}

customElements.define("project-info-component", ProjectInfoConponent);
