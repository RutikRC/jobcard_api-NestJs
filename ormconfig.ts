import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ormconfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'jobcard_api',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
