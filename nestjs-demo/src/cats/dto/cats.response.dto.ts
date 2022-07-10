import { ApiProperty } from "@nestjs/swagger";

export class ReadOnlyCatDto {
    
    @ApiProperty({
        example: 'aa@naver.com',
        description: 'email 주소',
        required: true,
    })
    email: string;

    @ApiProperty({
        example: 'iamkind',
        description: '비밀번호',
        required: true,
    })
    password: string;

    @ApiProperty({
        example: 'sunba',
        description: '이름',
        required: true,
    })
    name: string;
}