class HeaderComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const header = document.createElement("header");
    header.setAttribute("id", "myhead");
    header.innerHTML = `
          <ul class="topnav">
            <li><a href="#contenedor">Home</a></li>
            <li><a href="#contHabili">Skills</a></li>
            <li><a href="#ifoProyectos">Projects</a></li>
            <li><a href="#infoConta">Contact</a></li>
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
}

customElements.define("header-component", HeaderComponent);
