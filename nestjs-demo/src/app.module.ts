import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { typeORMConfig } from './commons/configs/typeorm.config';
import { LoggerMiddleware } from './commons/middlewares/logger.middleware';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CatsModule, TypeOrmModule.forRoot(typeORMConfig), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
