class PrincipalInfoComponet extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const divContainer = document.createElement("div");
    divContainer.setAttribute("id", "contenedor");
    divContainer.innerHTML = `
        <section id="primera_seccion">
          <div id="contFoto">
            <figure class="foto_perf">
              <img
                loading="lazy"
                class="circuloFoto"
                src="imgs/perfil2.webp"
                alt="foto de perfil"
              />
            </figure>
          </div>
          <div id="nombreDiv">
            <p id="nombre">Jhonny F. Chicaiza</p>
            <p class="infoAutor">
              <a href="https://www.unavarra.es/home" target="_blank" >
                <abbr title="Public University of Navarre">UPNA</abbr>
              </a
              >
              Computer Engineer
            </p>
            <p class="infoAutor">Software developer</p>
          </div>
        </section>
    `;

    const style = document.createElement("style");
    style.textContent = `
      * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
      }

      /************************************************************************/
      /* Primera Seccion */
      /************************************************************************/
      #contenedor {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;

        background-image: url("/imgs/fondo2.webp");
        background: linear-gradient(
            rgba(255, 255, 255, 0.123),
            rgba(255, 255, 255, 0.171)
          ),
          rgba(0, 0, 0, 0.096) url("/imgs/fondo2.webp") no-repeat;
        background-size: cover;
        
        padding-top: 8%;
        padding-bottom: 50px;
      }

      #primera_seccion {
        min-height: fit-content;
        display: flex;
        flex-direction: column;
        gap: 50px;
      }

      #aux {
        font-size: 0px;
        color: transparent;
      }

      #nombreDiv {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: fit-content;
        color: white;
      }

      #nombre {
        font-size: 3.6em;
        text-align: center;
        text-shadow: 3px 3px 3px #000000, 3px 3px 3px #000000, 3px 3px 3px #000000,
          3px 3px 3px #000000;
      }

      .infoAutor {
        margin-bottom: 5px;
        font-size: 2em;
        text-align: center;
        text-shadow: 2px 2px 2px #000000, 2px 2px 2px #000000, 2px 2px 2px #000000,
          2px 2px 2px #000000;
      }

      
      @media screen and (min-width: 1025px) {
        #contenedor {
          height: 100%;
          min-height: fit-content;
        }
      }

      @media only screen and (min-width: 811px) {
        .circuloFoto {
          display: block;
          margin-left: auto;
          margin-right: auto;
          border-style: solid;
          border-radius: 50%;
          padding: 9px;
          background-color: rgba(255, 249, 249, 0.521);
          border: 0px;
          width: 15%;
          height: auto;
        }
      }

      @media only screen and (max-width: 810.9999999px) {
        #contenedor {
          padding-top: 130px;
        }

        .circuloFoto {
          display: block;
          margin-left: auto;
          margin-right: auto;
          border-style: solid;
          border-radius: 50%;
          padding: 9px;
          background-color: rgba(255, 249, 249, 0.521);
          border: 0px;
          width: 35%;
          height: auto;
        }
      }

      .infoAutor a:link {
        color: #d1daff;
        background-color: transparent;
        text-decoration: none;
      }

      .infoAutor a:visited {
        color: #839aff;
        background-color: transparent;
        text-decoration: none;
      }

      .infoAutor a:hover {
        color: #3358fb;
        background-color: transparent;
        text-decoration: underline;
      }

      .infoAutor a:active {
        color: #f0f0f0;
        background-color: transparent;
        text-decoration: underline;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(divContainer);
  }
}

customElements.define("principal-info-component", PrincipalInfoComponet);
