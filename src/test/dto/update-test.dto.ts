import { IsDate, IsEmail, IsNumber, IsString, isDate, isNumber } from 'class-validator';

export class UpdateTestDto {
    @IsString()
    NME: string;
  
    @IsString()
    TSTG_PRCE: number;
  
    @IsString()
    TSTG_CODE: string;
}