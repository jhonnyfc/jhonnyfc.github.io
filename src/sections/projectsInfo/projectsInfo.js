class ProjectsInfoConponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const projectsInfoContent = document.createElement("div");
    projectsInfoContent.setAttribute("id", "ifoProyectos");
    projectsInfoContent.innerHTML = `
      <div id="aux"><h2>aux</h2></div>
      <div id="tituloSk">
        <p>Projects</p>
      </div>
      <div class="subtitSK">
        <p>Musyn</p>
        <br>
          <a href="https://musyn.live/" target="_blank">
            <div class="effecto">
              <img loading="lazy" src="imgs/musyn.webp" alt="foto de perfil" class="image fotoProy" id="musynFoto">
              <img loading="lazy" src="imgs/musyn_phone.webp" alt="foto de perfil" class="image fotoProy" id="musynFoto_mov">
            </div>
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

      .effecto:hover .image {
        opacity: 0.55;
      }

      /************************************************************************/
      /* Seccion Proyectos */
      /************************************************************************/

      #ifoProyectos {
        background-color: rgb(0, 0, 0);
        width: 100%;
        height: fit-content;
        padding-bottom: 80px;
      }

      .image {
        opacity: 1;
      }

      .fotoProy{
        height: 300px;
      }

      @media only screen and (min-width: 811px) {
        #tituloSk {
          margin-top: 75px;
          font-size: 3.7em;
          text-align: center;
          color: rgb(255, 255, 255);
        }

        .subtitSK {
          margin-top: 4%;
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
        #primera_seccion {
          margin-top: 50px;
        }

        #tituloSk {
          margin-top: 49px;
          font-size: 3.7em;
          text-align: center;
          color: rgb(255, 255, 255);
        }
        
        .subtitSK {
          margin-top: 4%;
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
}

customElements.define("projects-info-component", ProjectsInfoConponent);
