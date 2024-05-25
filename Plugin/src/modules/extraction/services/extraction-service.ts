import { ExtractionDomain } from "../domain/extraction.domain";

export { ExtractionService };

class ExtractionService {
  async extract(extractionData: ExtractionDomain) {
    console.log(extractionData);
  }
}
