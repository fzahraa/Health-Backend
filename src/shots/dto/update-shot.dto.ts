import { IsDate, IsEmail, IsNumber, IsString, isDate, isNumber } from 'class-validator';

export class UpdateShotDto {
    @IsString()
    NME: string;
  
    @IsString()
    SHOT_PRCE: number;
  
    @IsString()
    SHOT_CODE: string;
}