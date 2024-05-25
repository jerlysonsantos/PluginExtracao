import { IsNumber, IsNotEmpty } from 'class-validator';

export class ExtractionDto {
  @IsNotEmpty({ message: 'Contagem de alteração de tema não pode ser vazio' })
  @IsNumber({}, { message: 'Contagem de alteração de tema precisa ser um inteiro' })
  themeChangeCount: number;
}
