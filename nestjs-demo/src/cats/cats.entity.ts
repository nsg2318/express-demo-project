import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  id: BigInteger; 
  
  @ApiProperty({
    example: 'aa@naver.com',
    description: 'email 주소',
    required: true,
  })
  @Column()
  email: string;

  @ApiProperty({
    example: 'sunba',
    description: '이름',
    required: true,
  })
  @Column()
  name: string;

  @ApiProperty({
    example: 'iamkind',
    description: '비밀번호',
    required: true,
  })
  @Column()
  password: string;

  imgUrl: string;

  @Column()
  createdDate: string;
  
}