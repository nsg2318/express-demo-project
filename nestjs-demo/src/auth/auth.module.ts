import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { CatsModule } from 'src/cats/cats.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt/jwt.strategy';

//jwt 생성 모듈
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', session: false}),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1y' },
    }),
    //providers에서 CatsRepository를 가져오는 것이 아닌 Module자체를 가져옴
    forwardRef(() => CatsModule),
  ],
  providers: [AuthService, JwtStrategy,],
  exports: [AuthService]
})
export class AuthModule {}
