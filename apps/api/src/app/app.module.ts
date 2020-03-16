// NestJS
import { Module } from '@nestjs/common';

// Database (MongoDB)
import { MongooseModule } from '@nestjs/mongoose';

// API Application
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
