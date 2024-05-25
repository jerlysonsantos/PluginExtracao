import { Extraction } from '../entities/extraction.entity';

export { ExtractionRepositoryInterface };

interface ExtractionRepositoryInterface {
  collect(extraction: Extraction): Promise<void>;
}
