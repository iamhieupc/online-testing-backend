import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from 'src/configs/database.config';
import { Modules } from './modules';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [__dirname + '/models/entities/**/*{.ts,.js}'],
      logging: true,
      logger: 'file',
      namingStrategy: new SnakeNamingStrategy(),
      migrationsTableName: 'migrate_tables',
      synchronize: false,
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      cli: {
        migrationsDir: 'src/migrations',
      },
    }),
    ...Modules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
