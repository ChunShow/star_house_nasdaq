// src/config/typeorm.config
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const typeORMConfig = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => {
  const dbsync = configService.get<boolean>('DB_SYNCHRONIZE');
  console.log('dbsync', dbsync);
  const result: TypeOrmModuleOptions = {
    type: 'postgres',
    host: configService.get<string>('DB_HOST') || 'localhost',
    port: parseInt(configService.get<string>('DB_PORT')) || 5432,
    username: configService.get<string>('POSTGRES_USER') || 'postgres',
    password: configService.get<string>('POSTGRES_PASSWORD') || '0000',
    database: configService.get<string>('POSTGRES_DB') || 'postgres',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: configService.get<boolean>('DB_SYNCHRONIZE') || false,
    namingStrategy: new SnakeNamingStrategy(),
    logging: true,
  };
  console.log('typeorm config', result);
  return result;
};
