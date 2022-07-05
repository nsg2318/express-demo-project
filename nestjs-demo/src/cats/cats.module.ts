import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { Cat } from './cats.entity';
import { CatsService } from './cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  controllers: [CatsController],
  providers: [CatsService],
  // exports: [CatsService],
})
export class CatsModule {}
