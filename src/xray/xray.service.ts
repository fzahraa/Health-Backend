import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateXrayDto } from './dto/create-xray.dto';
import { XRAY_DET } from './entity/xray.entity';

@Injectable()
export class XrayService {
  constructor(
    @InjectRepository(XRAY_DET)
    private xrayRepository: Repository<XRAY_DET>,
  ) {}

  get(): Promise<XRAY_DET[]> {
    return this.xrayRepository.find();
  }
  
  findByXrayCode(XRAY_CODE: string) {
    return this.xrayRepository.findOne({ where: { XRAY_CODE } });
  }
  
  create(createUserDto: CreateXrayDto) {
    return this.xrayRepository.save(createUserDto);
  }


  
  show(XRAY_ID: number) {
    return this.xrayRepository.findOne({ where: { XRAY_ID } });
  }


  delete(userId: number) {
    return this.xrayRepository.delete(userId);
  }
}