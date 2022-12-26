import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  MinLength,
} from 'class-validator';
import { MIN_PASSWORD, MIN_USERNAME } from '../auth.constant';

export class RegisterUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(MIN_USERNAME)
  username: string;

  @IsNumber()
  @IsNotEmpty()
  phone: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(MIN_PASSWORD)
  password: string;
}
