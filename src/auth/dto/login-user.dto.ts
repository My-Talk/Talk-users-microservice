import { IsNumber, IsString, MinLength } from 'class-validator';
import { MIN_PASSWORD } from '../auth.constant';

export class LoginUserDto {
  @IsNumber()
  phone: number;

  @IsString()
  @MinLength(MIN_PASSWORD)
  password: string;
}
