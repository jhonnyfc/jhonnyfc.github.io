import "./projectsCarousel.js";

class ProjectsInfoConponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const projectsInfoContent = document.createElement("div");
    projectsInfoContent.setAttribute("id", "ifoProyectos");
    projectsInfoContent.innerHTML = `
      <div id="tituloSk">
        <p>Projects</p>
      </div>
      <projects-carousel-component></projects-carousel-component>
    `;
    const style = document.createElement("style");
    style.textContent = `
      * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
      }

      /************************************************************************/
      /* Seccion Proyectos */
      /************************************************************************/
      #ifoProyectos {
        background-color: rgb(0, 0, 0);
        width: 100%;
        height: fit-content;
        padding-bottom: 80px;
        padding-top: 75px;
        display: flex;
        flex-direction: column;
        gap: 40px;
      }

      @media only screen and (min-width: 811px) {
        #tituloSk {
          font-size: 3.7em;
          text-align: center;
          color: rgb(255, 255, 255);
        }
      }

      @media only screen and (max-width: 810.9999999px) {
        #ifoProyectos {
          padding-top: 46px;
        }

        #tituloSk {
          font-size: 3.7em;
          text-align: center;
          color: rgb(255, 255, 255);
        }
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(projectsInfoContent);
  }
}

customElements.define("projects-info-component", ProjectsInfoConponent);
