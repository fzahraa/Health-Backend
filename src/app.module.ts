import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entity/user.entity';
import { SHOT_DET } from './shots/entity/shot.entity';
import { PROC_DET } from './procedure/entity/proedure.entity';
import { TSTG_DET } from './test/entity/test.entity';
import { XRAY_DET } from './xray/entity/xray.entity';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { ShotModule } from './shots/shot.module';
import { ProcedureModule } from './procedure/procedure.module';
import { TestModule } from './test/test.module';
import { XrayModule } from './xray/xray.module';

@Module({
  controllers: [AppController],
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'HealthDB',
      entities: [User, SHOT_DET, PROC_DET, TSTG_DET, XRAY_DET],
      synchronize: true,
    }),
    AuthModule,
    ProfileModule,
    ShotModule,
    ProcedureModule,
    TestModule,
    XrayModule
  ],
})
export class AppModule {}
