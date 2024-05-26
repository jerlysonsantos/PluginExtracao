import 'firebase-admin';
import 'pg';
import 'uuid';

import TestProviders from '@jest-providers';

import { ExtractionUseCase } from './extraction.usecase';
import { ExtractionRepositoryInterface } from '../interfaces/extraction.interface';
import { Extraction } from '../domain/entities/extraction.entity';
import { ExtractionDto } from '../domain/dto/extraction.dto';

describe('ExtractionUseCase', () => {
  let service: ExtractionUseCase;
  let extractionRepository: ExtractionRepositoryInterface;

  const req = {
    headers: {
      'user-agent': 'user-agent',
      origin: 'origin',
      referer: 'referer',
      host: 'host',
    },
  } as any;

  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as any;

  beforeEach(() => {
    extractionRepository = {
      collect: jest.fn(),
      list: jest.fn(),
    };

    TestProviders.providers([
      {
        token: 'extractionRepository',
        useValue: extractionRepository,
      },
    ]);
  });

  beforeEach(() => {
    jest.clearAllMocks();
    service = new ExtractionUseCase();
  });

  describe('collect', () => {
    it('should collect with success', async () => {
      const extraction = new Extraction();

      const extractionDto = new ExtractionDto();
      extractionDto.themeChangeCount = 1;

      jest.spyOn(extractionRepository, 'collect').mockResolvedValue(extraction);

      await service.collect(extractionDto, req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.status().json).toHaveBeenCalledWith({
        message: 'Dados coletados com sucesso',
      });
    });

    it('should return error when collect fails', async () => {
      const extractionDto = new ExtractionDto();
      extractionDto.themeChangeCount = 1;

      jest.spyOn(extractionRepository, 'collect').mockRejectedValue('Dados não salvos. Error message');

      await service.collect(extractionDto, req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.status().json).toHaveBeenCalledWith({ error: 'Dados não salvos. Error message' });
    });
  });

  describe('list', () => {
    it('should list with success', async () => {
      const token = 'token';
      const extractions = [new Extraction()];

      jest.spyOn(extractionRepository, 'list').mockResolvedValue(extractions);

      await service.list(token, res);

      expect(res.json).toHaveBeenCalledWith(extractions);
    });

    it('should return error when list empty', async () => {
      const token = 'token';

      jest.spyOn(extractionRepository, 'list').mockRejectedValue('Dados não encontrados');

      await service.list(token, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.status().json).toHaveBeenCalledWith({ error: 'Dados não encontrados' });
    });
  });
});
