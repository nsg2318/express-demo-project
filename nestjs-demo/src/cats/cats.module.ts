import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  //이 방법 외 사용할 모듈에서 provider 등록해서 사용가능(그러나 권장되지 않음. 수기로 입력해줘야해서 관리가 힘듦)
  //따라서 이런식으로 exports하여 public으로 선언
  exports: [CatsService],
})
export class CatsModule {}
