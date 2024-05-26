import { Request, Response } from 'express';
import { ExtractionDto } from '../domain/dto/extraction.dto';

export { ExtractionUseCaseInterface };

interface ExtractionUseCaseInterface {
  collect(extraction: ExtractionDto, req: Request, res: Response): Promise<Response>;
  list(token: string, res: Response): Promise<Response>;
}
