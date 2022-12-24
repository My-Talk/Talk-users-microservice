import { IsNumber, IsString, MinLength } from 'class-validator';
import { MIN_PASSWORD, MIN_USERNAME } from '../auth.constant';

export class RegisterUserDto {
  @IsString()
  @MinLength(MIN_USERNAME)
  username: string;

  @IsNumber()
  phone: number;

  @IsString()
  @MinLength(MIN_PASSWORD)
  password: string;
}
