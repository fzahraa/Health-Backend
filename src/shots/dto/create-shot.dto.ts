import { IsEmail, IsNumber, IsString, isString } from 'class-validator';
import { IsNull, Unique } from 'typeorm'; 

export class CreateShotDto {
    @IsString()
    name: string ;
  
    @IsNumber()
    price: number = 0;
  
    @IsString()
    code: string;
}