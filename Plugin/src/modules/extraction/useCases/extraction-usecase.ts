import { Cookie } from '../../../utils/cookie.util';
import { ExtractionDto } from '../domain/dto/extraction.dto';
import { ExtractionService } from '../services/extraction-service';

export class ExtractionUseCase {
  public extractionService: ExtractionService = new ExtractionService();

  async collect() {
    try {
      const extractionData = new ExtractionDto();

      extractionData.themeChangeCount = Number(Cookie.getCookie('themeChangeCount'));

      await this.extractionService.collect(extractionData);
    } catch (error) {
      throw new Error(String(error));
    }
  }
}
