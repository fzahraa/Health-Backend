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
  import { Response } from 'express';
  import { ProcedureService } from './procedure.service';
  import { CreateProcDto } from './dto/create-procedure.dto';
  
  @Controller('procedure')
  export class ProcedureController {
    constructor(private procService: ProcedureService) {}
  
    //get all procedures
    @Get()
    getProcedures() {
      return this.procService.get();
    }

    //add procedure
@Post()
async store(@Body() createProcedureDto: CreateProcDto, @Res() res: Response) {
  console.log(createProcedureDto);
  if (
    createProcedureDto.NME != null &&
    createProcedureDto.PROC_CODE != null &&
    createProcedureDto.PROC_PRCE != null
  ) {
      await this.procService.findByXrayCode(createProcedureDto.PROC_CODE).then(async(data) => {
        if (data) {
          res.status(HttpStatus.FORBIDDEN).send({
            message: 'Code against this Procedure Already Exists.',
          });
          return res;
        } else {
          this.procService.create(createProcedureDto).then((obj) => {
            res.status(HttpStatus.OK).send({
              message: 'Procedure Successfully Added.',
            });
          });
        }
      });

  }
  return res;
}
  }
  