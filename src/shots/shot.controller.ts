import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Res,
    HttpStatus,
  } from '@nestjs/common';
  import * as bcrypt from 'bcrypt';
  import { CreateShotDto } from './dto/create-shot.dto';
  import { ShotService } from './shot.service';
  import { Response } from 'express';
  
  @Controller('shots')
  export class ShotController {
    constructor(private shotService: ShotService) {}
  
    //get all shots
    @Get()
    getShots() {
      return this.shotService.get();
    }

  //add shot
  @Post()
  async store(@Body() createShotDto: CreateShotDto, @Res() res: Response) {
    console.log(createShotDto);
    if (
        createShotDto.name != null &&
        createShotDto.code != null &&
        createShotDto.price != null
    ) {
        await this.shotService.findShotByCode(createShotDto.code).then(async(data) => {
          if (data) {
            res.status(HttpStatus.FORBIDDEN).send({
              message: 'Code against this Shot Already Exists.',
            });
            return res;
          } else {
            this.shotService.addShot(createShotDto).then((obj) => {
              res.status(HttpStatus.OK).send({
                message: 'Shot Successfully Added.',
              });
            });
          }
        });

    }
    return res;
  }
  }
  