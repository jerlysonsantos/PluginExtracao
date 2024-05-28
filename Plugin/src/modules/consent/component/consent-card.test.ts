import { beforeAll, describe, expect, test } from 'vitest';
import { ConsentCard } from './consent-card';

describe('Consent Card', () => {
  let consentCard: HTMLElement;

  beforeAll(() => {
    customElements.define('consent-card', ConsentCard);
    consentCard = document.createElement('consent-card');
  });

  test('should be render', () => {
    expect(consentCard).toBeDefined();
  });

  test('should be clicked', () => {
    consentCard.shadowRoot?.querySelector('#consent-button')?.dispatchEvent(new Event('click'));

    expect(document.cookie).toContain('consent=true');
  });
});
