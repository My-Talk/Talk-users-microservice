import { IsNumber, IsString, Length, MinLength } from 'class-validator';
import { MIN_PASSWORD } from '../auth.constant';

export class LoginUserDto {
  @IsNumber()
  @Length(9)
  phone: number;

  @IsString()
  @MinLength(MIN_PASSWORD)
  password: string;
}
