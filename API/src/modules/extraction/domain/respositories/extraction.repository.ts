import { Repository } from '@repository';
import { ExtractionRepositoryInterface } from '../../interfaces/extraction.interface';
import { Extraction } from '../entities/extraction.entity';
import { Injectable } from '@injection-dependency';

export { ExtractionRepository };

@Injectable('extractionRepository')
class ExtractionRepository extends Repository implements ExtractionRepositoryInterface {
  public async collect(extraction: Extraction): Promise<Extraction> {
    return new Promise((resolve, reject) => {
      this.connection.query(
        'INSERT INTO extraction ("token", "origin", "os", "device", "theme_change_count") VALUES ($1, $2, $3, $4, $5)',
        [extraction.token, extraction.origin, extraction.os, extraction.device, extraction.themeChangeCount],
        (err) => {
          if (err) {
            return reject('Dados não salvos.' + err);
          }

          resolve(extraction);
        },
      );
    });
  }

  public async list(token: string): Promise<Extraction[]> {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `
        SELECT * FROM extraction WHERE "token" = $1
      `,
        [token],
        (err, results) => {
          if (err) {
            return reject('Dados não encontrados.');
          }

          const extractions: Extraction[] = [];

          results.rows.forEach((data) => {
            const extraction = new Extraction();
            extraction.id = data.id;
            extraction.token = data.token;
            extraction.origin = data.origin;
            extraction.os = data.os;
            extraction.device = data.device;
            extraction.themeChangeCount = data.theme_change_count;

            extractions.push(extraction);
          });

          if (extractions.length === 0) return reject('Dados não encontrados');

          resolve(extractions);
        },
      );
    });
  }
}
