import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShotDto } from './dto/create-shot.dto';
import { SHOT_DET } from './entity/shot.entity';

@Injectable()
export class ShotService {
  constructor(
    @InjectRepository(SHOT_DET)
    private shotsRepository: Repository<SHOT_DET>,
  ) {}

  get(): Promise<SHOT_DET[]> {
    return this.shotsRepository.find();
  }

  create(createUserDto: CreateShotDto) {
    return this.shotsRepository.save(createUserDto);
  }

  findByShotCode(SHOT_CODE: string) {
    return this.shotsRepository.findOne({ where: { SHOT_CODE } });
  }
  
  show(SHOT_ID: number) {
    return this.shotsRepository.findOne({ where: { SHOT_ID } });
  }


  delete(userId: number) {
    return this.shotsRepository.delete(userId);
  }
}