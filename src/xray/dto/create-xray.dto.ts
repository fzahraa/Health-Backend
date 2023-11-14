import { IsEmail, IsNumber, IsString, isString } from 'class-validator';
import { Unique } from 'typeorm'; 

export class CreateXrayDto {
    @IsString()
    NME: string;
  
    @IsNumber()
    XRAY_PRCE: number = 0;
  
    @IsString()
    XRAY_CODE: string;
}