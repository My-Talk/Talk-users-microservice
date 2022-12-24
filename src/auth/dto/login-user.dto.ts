import { IsNumber, IsString, MinLength } from 'class-validator';
import { MinPassword } from '../auth.constant';

export class LoginUserDto {
  @IsNumber()
  phone: number;

  @IsString()
  @MinLength(MinPassword)
  password: string;
}
