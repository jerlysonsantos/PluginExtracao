import { FirebaseRepository } from '@repository';
import { ExtractionRepositoryInterface } from '../../interfaces/extraction.interface';
import { Extraction } from '../entities/extraction.entity';
import { Injectable } from '@injection-dependency';

export { ExtractionRepository };

@Injectable('extractionRepository')
class ExtractionRepository extends FirebaseRepository implements ExtractionRepositoryInterface {
  public async collect(extraction: Extraction): Promise<Extraction> {
    return new Promise((resolve, reject) => {
      this.connection.ref('extraction').push(extraction, (error) => {
        if (error) {
          return reject('Dados não salvos.' + error);
        }

        resolve(extraction);
      });
    });
  }

  public async list(token: string): Promise<Extraction[]> {
    return new Promise((resolve, reject) => {
      this.connection
        .ref('extraction')
        .orderByChild('token')
        .equalTo(token)
        .limitToLast(20)
        .once('value', (snapshot) => {
          const data = snapshot.val();
          const extractions: Extraction[] = [];

          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              extractions.push(data[key]);
            }
          }

          if (extractions.length === 0) return reject('Dados não encontrados');

          resolve(extractions);
        });
    });
  }
}
