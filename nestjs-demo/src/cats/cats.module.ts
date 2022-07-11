import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CatsController } from './cats.controller';
import { Cat } from './cats.entity';
import { CatsRepository } from './cats.repository';
import { CatsService } from './cats.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cat]),
    forwardRef(() => AuthModule),
  ],
  controllers: [CatsController],
  providers: [CatsService, CatsRepository,],
  exports: [CatsService, CatsRepository],
})
export class CatsModule {}
