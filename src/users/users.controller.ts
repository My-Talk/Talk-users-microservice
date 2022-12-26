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
import { ApiForbiddenResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller(usersController.users)
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(usersController.me)
  @ApiOkResponse({
    description: 'User data retrieved successfully.',
    type: UserEntity,
  })
  @ApiForbiddenResponse({ description: 'Not authorized.' })
  async getUser(@GetUser() currentUser: UserEntity): Promise<UserEntity> {
    return currentUser;
  }

  @Get(`/${usersController.search}/:username`)
  @ApiOkResponse({
    description: 'User retrive successfully.',
    type: UserEntity,
  })
  @ApiForbiddenResponse({ description: 'Not authorized.' })
  async searchByName(@Param('username') username: string): Promise<UserEntity> {
    return this.usersService.searchByName(username);
  }

  @Get(`/${usersController.exist}/:id`)
  @ApiOkResponse({
    description: 'User has been checked successfully.',
  })
  @ApiForbiddenResponse({ description: 'Not authorized.' })
  async userExist(@Param('id') userId: string): Promise<{ data: boolean }> {
    return this.usersService.isUserExist(userId);
  }
}
