import { Cookie } from "../../../utils/cookie.util";
import { ExtractionDomain } from "../domain/extraction.domain";
import { ExtractionService } from "../services/extraction-service";

export class ExtractionUseCase {
  public extractionService: ExtractionService = new ExtractionService();

  async extract() {
    try {
      const extractionData = new ExtractionDomain();

      extractionData.themeChangeCount = Number(
        Cookie.getCookie("themeChangeCount")
      );

      await this.extractionService.extract(extractionData);
    } catch (error) {
      console.error("Error extracting data", error);
    }
  }
}
