
import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty, IsEmail, IsString} from 'class-validator';

//type 또는 인터페이스가 아닌 클래스로 하는 이유는, 데코레이터 패턴 적용가능한 이유 + 상속으로 재사용성을 위함 =
export class CatRequestDto {

    @ApiProperty({
        example: 'aa@naver.com',
        description: 'email 주소',
        required: true,
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        example: 'iamkind',
        description: '비밀번호',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({
        example: 'sunba',
        description: '이름',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    name: string;
}