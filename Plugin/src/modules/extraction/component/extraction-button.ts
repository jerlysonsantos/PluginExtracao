import { ExtractionUseCase } from '../useCases/extraction-usecase';

export class ExtractionButton extends HTMLElement {
  public extractionUseCase: ExtractionUseCase = new ExtractionUseCase();

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  styleCustom() {
    const style = document.createElement('style');
    style.textContent = `
      button {
        position: fixed;
        right: 0;
        background-color: blue;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }`;

    return style;
  }

  render() {
    if (!this.shadowRoot) {
      return;
    }

    const button = document.createElement('button');
    button.textContent = 'Extrair';
    button.id = 'extract-button';
    button.addEventListener('click', async () => {
      await this.extractionUseCase.collect();
    });

    this.shadowRoot.append(this.styleCustom(), button);
  }
}
