import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShotDto } from './dto/create-shot.dto';
import { SHOT_DET } from './entity/shot.entity';
import { Shot as ShotModel } from 'src/interface/graphql';
import { AddShotArgs } from './args/add.shot.args';
import { UpdateShotArgs } from './args/update.shot.args';

@Injectable()
export class ShotService {
  public shotsData: SHOT_DET[] =[];
  constructor(
    @InjectRepository(SHOT_DET)
    private shotsRepository: Repository<SHOT_DET>,
  ) {}

  async get(): Promise<SHOT_DET[]> {
    return await this.shotsRepository.find();
  }

  delete(userId: number) {
    return this.shotsRepository.delete(userId);
    }

  async addShot(addShotArgs: AddShotArgs): Promise<string>{
    try{
      console.log(addShotArgs);
      let shot: SHOT_DET = new SHOT_DET();
      shot.code = addShotArgs.code;
      shot.name = addShotArgs.name;
      shot.price = addShotArgs.price;
      await this.shotsRepository.save(shot);
      return "Shot added successfully";
    }
    catch(err){
      return err;
    }
  }

  async updateShot(updateShotArgs: UpdateShotArgs): Promise<string>{
    let shot: SHOT_DET = await this.shotsRepository.findOne({where : {id : updateShotArgs.id}});
    shot.code = updateShotArgs.code;
    shot.name = updateShotArgs.name;
    shot.price = updateShotArgs.price;
    //await this.shotsRepository.save(shot);
    return "Shot updated successfully";
  }

  async deleteShot(id: number): Promise<string>{
    await this.shotsRepository.delete(id);
    return "Shot updated successfully";
  }

  async findShotById(id: number): Promise<SHOT_DET> {  
    let shot = await this.shotsRepository.findOne({where : {id : id}});
    return shot;
  }

  async findShotByCode(code: string): Promise<SHOT_DET> {  
    let shot = await this.shotsRepository.findOne({where : {code : code}});
    return shot;
  }


  async getAllShots(): Promise<SHOT_DET[]> {
    return await this.shotsRepository.find();
  }
}