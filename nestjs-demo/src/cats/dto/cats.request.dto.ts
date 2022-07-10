
import { ApiProperty, PickType } from '@nestjs/swagger';
import {IsNotEmpty, IsEmail, IsString} from 'class-validator';
import { Cat } from '../cats.entity';

//type 또는 인터페이스가 아닌 클래스로 하는 이유는, 데코레이터 패턴 적용가능한 이유 + 상속으로 재사용성을 위함 =
export class CatRequestDto extends PickType(Cat,['email','name','password' as const]){}