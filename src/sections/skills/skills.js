import "./skill.js";

const skillLevel = {
  junior: "Junior",
  intermediant: "Intermediant",
  advance: "Advance",
};

const skillFieldsList = [
  {
    skillFieldTitle: "Frontend",
    skills: [
      {
        urlImage: "imgs/skills/web.png",
        altDescription: "html css js skill photo",
        devLevel: skillLevel.advance,
      },
      {
        urlImage: "imgs/skills/vue.png",
        altDescription: "vue skill photo",
        devLevel: skillLevel.advance,
      },
      {
        urlImage: "imgs/skills/typescript.png",
        altDescription: "typescript skill photo",
        devLevel: skillLevel.intermediant,
      },
      {
        urlImage: "imgs/skills/litElement.png",
        altDescription: "litElement skill photo",
        devLevel: skillLevel.advance,
      },
      {
        urlImage: "imgs/skills/pinia.png",
        altDescription: "pinia skill photo",
        devLevel: skillLevel.advance,
      },
      {
        urlImage: "imgs/skills/vuex.png",
        altDescription: "vuex skill photo",
        devLevel: skillLevel.advance,
      },
    ],
  },
  {
    skillFieldTitle: "Backend",
    skills: [
      {
        urlImage: "imgs/skills/php.png",
        altDescription: "php skill photo",
        devLevel: skillLevel.intermediant,
      },
      {
        urlImage: "imgs/skills/apache.png",
        altDescription: "apache skill photo",
        devLevel: skillLevel.junior,
      },
      {
        urlImage: "imgs/skills/spring.png",
        altDescription: "spring skill photo",
        devLevel: skillLevel.intermediant,
      },
      {
        urlImage: "imgs/skills/node.png",
        altDescription: "node skill photo",
        devLevel: skillLevel.intermediant,
      },
      {
        urlImage: "imgs/skills/express.png",
        altDescription: "express skill photo",
        devLevel: skillLevel.intermediant,
      },
    ],
  },
  {
    skillFieldTitle: "Testing & Maintenance   ",
    skills: [
      {
        urlImage: "imgs/skills/jest.png",
        altDescription: "jest skill photo",
        devLevel: skillLevel.advance,
      },
      {
        urlImage: "imgs/skills/vitest.png",
        altDescription: "vitest skill photo",
        devLevel: skillLevel.advance,
      },
      {
        urlImage: "imgs/skills/cypress.png",
        altDescription: "cypress skill photo",
        devLevel: skillLevel.junior,
      },
      {
        urlImage: "imgs/skills/cucumber.png",
        altDescription: "cucumber skill photo",
        devLevel: skillLevel.junior,
      },
      {
        urlImage: "imgs/skills/sonar.png",
        altDescription: "sonar skill photo",
        devLevel: skillLevel.advance,
      },
    ],
  },
  {
    skillFieldTitle: "Data mining and AI",
    skills: [
      {
        urlImage: "imgs/skills/py.png",
        altDescription: "python skill photo",
        devLevel: skillLevel.intermediant,
      },
      {
        urlImage: "imgs/skills/pyKits.png",
        altDescription: "python libraries skill photo",
        devLevel: skillLevel.intermediant,
      },
      {
        urlImage: "imgs/skills/opencv.png",
        altDescription: "open skill photo",
        devLevel: skillLevel.junior,
      },
      {
        urlImage: "imgs/skills/pytor3.png",
        altDescription: "pytorch skill photo",
        devLevel: skillLevel.junior,
      },
      {
        urlImage: "imgs/skills/mat2.png",
        altDescription: "mathlab skill photo",
        devLevel: skillLevel.intermediant,
      },
    ],
  },
  {
    skillFieldTitle: "Mobile Development",
    skills: [
      {
        urlImage: "imgs/skills/javaAndroid.png",
        altDescription: "java skill photo",
        devLevel: skillLevel.intermediant,
      },
    ],
  },
  {
    skillFieldTitle: "Data base",
    skills: [
      {
        urlImage: "imgs/skills/sql.png",
        altDescription: "sql skill photo",
        devLevel: skillLevel.intermediant,
      },
      {
        urlImage: "imgs/skills/mongo.png",
        altDescription: "mongo skill photo",
        devLevel: skillLevel.intermediant,
      },
    ],
  },
  {
    skillFieldTitle: "Virtualization",
    skills: [
      {
        urlImage: "imgs/skills/docker.webp",
        altDescription: "docker skill photo",
        devLevel: skillLevel.intermediant,
      },
      {
        urlImage: "imgs/skills/virtualBox.png",
        altDescription: "virtualBox skill photo",
        devLevel: skillLevel.intermediant,
      },
    ],
  },
];

class SkillsComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const skillsContainer = document.createElement("div");
    skillsContainer.innerHTML = `
      <div id="aux"><h2>algo</h2></div>
      <div id="tituloSk">
        <p>Skills</p>
      </div>

      ${skillFieldsList.reduce((acc, skillField) => {
        return `
          ${acc}
          <div class="subtitSK">
            <p>${skillField.skillFieldTitle}</p>
          </div>
          <div id="contFotos">
            ${skillField.skills.reduce((acc, skill) => {
              return `${acc}<skill-component
                urlImage="${skill.urlImage}"
                altDescripcion="${skill.altDescription}"
                devLevel="${skill.devLevel}"
              ></skill-component>`;
            }, "")}</div>`;
      }, "")}

      <div id="texComple">
        <p>I have basic concepts of Arduino, Docker, Autocad and PhotoShop</p>
      </div>
    `;
    skillsContainer.setAttribute("id", "contHabili");

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

      #contFotos {
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
      }

      #texComple {
        margin-top: 50px;
        text-align: center;
        font-size: 1.5em;
        color: white;
        margin-left: 20px;
        margin-right: 20px;
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

        #contHabili {
          padding-bottom: 50px;
        }

        #contFotos {
          width: 80%;
          margin-left: auto;
          margin-right: auto;
          margin-top: 40px;
        }
      }

      @media only screen and (max-width: 810.9999999px) {
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

        #contHabili {
          padding-bottom: 15%;
        }

        #contFotos {
          width: 100%;
          margin-top: 40px;
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
