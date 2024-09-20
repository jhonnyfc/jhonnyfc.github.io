import "./shared/components/header.js";
import "./sections/principalInfo/principalInfo.js";
import "./sections/skills/skills.js";
import "./sections/contactInfo/contactInfo.js";
import "./shared/components/footer.js";

class AppComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const headerComponent = document.createElement("header-component");
    const principalInfoComponet = document.createElement(
      "principal-info-component"
    );
    const skillsComponent = document.createElement("skills-component");
    const contactInfoComponent = document.createElement(
      "contact-info-component"
    );
    const footerComponent = document.createElement("footer-component");

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
    shadow.appendChild(headerComponent);
    shadow.appendChild(principalInfoComponet);
    shadow.appendChild(skillsComponent);
    shadow.appendChild(contactInfoComponent);
    shadow.appendChild(footerComponent);
  }
}

customElements.define("app-component", AppComponent);
