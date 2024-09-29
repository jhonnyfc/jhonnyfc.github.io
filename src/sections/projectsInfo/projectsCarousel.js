import "./projectInfo.js";
import { projectsInfoList } from "./projectsInfoContants.js";

class ProjectsCarouselComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const projectsInfoContent = document.createElement("div");
    projectsInfoContent.setAttribute("id", "projects-carousel");
    projectsInfoContent.innerHTML = `
      <div class="carousel-track">
        ${projectsInfoList.reduce((acc, projectInfo) => {
          return `${acc}<project-info-component
            projectTitle="${projectInfo.projectTitle}"
            projectLink="${projectInfo.projectLink}"
            description="${projectInfo.description}"
            urlBigImage="${projectInfo.urlBigImage ?? ""}"
            urlPortraitImage="${projectInfo.urlPortraitImage ?? ""}">
          </project-info-component>`;
        }, "")}
      </div>
    `;
    const style = document.createElement("style");
    style.textContent = `
      * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
      }

      #projects-carousel {
        display: flex;
        overflow: hidden;
        //position: relative;
      }

      #projects-carousel .carousel-track {
        display: flex;
        transition: transform 0.5s ease-in-out;
        width: 100%;
      }

      #projects-carousel project-info-component {
        flex: 0 0 100%;
      }
      
      ${this.generarAnimacionCarrusel()}
    `;

    shadow.appendChild(style);
    shadow.appendChild(projectsInfoContent);
  }

  generarAnimacionCarrusel() {
    const numItems = projectsInfoList.length ?? 0;

    const totalDuration = 10 * numItems;

    let keyframes = `@keyframes slide {`;
    for (let i = 0; i <= numItems; i++) {
      const percentage = (i / numItems) * 100;
      const translateXValue = -(i * 100);
      keyframes += `${percentage}% { transform: translateX(${translateXValue}%); }\n`;
    }
    keyframes += `100% { transform: translateX(0%); }\n`;
    keyframes += `}`;

    const animationStyle = `
      .carousel-track {
        animation: slide ${totalDuration}s infinite ease-in-out;
      }

      ${keyframes}
    `;
    return animationStyle;
  }
}

customElements.define("projects-carousel-component", ProjectsCarouselComponent);
