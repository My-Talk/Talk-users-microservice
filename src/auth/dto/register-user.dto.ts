import { IsNumber, IsString, MinLength } from 'class-validator';
import { MinPassword, MinUsername } from '../auth.constant';

export class RegisterUserDto {
  @IsString()
  @MinLength(MinUsername)
  username: string;

  @IsNumber()
  phone: number;

  @IsString()
  @MinLength(MinPassword)
  password: string;
}
