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
  import { CreateXrayDto } from './dto/create-xray.dto';
  import { XrayService } from './xray.service';
  import { Response } from 'express';
  
  @Controller('xray')
  export class XrayController {
    constructor(private xrayService: XrayService) {}
  
    //get all xrays
    @Get()
    getXrays() {
      return this.xrayService.get();
    }
//add xray
@Post()
async store(@Body() createXrayDto: CreateXrayDto, @Res() res: Response) {
  console.log(createXrayDto);
  if (
    createXrayDto.NME != null &&
    createXrayDto.XRAY_CODE != null &&
    createXrayDto.XRAY_PRCE != null
  ) {
      await this.xrayService.findByXrayCode(createXrayDto.XRAY_CODE).then(async(data) => {
        if (data) {
          res.status(HttpStatus.FORBIDDEN).send({
            message: 'Code against this X-Ray Already Exists.',
          });
          return res;
        } else {
          this.xrayService.create(createXrayDto).then((obj) => {
            res.status(HttpStatus.OK).send({
              message: 'X-Ray Successfully Added.',
            });
          });
        }
      });

  }
  return res;
}
  }
  