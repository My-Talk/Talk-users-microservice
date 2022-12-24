import { Module, DynamicModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({})
export class MongodbModule {
  // Initialize the config service
  static configService: ConfigService = new ConfigService();

  // Create a static forRoot() method that returns a DynamicModule
  static forRoot(): DynamicModule {
    return {
      module: MongodbModule,
      imports: [
        MongooseModule.forRoot(MongodbModule.configService.get('MONGO_URI')),
      ],
    };
  }
}
