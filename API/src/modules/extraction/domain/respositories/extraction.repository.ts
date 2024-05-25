import { FirebaseRepository } from '@repository';
import { ExtractionRepositoryInterface } from './extraction.interface';
import { Extraction } from '../entities/extraction.entity';
import { Injectable } from '@injection-dependency';

export { ExtractionRepository };

@Injectable('extractionRepository')
class ExtractionRepository extends FirebaseRepository implements ExtractionRepositoryInterface {
  public async collect(extraction: Extraction): Promise<void> {
    this.connection.ref('extraction').push(extraction, (error) => {
      if (error) {
        throw Error('Data could not be saved.' + error);
      } else {
        return extraction;
      }
    });
  }

  public async list(): Promise<Extraction[]> {
    return new Promise((resolve) => {
      this.connection.ref('extraction').once('value', (snapshot) => {
        const data = snapshot.val();
        const extractions: Extraction[] = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            extractions.push(data[key]);
          }
        }
        resolve(extractions);
      });
    });
  }
}
