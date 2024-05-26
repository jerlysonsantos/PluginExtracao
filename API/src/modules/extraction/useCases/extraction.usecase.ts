import { Inject, Injectable } from '@injection-dependency';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { ExtractionDto } from '../domain/dto/extraction.dto';
import { Extraction } from '../domain/entities/extraction.entity';
import { ExtractionRepository } from '../domain/respositories/extraction.repository';
import { ExtractionUseCaseInterface } from '../interfaces/extraction.usecase.interface';

export { ExtractionUseCase };

@Injectable('extractionUseCase')
class ExtractionUseCase implements ExtractionUseCaseInterface {
  @Inject('extractionRepository')
  private extractionRepository: ExtractionRepository;

  public async collect(extractionDto: ExtractionDto, req: Request, res: Response) {
    try {
      const userAgent = req.headers['user-agent'];

      const extraction = new Extraction();

      extraction.id = uuidv4();
      extraction.device = this.getDevice(userAgent);
      extraction.os = this.getOs(userAgent);
      extraction.origin = req.headers.origin || req.headers.referer || req.headers.host;
      extraction.themeChangeCount = extractionDto.themeChangeCount;
      extraction.token = req.headers.authorization;

      await this.extractionRepository.collect(extraction);

      return res.status(200).json({ message: 'Dados coletados com sucesso' });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  public async list(token: string, res: Response) {
    try {
      const extractions = await this.extractionRepository.list(token);

      return res.json(extractions);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  private getOs(userAgent: string) {
    if (userAgent.includes('Windows')) {
      return 'Windows';
    } else if (userAgent.includes('Macintosh')) {
      return 'Macintosh';
    } else if (userAgent.includes('Linux')) {
      return 'Linux';
    } else {
      return 'Unknown';
    }
  }

  private getDevice(userAgent: string) {
    if (userAgent.includes('Android')) {
      return 'Android';
    } else if (userAgent.includes('iPhone')) {
      return 'iPhone';
    } else if (userAgent.includes('iPad')) {
      return 'iPad';
    } else {
      return 'Desktop';
    }
  }
}
