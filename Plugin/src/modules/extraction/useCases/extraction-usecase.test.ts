import { describe, expect, test, vi } from 'vitest';
import { ExtractionUseCase } from './extraction-usecase';

describe('Extraction Use Case', () => {
  test('should be collect data', () => {
    const extractionUseCase = new ExtractionUseCase();

    const extractionServiceSpy = vi.spyOn(extractionUseCase.extractionService, 'collect').mockResolvedValue('data');

    extractionUseCase.collect();

    expect(extractionServiceSpy).toBeCalled();
  });

  test('should be throw error when collect data', () => {
    const extractionUseCase = new ExtractionUseCase();

    vi.spyOn(extractionUseCase.extractionService, 'collect').mockRejectedValue('error');

    extractionUseCase.collect().catch((error) => expect(error).toEqual(new Error('error')));
  });
});
