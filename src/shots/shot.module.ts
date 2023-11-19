import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SHOT_DET } from './entity/shot.entity';
import { ShotService } from './shot.service';
import { ShotController } from './shot.controller';
import { ShotResolver } from './shot.resolver';


@Module({
  controllers: [ShotController],
  providers: [ShotService, ShotResolver],
  exports: [ShotService],
  imports: [TypeOrmModule.forFeature([SHOT_DET]),
  ]
})
export class ShotModule {}
