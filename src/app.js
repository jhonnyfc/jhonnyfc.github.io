import "./shared/components/header.js";
import "./sections/principalInfo/principalInfo.js";

class AppComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const header = document.createElement("header-component");
    const principalInfoComponet = document.createElement(
      "principal-info-component"
    );

    const mainContent = document.createElement("div");
    mainContent.innerHTML = `
      <div id="contHabili">
        <div id="aux"><h2>algo</h2></div>
        <div id="tituloSk">
          <p>Skills</p>
        </div>

        <div class="subtitSK">
          <p>Web Development</p>
        </div>
        <div id="contFotos">
          <figure class="logos">
            <img
              loading="lazy"
              class="fotlogo"
              src="imgs/php.png"
              alt="foto de perfil"
            />
            <figcaption class="levelName">
              Junior <abbr title="Developer">Dev.</abbr>
            </figcaption>
          </figure>
          <figure class="logos">
            <img
              loading="lazy"
              class="fotlogo"
              src="imgs/web.png"
              alt="foto de perfil"
            />
            <figcaption class="levelName">
              Junior <abbr title="Developer">Dev.</abbr>
            </figcaption>
          </figure>

          <figure class="logos">
            <img
              loading="lazy"
              class="fotlogo"
              src="imgs/apache.png"
              alt="foto de perfil"
            />
            <figcaption class="levelName">
              Junior <abbr title="Developer">Dev.</abbr>
            </figcaption>
          </figure>
        </div>

        <div class="subtitSK">
          <p>Data mining and AI</p>
        </div>
        <div id="contFotos">
          <figure class="logos">
            <img
              loading="lazy"
              class="fotlogo"
              src="imgs/py.png"
              alt="foto de perfil"
            />
            <figcaption class="levelName">
              Junior <abbr title="Developer">Dev.</abbr>
            </figcaption>
          </figure>
          <figure class="logos">
            <img
              loading="lazy"
              class="fotlogo"
              src="imgs/py2.png"
              alt="foto de perfil"
            />
            <figcaption class="levelName">
              Junior <abbr title="Developer">Dev.</abbr>
            </figcaption>
          </figure>
          <figure class="logos">
            <img
              loading="lazy"
              class="fotlogo"
              src="imgs/opencv.png"
              alt="foto de perfil"
            />
            <figcaption class="levelName">
              Junior <abbr title="Developer">Dev.</abbr>
            </figcaption>
          </figure>
          <figure class="logos">
            <img
              loading="lazy"
              class="fotlogo"
              src="imgs/pytor3.png"
              alt="foto de perfil"
            />
            <figcaption class="levelName">
              Junior <abbr title="Developer">Dev.</abbr>
            </figcaption>
          </figure>
          <figure class="logos">
            <img
              loading="lazy"
              class="fotlogo"
              src="imgs/mat2.png"
              alt="foto de perfil"
            />
            <figcaption class="levelName">
              Junior <abbr title="Developer">Dev.</abbr>
            </figcaption>
          </figure>
        </div>

        <div class="subtitSK">
          <p>App Development</p>
        </div>
        <div id="contFotos">
          <figure class="logos">
            <img
              loading="lazy"
              class="fotlogo"
              src="imgs/java.png"
              alt="foto de perfil"
            />
            <figcaption class="levelName">
              Junior <abbr title="Developer">Dev.</abbr>
            </figcaption>
          </figure>
        </div>

        <div class="subtitSK">
          <p>Data base</p>
        </div>

        <div id="contFotos">
          <figure class="logos">
            <img
              loading="lazy"
              class="fotlogo"
              src="imgs/sql.png"
              alt="foto de perfil"
            />
            <figcaption class="levelName">
              Junior <abbr title="Developer">Dev.</abbr>
            </figcaption>
          </figure>
        </div>
        <div id="texComple">
          <p>I have basic concepts of Arduino, Docker, Autocad and PhotoShop</p>
        </div>
      </div>

      <div id="ifoProyectos">
        <div id="aux"><h2>aux</h2></div>
        <div id="tituloSk">
          <p>Projects</p>
        </div>
        <div class="subtitSK">
          <p>Musyn</p>
          <br />
          <!-- <figure class="logos"> -->
          <a href="https://musyn.live/" target="_blank">
            <div class="effecto">
              <img
                loading="lazy"
                src="imgs/musyn.webp"
                alt="foto de perfil"
                class="image fotoProy"
                id="musynFoto"
              />
              <img
                loading="lazy"
                src="imgs/musyn_phone.webp"
                alt="foto de perfil"
                class="image fotoProy"
                id="musynFoto_mov"
              />
            </div>
          </a>
          <!-- </figure> -->
        </div>
      </div>

      <div id="infoConta">
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
      </div>
      <footer>
        <div id="myfoot">
          <p>©Copyright 2021 by jhonnyfc</p>
        </div>
      </footer>
    `;
    const styleMain = document.createElement("style");
    styleMain.textContent = `
      :host {
        height: 100%;
      }

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
      /* Seccion Habilidades */
      /************************************************************************/

      #contHabili {
        height: fit-content;
        /* background-color: rgba(252, 186, 99, 0.568); */
        background-color: rgb(10, 4, 95);
        width: 100%;
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

      .levelName {
        margin-top: 3%;
        font-size: 1.5em;
        text-align: center;
        color: rgb(255, 255, 255);
      }

      #texComple {
        margin-top: 50px;
        text-align: center;
        font-size: 1.5em;
        color: white;
        margin-left: 20px;
        margin-right: 20px;
      }

      /************************************************************************/
      /* Seccion Proyectos */
      /************************************************************************/

      #ifoProyectos {
        background-color: rgb(0, 0, 0);
        width: 100%;
        height: fit-content;
        padding-bottom: 80px;
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

      .fotoProy {
        height: 300px;
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

      .effecto:hover .image {
        opacity: 0.55;
      }

      .image {
        opacity: 1;
      }

      @media screen and (min-width: 1025px) {
        #contenedor {
          /* display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%; */
          height: 100%;
          min-height: fit-content;

          /* background-image: url('/imgs/fondo2.webp');
          background: linear-gradient(rgba(255, 255, 255, 0.123), rgba(255, 255, 255, 0.171)), rgba(0, 0, 0, 0.096) url('/imgs/fondo2.webp') no-repeat;
          background-size: cover; */
        }
      }

      /* @media screen and (max-width: 1024.9999px) {
        #contenedor {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
        
          background-image: url('/imgs/fondo2.webp');
          background: linear-gradient(rgba(255, 255, 255, 0.123), rgba(255, 255, 255, 0.171)), rgba(0, 0, 0, 0.096) url('/imgs/fondo2.webp') no-repeat;
          background-size: cover;
        }
        
      } */

      @media only screen and (min-width: 811px) {
        #tituloSk {
          margin-top: 75px;
          font-size: 3.7em;
          text-align: center;
          color: rgb(255, 255, 255);
        }

        .subtitSK {
          margin-top: 4%;
          font-size: 2.5em;
          text-align: center;
          color: rgb(255, 255, 255);
        }

        #contHabili {
          padding-bottom: 50px;
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

        #musynFoto_mov {
          visibility: collapse;
          display: none;
        }
      }

      @media only screen and (max-width: 810.9999999px) {
        #primera_seccion {
          margin-top: 50px;
        }

        #tituloSk {
          margin-top: 49px;
          font-size: 3.7em;
          text-align: center;
          color: rgb(255, 255, 255);
        }

        .subtitSK {
          margin-top: 4%;
          font-size: 2.1em;
          text-align: center;
          color: rgb(255, 255, 255);
        }

        #contHabili {
          padding-bottom: 15%;
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

        #musynFoto {
          visibility: collapse;
          display: none;
        }
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
  
      #mainContent {
        height: 100%
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(header);
    shadow.appendChild(principalInfoComponet);
    shadow.appendChild(mainContent);
  }
}

customElements.define("app-component", AppComponent);
