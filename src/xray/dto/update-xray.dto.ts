import { IsDate, IsEmail, IsNumber, IsString, isDate, isNumber } from 'class-validator';

export class UpdateXrayDto {
    @IsString()
    NME: string;
  
    @IsString()
    XRAY_PRCE: number;
  
    @IsString()
    XRAY_CODE: string;
}