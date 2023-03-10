import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/mongodb/schemas';
import { UsersController } from './users.controller';
import { USER_MODEL_TOKEN } from './users.costants';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: USER_MODEL_TOKEN,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [MongooseModule],
})
export class UsersModule {}
