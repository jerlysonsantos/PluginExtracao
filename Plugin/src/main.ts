import { ConsentCard } from "./modules/consent/component/consent-card";
import { ExtractionEventUseCase } from "./modules/event/useCases/event-usecase";
import { ExtractionButton } from "./modules/extraction/component/extraction-button";

customElements.define("extraction-button", ExtractionButton);
customElements.define("consent-card", ConsentCard);

document.body.append(new ExtractionButton());
document.body.append(new ConsentCard());

window.onload = () => {
  const clickIncrementeEvent = document.body.querySelectorAll(
    "[data-click-increment]"
  );

  clickIncrementeEvent.forEach((element) => {
    element.addEventListener("click", () => {
      if (!element.getAttribute("data-click-increment")) {
        return;
      }

      ExtractionEventUseCase.cookieIncrement(
        element.getAttribute("data-click-increment")!
      );
    });
  });
};
