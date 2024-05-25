import { ExtractionDomain } from '../domain/extraction.domain';

export { ExtractionService };

class ExtractionService {
  async collect(extractionData: ExtractionDomain) {
    fetch('http://localhost:3000/extraction/collect', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(extractionData),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
