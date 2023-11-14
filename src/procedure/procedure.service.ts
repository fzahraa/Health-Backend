import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProcDto } from './dto/create-procedure.dto';
import { PROC_DET } from './entity/proedure.entity';

@Injectable()
export class ProcedureService {
  constructor(
    @InjectRepository(PROC_DET)
    private procRepository: Repository<PROC_DET>,
  ) {}

  get(): Promise<PROC_DET[]> {
    return this.procRepository.find();
  }

  findByXrayCode(PROC_CODE: string) {
    return this.procRepository.findOne({ where: { PROC_CODE } });
  }

  create(createUserDto: CreateProcDto) {
    return this.procRepository.save(createUserDto);
  }


  
  show(PROC_ID: number) {
    return this.procRepository.findOne({ where: { PROC_ID } });
  }


  delete(PROC_ID: number) {
    return this.procRepository.delete(PROC_ID);
  }
}