import { IsEmail, IsNumber, IsString, isString } from 'class-validator';
import { Unique } from 'typeorm'; 

export class CreateProcDto {
    @IsString()
    NME: string;
  
    @IsNumber()
    PROC_PRCE: number = 0;
  
    @IsString()
    PROC_CODE: string;
}