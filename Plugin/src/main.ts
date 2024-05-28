import { ConsentCard } from './modules/consent/component/consent-card';
import { ExtractionEventUseCase } from './modules/event/useCases/event-usecase';
import { ExtractionButton } from './modules/extraction/component/extraction-button';

function dataEvents() {
  window.onload = () => {
    const clickIncrementeEvent = document.body.querySelectorAll('[data-click-increment]');

    clickIncrementeEvent.forEach((element) => {
      element.addEventListener('click', () => {
        if (!element.getAttribute('data-click-increment')) {
          return;
        }

        ExtractionEventUseCase.cookieIncrement(element.getAttribute('data-click-increment')!);
      });
    });
  };
}

function getSyncScriptParams() {
  const queryParams = import.meta.url.split('?')[1];

  var token = queryParams.split('=')[1];

  localStorage.setItem('plugin-token', token);
}

function initPlugin() {
  customElements.define('extraction-button', ExtractionButton);
  customElements.define('consent-card', ConsentCard);

  document.body.append(new ExtractionButton());
  document.body.append(new ConsentCard());

  dataEvents();
  getSyncScriptParams();
}

initPlugin();
