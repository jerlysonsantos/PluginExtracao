import { ExtractionDto } from '../domain/dto/extraction.dto';

export { ExtractionService };

class ExtractionService {
  async collect(extractionData: ExtractionDto): Promise<Response | string> {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3000/extraction/collect', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('plugin-token') || ''}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(extractionData),
      })
        .then((response) => {
          if (response.status === 429) {
            reject('Extrações maximas atingidas!');
          }

          if (response.status === 401) {
            reject('Token inválido!');
          }

          if (response.status !== 200) {
            reject('Erro ao extrair dados!');
          }

          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
