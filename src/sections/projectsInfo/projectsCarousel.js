import "./projectInfo.js";
import { projectsInfoList } from "./projectsInfoContants.js";

class ProjectsCarouselComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    this.currentCarouselIndex = 1;
    this.maxCarouselIndex = projectsInfoList.length - 1;
    this.carouselSectionsWidths = [];
    this.carouselSectionsTotalWidth = 0;

    const projectsInfoContent = document.createElement("div");
    projectsInfoContent.setAttribute("id", "projects-carousel");
    projectsInfoContent.innerHTML = `
      <svg id="svg-right" class="icon-arrow" width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="img">
        <path d="M9 6l6 6-6 6" fill="" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 6l6 6-6 6" fill="none" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg id="svg-left" class="icon-arrow" width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="img">
        <path d="M9 6l6 6-6 6" fill="" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 6l6 6-6 6" fill="none" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <div class="carousel-track carousel-track-transform" >
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
        overflow-x: hidden;
        position: relative;
      }

      #projects-carousel .carousel-track {
        display: flex;
        transition: transform 0.5s ease-in-out;
        width: 100%;
      }

      #projects-carousel project-info-component {
        padding-left: 5%;
        padding-right: 5%;
      }

      svg.icon-arrow {
        display: block;
        width: 80px;
        height: 80px;
        stroke: #ffffff;
        cursor: pointer;
        position: absolute;
        z-index: 600;
        pointer-events: auto;
      }

      svg.icon-arrow:hover {
        stroke: #949494ff;
      }

      #svg-left {
        transform: scaleX(-1);
        position: absolute;
        top: 11rem;
        left: 10%;
      }

      #svg-right {
        position: absolute;
        top: 11rem;
        right: 10%;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(projectsInfoContent);

    setTimeout(() => {
      this.shadowRoot
        .querySelectorAll("project-info-component")
        .forEach((p) => {
          this.carouselSectionsWidths.push(p.clientWidth);
          this.carouselSectionsTotalWidth += p.clientWidth;
        });

      this.setCarouselTransform(
        this.getPixelSliceToCenterCurrentSection(this.currentCarouselIndex)
      );
    }, 50);
  }

  connectedCallback() {
    this.arrowClickHandlerLeftBinded = this.arrowClickHandler.bind(
      this,
      "left"
    );
    this.arrowClickHandlerRightBinded = this.arrowClickHandler.bind(
      this,
      "right"
    );

    this.shadowRoot
      .querySelector("#svg-left")
      .addEventListener("click", this.arrowClickHandlerLeftBinded);

    this.shadowRoot
      .querySelector("#svg-right")
      .addEventListener("click", this.arrowClickHandlerRightBinded);
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector("#svg-right")
      .removeEventListener("click", this.arrowClickHandlerLeftBinded);

    this.shadowRoot
      .querySelector("#svg-left")
      .removeEventListener("click", this.arrowClickHandlerRightBinded);
  }

  arrowClickHandler(arrowDirection) {
    if (arrowDirection === "left") {
      this.currentCarouselIndex--;
      if (this.currentCarouselIndex < 0) {
        this.currentCarouselIndex = this.maxCarouselIndex;
      }
    } else if (arrowDirection === "right") {
      this.currentCarouselIndex++;
      if (this.currentCarouselIndex > this.maxCarouselIndex) {
        this.currentCarouselIndex = 0;
      }
    }

    this.setCarouselTransform(
      this.getPixelSliceToCenterCurrentSection(this.currentCarouselIndex)
    );
  }

  getPixelSliceToCenterCurrentSection = (currentIndexSelection) => {
    const sumPreviousWidths = this.carouselSectionsWidths.reduce(
      (acc, value, index) =>
        index < currentIndexSelection ? value + acc : acc,
      0
    );

    return (
      window.innerWidth / 2 -
      (this.carouselSectionsWidths[currentIndexSelection] / 2 +
        sumPreviousWidths)
    );
  };

  setCarouselTransform = (pixelSlice) => {
    this.shadowRoot.querySelector(".carousel-track-transform").style = `
      transform: translateX(${pixelSlice}px);  
    `;
  };
}

customElements.define("projects-carousel-component", ProjectsCarouselComponent);
