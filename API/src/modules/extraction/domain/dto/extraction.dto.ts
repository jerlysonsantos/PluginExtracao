import { IsNumber, IsNotEmpty } from 'class-validator';

/**
 * @swagger
 *
 * components:
 *  schemas:
 *    ExtractionDto:
 *      type: object
 *      properties:
 *        themeChangeCount:
 *          type: number
 *      example:
 *        themeChangeCount: 1
 *
 */

export class ExtractionDto {
  @IsNotEmpty({ message: 'Contagem de alteração de tema não pode ser vazio' })
  @IsNumber({}, { message: 'Contagem de alteração de tema precisa ser um inteiro' })
  themeChangeCount: number;
}
