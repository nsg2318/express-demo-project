import { ApiProperty, PickType } from "@nestjs/swagger";
import { Cat } from "../cats.entity";

export class ReadOnlyCatDto extends PickType(Cat,['email','name' as const]){
    @ApiProperty({
        example: '3280199',
        description: 'id',
    })
    id: string;
}