import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongodbModule } from './mongodb/mongodb.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot(), MongodbModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
