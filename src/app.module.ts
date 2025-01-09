import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
// 이걸 임포트 해줘야 env를 자동으로 인식함
import configuration from 'config/configuration';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { typeORMConfig } from 'config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        process.env.NODE_ENV === 'development'
          ? // 명시적으로 developemnt로 세팅되어 있는 경우에만 이걸 사용한다
            '.env.development.local'
          : '.env',
      ],
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        typeORMConfig(configService),
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
