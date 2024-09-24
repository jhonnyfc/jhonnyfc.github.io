const sections = {
  "home-link": {
    component: "principal-info-component",
  },
  "skill-link": {
    component: "skills-component",
  },
  "projects-link": {
    component: "projects-info-component",
  },
  "contact-link": {
    component: "contact-info-component",
  },
};

class HeaderComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const header = document.createElement("header");
    header.setAttribute("id", "myhead");
    header.innerHTML = `
          <ul class="topnav">
            <li><a class="sections-links" href="#home-link" id="home-link">Home</a></li>
            <li><a class="sections-links" href="#skill-link" id="skill-link">Skills</a></li>
            <li><a class="sections-links" href="#projects-link" id="projects-link">Projects</a></li>
            <li><a class="sections-links" href="#contact-link" id="contact-link">Contact</a></li>
          </ul>
      `;

    const style = document.createElement("style");
    style.textContent = `
        * {
          margin: 0px;
          padding: 0px;
          box-sizing: border-box;
        }
        
        /************************************************************************/
        /* Barra de Navegacion */
        /************************************************************************/
  
        ul.topnav {
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background-color: rgba(51, 51, 51, 0.349);
        }

        ul.topnav li a {
          font-size: 1.3em;
          display: block;
          color: white;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
        }
  
        ul.topnav li a:hover:not(.active) {
          background-color: rgba(17, 17, 17, 0.555);
        }
  
        ul.topnav li.right {
          float: right;
        }
  
        #myhead {
          position: fixed;
          width: 100%;
          top: 0;
        }
  
        ul {
          text-align: center;
        }
  
        ul.topnav li {
          display: inline-block;
        }
      `;

    shadow.appendChild(style);
    shadow.appendChild(header);
  }

  connectedCallback() {
    this.scrollToShadowSectionHandlerBinded =
      this.scrollToShadowSectionHandler.bind(this);
    this.shadowRoot
      .querySelectorAll(".sections-links")
      .forEach((elementLink) => {
        elementLink.addEventListener(
          "click",
          this.scrollToShadowSectionHandlerBinded
        );
      });

    window.onload = () => {
      setTimeout(() => {
        this.sectionNavigation(window.location.hash.replace("#", ""));
      }, 200);
    };
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelectorAll(".sections-links")
      .forEach((elementLink) => {
        elementLink.removeEventListener(
          "click",
          this.scrollToShadowSectionHandlerBinded
        );
      });
  }

  scrollToShadowSectionHandler(event) {
    this.sectionNavigation(event.currentTarget.id);
  }

  sectionNavigation(linkId) {
    document
      ?.querySelector("app-component")
      ?.shadowRoot.querySelector(sections[linkId].component)
      ?.scrollIntoView();
  }
}

customElements.define("header-component", HeaderComponent);
