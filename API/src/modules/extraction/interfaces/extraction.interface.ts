import { Extraction } from '../domain/entities/extraction.entity';

export { ExtractionRepositoryInterface };

interface ExtractionRepositoryInterface {
  collect(extraction: Extraction): Promise<Extraction>;
  list(token: string): Promise<Extraction[]>;
}
