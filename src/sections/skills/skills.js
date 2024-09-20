class SkillsComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const skillsContainer = document.createElement("div");
    skillsContainer.innerHTML = `
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
    `;
    skillsContainer.setAttribute("id", "contHabili");

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
    /* Seccion Habilidades */
    /************************************************************************/

    #contHabili {
      height: fit-content;
      /* background-color: rgba(252, 186, 99, 0.568); */
      background-color: rgb(10, 4, 95);
      width: 100%;
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
    }

    @media only screen and (max-width: 810.9999999px) {
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
    }
  `;

    shadow.appendChild(style);
    shadow.appendChild(skillsContainer);
  }
}

customElements.define("skills-component", SkillsComponent);
