class SkillComponet extends HTMLElement {
  constructor() {
    super();

    const urlImage = this.getAttribute("urlImage");
    const altDescripcion = this.getAttribute("altDescripcion");
    const devLevel = this.getAttribute("devLevel");

    const shadow = this.attachShadow({ mode: "open" });
    const skillsContainer = document.createElement("figure");
    skillsContainer.setAttribute("class", "logos");
    skillsContainer.innerHTML = `
      <img
        loading="lazy"
        class="fotlogo"
        src="${urlImage}"
        alt="${altDescripcion}"
      />
      <figcaption class="levelName">
        ${devLevel} <abbr title="Developer">Dev.</abbr>
      </figcaption>
    `;

    const style = document.createElement("style");
    style.textContent = `
      * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
      }

      .fotlogo {
        display: block;
        border-style: solid;
        border: 0;
        border-radius: 10px;
        max-width: 190px;
        height: 60px;
        margin-left: auto;
        margin-right: auto;
        //background: #ffffff1a;
      }

      .logos {
        width: 220px;
        height: 115px;
      }

      /************************************************************************/
      /* Seccion Habilidades */
      /************************************************************************/
      .levelName {
        margin-top: 3%;
        font-size: 1.5em;
        text-align: center;
        color: rgb(255, 255, 255);
      }

      @media only screen and (max-width: 810.9999999px) {
        .logos {
          align-self: center;
        }
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(skillsContainer);
  }
}

customElements.define("skill-component", SkillComponet);
