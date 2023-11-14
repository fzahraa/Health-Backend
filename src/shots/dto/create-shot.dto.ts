import { IsEmail, IsNumber, IsString, isString } from 'class-validator';
import { IsNull, Unique } from 'typeorm'; 

export class CreateShotDto {
    @IsString()
    NME: string ;
  
    @IsNumber()
    SHOT_PRCE: number = 0;
  
    @IsString()
    SHOT_CODE: string;
}