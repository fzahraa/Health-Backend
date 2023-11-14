import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PROC_DET } from './entity/proedure.entity';
import { ProcedureService } from './procedure.service';
import { ProcedureController } from './procedure.controller';


@Module({
  controllers: [ProcedureController],
  providers: [ProcedureService],
  exports: [ProcedureService],
  imports: [TypeOrmModule.forFeature([PROC_DET]),
  ]
})
export class ProcedureModule {}
