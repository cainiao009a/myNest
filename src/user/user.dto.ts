import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class AddUserDto {
  // @ApiProperty({ example: 1234, })
  // id?: string;

  @ApiProperty({ example: 'cookies' })
  @IsNotEmpty()
  name: string;

  // @ApiProperty({ example: 'cookieboty@qq.com' })
  // @IsNotEmpty()
  // email: string;

  // @ApiProperty({ example: 'cookieboty' })
  // @IsNotEmpty()
  // username: string;
}
