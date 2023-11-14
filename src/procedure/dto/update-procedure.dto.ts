import { IsDate, IsEmail, IsNumber, IsString, isDate, isNumber } from 'class-validator';

export class UpdateShotDto {
    @IsString()
    NME: string;
  
    @IsString()
    PROC_PRCE: number;
  
    @IsString()
    PROC_CODE: string;
}