import { IsDate, IsEmail, IsNumber, IsString, isDate, isNumber } from 'class-validator';

export class UpdateShotDto {
    @IsNumber()
    id: number;

    @IsString()
    name: string;
  
    @IsString()
    price: number;
  
    @IsString()
    code: string;
}