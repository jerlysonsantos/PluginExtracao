import { Controller, Post } from '@routers';
import { ExtractionUseCase } from '../useCases/extraction.usecase';
import { Inject } from '@injection-dependency';
import { Request, Response } from 'express';
import { ValidateBody } from 'src/helpers/validate-body.helper';
import { ExtractionDto } from '../domain/dto/extraction.dto';

export { ExtractionController };

@Controller('/extraction')
class ExtractionController {
  @Inject('extractionUseCase')
  public extractionUseCase: ExtractionUseCase;

  @Post('/collect', ValidateBody(ExtractionDto))
  public async collect(req: Request, res: Response) {
    const extractionDto = new ExtractionDto();

    extractionDto.themeChangeCount = req.body.themeChangeCount;

    return await this.extractionUseCase.collect(extractionDto, req, res);
  }
}
