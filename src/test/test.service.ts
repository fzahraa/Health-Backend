import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTestDto } from './dto/create-test.dto';
import { TSTG_DET } from './entity/test.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(TSTG_DET)
    private testsRepository: Repository<TSTG_DET>,
  ) {}

  get(): Promise<TSTG_DET[]> {
    return this.testsRepository.find();
  }

  findByTestCode(TSTG_CODE: string) {
    return this.testsRepository.findOne({ where: { TSTG_CODE } });
  }
  create(createUserDto: CreateTestDto) {
    return this.testsRepository.save(createUserDto);
  }


  
  show(TSTG_ID: number) {
    return this.testsRepository.findOne({ where: { TSTG_ID } });
  }


  delete(userId: number) {
    return this.testsRepository.delete(userId);
  }
}