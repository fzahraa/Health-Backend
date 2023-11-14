import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { XRAY_DET } from './entity/xray.entity';
import { XrayService } from './xray.service';
import { XrayController } from './xray.controller';


@Module({
  controllers: [XrayController],
  providers: [XrayService],
  exports: [XrayService],
  imports: [TypeOrmModule.forFeature([XRAY_DET]),
  ]
})
export class XrayModule {}
