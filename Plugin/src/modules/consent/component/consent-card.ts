import { Cookie } from "../../../utils/cookie.util";
import { ConsentUseCase } from "../useCases/consent-usecase";

export class ConsentCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    if (Cookie.getCookie("consent")) {
      return;
    }

    this.render();
  }

  styleCustom() {
    const style = document.createElement("style");
    style.textContent = `
      .card {
        position: fixed;
        bottom: 1rem;
        left: 1rem;
        background-color: white;
        color: black;
        padding: 10px;
        border: 1px solid black;
        border-radius: 5px;
        width: 250px;
        height: 8rem;
      }
      
      p {
        font-size: 0.8rem;
      }
      
      button {
        background-color: blue;
        color: white;
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    `;

    return style;
  }

  render() {
    if (!this.shadowRoot) {
      return;
    }

    const card = document.createElement("section");
    card.classList.add("card");

    card.innerHTML = `
      <div>
        <label>Consentimento de cookies</label>
        <p>Esse site utiliza cookies para melhorar sua experiência.</p>
        <button>Aceitar</button>
      </div>
    `;

    card.querySelector("button")!.addEventListener("click", () => {
      const consentUseCase = new ConsentUseCase();

      consentUseCase.consentAccept();

      if (Cookie.getCookie("consent")) {
        card.style.display = "none";
      }
    });

    this.shadowRoot.append(this.styleCustom(), card);
  }
}
