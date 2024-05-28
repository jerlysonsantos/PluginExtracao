import { beforeAll, describe, expect, test } from 'vitest';
import { ExtractionButton } from './extraction-button';

describe('Extraction Button', () => {
  let extractionButton: HTMLElement;

  beforeAll(() => {
    customElements.define('extraction-button', ExtractionButton);
    extractionButton = document.createElement('extraction-button');
  });

  test('should be render', () => {
    expect(extractionButton).toBeDefined();
  });

  test('should be clicked', () => {
    extractionButton.shadowRoot?.querySelector('#extract-button')?.dispatchEvent(new Event('click'));

    expect(extractionButton.shadowRoot?.querySelector('#extract-button')?.getAttribute('disabled')).toBe('true');
  });
});
