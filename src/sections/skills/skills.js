import "./skill.js";

import { skillFieldsList } from "./skillsConstants.js";

class SkillsComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const skillsContainer = document.createElement("div");
    skillsContainer.setAttribute("id", "contHabili");
    skillsContainer.innerHTML = `
      <div id="tituloSk">
        <p>Skills</p>
      </div>
      <div id="skills-list-container">
        ${skillFieldsList.reduce((acc, skillField) => {
          return `
            ${acc}
            <div class="skill-container">
              <div class="subtitSK">
                <p>${skillField.skillFieldTitle}</p>
              </div>
              <div class="contFotos">
                ${skillField.skills.reduce((acc, skill) => {
                  return `${acc}<skill-component
                    urlImage="${skill.urlImage}"
                    altDescripcion="${skill.altDescription}"
                    devLevel="${skill.devLevel}"
                  ></skill-component>`;
                }, "")}</div>
              </div>`;
        }, "")}
      </div>

      <div id="texComple">
        <p>I have knowledge also at Arduino C++, Docker, Autocad, PhotoShop, MatLab, Linux, Windows, C, Agile, Scrum, Figma, Clean Code and Solid.</p>
      </div>
    `;

    const style = document.createElement("style");
    style.textContent = `
      * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
      }

      #aux {
        font-size: 0px;
        color: transparent;
      }

      #skills-list-container {
        display: flex;
        flex-direction: column;
        gap: 70px
      }

      .skill-container {
        display: flex;
        flex-direction: column;
        gap: 40px
      }

      .contFotos {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 40px
      }

      /************************************************************************/
      /* Seccion Habilidades */
      /************************************************************************/

      #contHabili {
        height: fit-content;
        background-color: rgb(10, 4, 95);
        width: 100%;
        padding-top: 75px;
        padding-bottom: 80px;
        display: flex;
        flex-direction: column;
        gap: 40px;
      }

      #texComple {
        margin-top: 50px;
        text-align: center;
        font-size: 1.5em;
        color: white;
        max-width: 80%;
        margin-left: auto;
        margin-right: auto;
      }

      @media only screen and (min-width: 811px) {
        #tituloSk {
          font-size: 3.7em;
          text-align: center;
          color: rgb(255, 255, 255);
        }

        .subtitSK {
          font-size: 2.5em;
          text-align: center;
          color: rgb(255, 255, 255);
        }

        .contFotos {
          width: 80%;
          margin-left: auto;
          margin-right: auto;
        }
      }

      @media only screen and (max-width: 810.9999999px) {
        #contHabili {
          padding-top: 46px;
          padding-bottom: 15%;
        }

        #tituloSk {
          font-size: 3.7em;
          text-align: center;
          color: rgb(255, 255, 255);
        }

        .subtitSK {
          font-size: 2.3em;
          text-align: center;
          color: rgb(255, 255, 255);
        };

        .contFotos {
          width: 100%;
          margin-bottom: 5%;
          height: fit-content;
        }
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(skillsContainer);
  }
}

customElements.define("skills-component", SkillsComponent);
