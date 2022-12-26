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

  @Get(`:username`)
  async searchByName(@Param('username') username: string): Promise<UserEntity> {
    return this.usersService.searchByName(username);
  }

  @Get(`:username`)
  async userExist(@Param('username') username: string): Promise<boolean> {
    return this.usersService.isUserExist(username);
  }
}
