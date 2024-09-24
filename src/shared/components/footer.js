class FooterComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const footerContent = document.createElement("footer");
    footerContent.innerHTML = `
      <div id="myfoot">
        <p>©Copyright 2024 by jhonnyfc</p>
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

    shadow.appendChild(style);
    shadow.appendChild(footerContent);
  }
}

customElements.define("footer-component", FooterComponent);
