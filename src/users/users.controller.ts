import { Controller, Get, Param } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { User } from 'src/mongodb/schemas';
import { UsersService } from './users.service';
import { usersController } from './enum';

@Controller(usersController.users)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(usersController.getUser)
  async getUser(@GetUser() currentUser: User): Promise<User> {
    return currentUser;
  }

  @Get(`${usersController.searchByUsername}:username`)
  async searchByName(@Param('username') username: string): Promise<User> {
    return this.usersService.searchByName(username);
  }

  @Get(`${usersController.userExist}:username`)
  async userExist(@Param('username') username: string): Promise<boolean> {
    return this.usersService.isUserExist(username);
  }
}
