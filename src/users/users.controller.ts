import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { UsersService } from './users.service';
import { usersController } from './enum';
import { UserEntity } from './entities';

@Controller(usersController.users)
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(usersController.me)
  async getUser(@GetUser() currentUser: UserEntity): Promise<UserEntity> {
    return currentUser;
  }

  @Get(`/${usersController.search}/:username`)
  async searchByName(@Param('username') username: string): Promise<UserEntity> {
    return this.usersService.searchByName(username);
  }

  @Get(`/${usersController.exist}/:id`)
  async userExist(@Param('id') userId: string): Promise<{ data: boolean }> {
    return this.usersService.isUserExist(userId);
  }
}
