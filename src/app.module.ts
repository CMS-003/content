import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModule } from './api/v1/project/project.module';
import config from './config';

@Module({
  imports: [MongooseModule.forRoot(config.mongo_uri), ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
