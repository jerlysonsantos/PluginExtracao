import { Request, Response } from 'express';
import { rateLimit } from 'express-rate-limit';

import { Controller, Get, Post } from '@routers';
import { Inject } from '@injection-dependency';
import { Authenticate } from 'src/helpers/jwt.helper';
import { ValidateBody } from 'src/helpers/validate-body.helper';

import { ExtractionUseCase } from '../useCases/extraction.usecase';
import { ExtractionDto } from '../domain/dto/extraction.dto';

export { ExtractionController };

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
});

@Controller('/extraction')
class ExtractionController {
  @Inject('extractionUseCase')
  public extractionUseCase: ExtractionUseCase;

  /**
   *  @swagger
   *
   *  /extraction/list:
   *    get:
   *      description: Lista todos os dados coletados
   *      parameters:
   *        - in: query
   *          name: token
   *          required: true
   *      responses:
   *        200:
   *          description: Retorna todos os dados
   *          content:
   *            application/json:
   *              schema:
   *                $ref: '#/components/schemas/ExtractionList'
   */
  @Get('/list')

  /**
   * @swagger
   *  components:
   *    securitySchemes:
   *      bearerAuth:
   *        type: http
   *        scheme: bearer
   *
   * /extraction/collect:
   *  post:
   *    description: Coleta dados
   *    security:
   *      - bearerAuth: []
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schemas/ExtractionDto'
   *    responses:
   *      200:
   *        description: Dados coletados com sucesso
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                message:
   *                  type: string
   */
  @Post('/collect', Authenticate, limiter, ValidateBody(ExtractionDto))
  public async collect(req: Request, res: Response) {
    const extractionDto = new ExtractionDto();

    extractionDto.themeChangeCount = req.body.themeChangeCount;

    return await this.extractionUseCase.collect(extractionDto, req, res);
  }
}
