import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientController } from './controller/client/client.controller';
import { ClientService } from './service/client/client.service';
import { ClientSchema } from './schema/client.schema';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/jobcard_api'),
  MongooseModule.forFeature([{ name: 'Client', schema: ClientSchema }])],
  controllers: [AppController, ClientController],
  providers: [AppService, ClientService],
})

export class AppModule {}