import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';


//id 정수값을 양으로 바꿔줌
@Injectable()
export class PositiveIntPipe implements PipeTransform {
   transform(value: number) {
        console.log(`value = ${value}`);
        if (value < 0) {
            return -value;
        }
        return value;
   } 
}