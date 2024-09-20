class ContactInfoComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const contactInfoEl = document.createElement("div");
    contactInfoEl.setAttribute("id", "infoConta");
    contactInfoEl.innerHTML = `
      <div id="aux"><h2>aux</h2></div>
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

      #aux {
        font-size: 0px;
        color: transparent;
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
      }

      .effecto:hover .image {
        opacity: 0.55;
      }

      .image {
        opacity: 1;
      }

      @media only screen and (min-width: 811px) {
        #tituloSk {
          margin-top: 75px;
          font-size: 3.7em;
          text-align: center;
          color: rgb(255, 255, 255);
        }

        #contFotos {
          width: 80%;
          margin-left: 16%;
          margin-right: auto;
          margin-top: 40px;
        }

        .logos {
          display: inline-block;
          margin-left: 10%;
          margin-right: 10%;
          width: fit-content;
          height: fit-content;
          margin-top: 20px;
        }
      }

      @media only screen and (max-width: 810.9999999px) {
        #tituloSk {
          margin-top: 49px;
          font-size: 3.7em;
          text-align: center;
          color: rgb(255, 255, 255);
        }

        #contFotos {
          width: 100%;
          margin-top: 40px;
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
          margin-top: 20px;
        }
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(contactInfoEl);
  }
}

customElements.define("contact-info-component", ContactInfoComponent);
