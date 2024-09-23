class ContactInfoComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const contactInfoEl = document.createElement("div");
    contactInfoEl.setAttribute("id", "infoConta");
    contactInfoEl.innerHTML = `
      <div id="tituloSk">
        <p>Contact Info</p>
      </div>
      <div id="contFotos">
        <figure class="logos">
          <a href="https://github.com/jhonnyfc" target="_blank">
            <div class="effecto">
              <img
                loading="lazy"
                src="imgs/git.png"
                alt="foto de perfil"
                class="image fotlogo"
              />  
            </div>
          </a>
        </figure>
        <figure class="logos">
          <a href="https://www.linkedin.com/in/jhonnyfc" target="_blank">
            <div class="effecto">
              <img
                loading="lazy"
                src="imgs/lin.png"
                alt="foto de perfil"
                class="image fotlogo"
              />
            </div>
          </a>
        </figure>
      </div>
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
        border: 0px;
        width: auto;
        height: 80px;
        margin-left: auto;
        margin-right: auto;
      }

      /************************************************************************/
      /* Seccion Contacto */
      /************************************************************************/

      #infoConta {
        background-color: rgb(109, 111, 143);
        width: 100%;
        height: fit-content;
        padding-bottom: 80px;
        padding-top: 75px;
        display: flex;
        flex-direction: column;
        gap: 40px
      }

      .effecto:hover .image {
        opacity: 0.55;
      }

      .image {
        opacity: 1;
      }

      #contFotos {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: row;
        gap: 150px;
        flex-wrap: wrap;
        justify-content: center;
      }

      @media only screen and (min-width: 811px) {
        #tituloSk {
          font-size: 3.7em;
          text-align: center;
          color: rgb(255, 255, 255);
        }

        .logos {
          display: inline-block;
          width: fit-content;
          height: fit-content;
        }
      }

      @media only screen and (max-width: 810.9999999px) {
        #infoConta {
          padding-top: 46px;
        }

        #tituloSk {
          font-size: 3.7em;
          text-align: center;
          color: rgb(255, 255, 255);
        }

        #contFotos {
          width: 100%;
          margin-bottom: 5%;
          height: fit-content;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .logos {
          align-self: center;
          width: fit-content;
          height: fit-content;
        }
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(contactInfoEl);
  }
}

customElements.define("contact-info-component", ContactInfoComponent);
