import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TSTG_DET } from './entity/test.entity';
import { TestService } from './test.service';
import { TestController } from './test.controller';


@Module({
  controllers: [TestController],
  providers: [TestService],
  exports: [TestService],
  imports: [TypeOrmModule.forFeature([TSTG_DET]),
  ]
})
export class TestModule {}
