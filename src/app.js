import "./shared/components/header.js";
import "./sections/principalInfo/principalInfo.js";
import "./sections/skills/skills.js";
import "./sections/contactInfo/contactInfo.js";

class AppComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const header = document.createElement("header-component");
    const principalInfoComponet = document.createElement(
      "principal-info-component"
    );
    const skillsComponent = document.createElement("skills-component");
    const contactInfoComponent = document.createElement(
      "contact-info-component"
    );

    const mainContent = document.createElement("div");
    mainContent.innerHTML = `
      <footer>
        <div id="myfoot">
          <p>©Copyright 2021 by jhonnyfc</p>
        </div>
      </footer>
    `;
    const styleMain = document.createElement("style");
    styleMain.textContent = `
      * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
      }

      #aux {
        font-size: 0px;
        color: transparent;
      }

      /************************************************************************/
      /* Footer */
      /************************************************************************/

      #myfoot {
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        color: white;
        background-color: black;
        padding: 5px;
        font-size: 1em;
      }
    `;
    mainContent.appendChild(styleMain);
    mainContent.setAttribute("id", "mainContent");

    const style = document.createElement("style");
    style.textContent = `
      :host {
        height: 100%;
      }

      * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(header);
    shadow.appendChild(principalInfoComponet);
    shadow.appendChild(skillsComponent);
    shadow.appendChild(contactInfoComponent);
    shadow.appendChild(mainContent);
  }
}

customElements.define("app-component", AppComponent);
