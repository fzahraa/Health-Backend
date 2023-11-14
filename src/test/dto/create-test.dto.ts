import { IsEmail, IsNumber, IsString, isString } from 'class-validator';
import { Unique } from 'typeorm'; 

export class CreateTestDto {
    @IsString()
    NME: string;
  
    @IsNumber()
    TSTG_PRCE: number = 0;
  
    @IsString()
    TSTG_CODE: string;
}