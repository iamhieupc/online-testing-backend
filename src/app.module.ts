import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from 'src/configs/database.config';
import { Modules } from './modules';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), ...Modules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
