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
  import { CreateTestDto } from './dto/create-test.dto';
  import { TestService } from './test.service';
  import { Response } from 'express';
  
  @Controller('testing')
  export class TestController {
    constructor(private testService: TestService) {}
  
    //get all tests
    @Get()
    getTests() {
      return this.testService.get();
    }

    //add test
  @Post()
  async store(@Body() createTestDto: CreateTestDto, @Res() res: Response) {
    console.log(createTestDto);
    if (
      createTestDto.NME != null &&
      createTestDto.TSTG_PRCE != null &&
      createTestDto.TSTG_CODE != null
    ) {
        await this.testService.findByTestCode(createTestDto.TSTG_CODE).then(async(data) => {
          if (data) {
            res.status(HttpStatus.FORBIDDEN).send({
              message: 'Code against this Test Already Exists.',
            });
            return res;
          } else {
            this.testService.create(createTestDto).then((obj) => {
              res.status(HttpStatus.OK).send({
                message: 'Test Successfully Added.',
              });
            });
          }
        });

    }
    return res;
  }
  }
  