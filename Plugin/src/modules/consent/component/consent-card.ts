import { Cookie } from '../../../utils/cookie.util';
import { ConsentUseCase } from '../useCases/consent-usecase';

export class ConsentCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    if (Cookie.getCookie('consent')) {
      return;
    }

    this.render();
  }

  styleCustom() {
    const style = document.createElement('style');
    style.textContent = `
      .card {
        position: fixed;
        bottom: 1rem;
        left: 1rem;
        background-color: white;
        color: black;
        padding: 10px;
        border-radius: 4px;
        box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12); 
        width: 250px;
      }
      
      p {
        font-size: 0.8rem;
      }
      
      button {
        background-color: #1976d2;
        box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
        color: white;
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      
      button:hover {
        background-color: #1565c0;
      }
    `;

    return style;
  }

  render() {
    if (!this.shadowRoot) {
      return;
    }

    const card = document.createElement('section');
    card.classList.add('card');
    card.id = 'consent-card';

    card.innerHTML = `
      <section>
        <div role="contentinfo">
          <h1>Consentimento de cookies</h1>
          <p>Esse site utiliza cookies para melhorar sua experiência.</p>
          <button id="consent-button" aria-label="Botão para aceitar cookies">Aceitar</button>
        </div>
      </section>
    `;

    card.querySelector('button')!.addEventListener('click', () => {
      const consentUseCase = new ConsentUseCase();

      consentUseCase.consentAccept();

      if (Cookie.getCookie('consent')) {
        card.style.display = 'none';
      }
    });

    this.shadowRoot.append(this.styleCustom(), card);
  }
}
