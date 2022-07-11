import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CatsRepository } from 'src/cats/cats.repository';
import { LoginRequestDto } from './dto/login.request.dto';
import { Payload } from './jwt/jwt.payload';

@Injectable()
export class AuthService {
  constructor(
    private readonly catsRepository: CatsRepository,
    private readonly jwtService: JwtService
    ) {}

  public async jwtLogIn(data: LoginRequestDto) {
    const { email, password } = data;

    const cat = await this.catsRepository.findByEmail(email);

    if(!cat){
      throw new UnauthorizedException('email & password 재확인');
  }

    if(password !== cat.password) {
      throw new UnauthorizedException('패스워드가 일치하지 않습니다.');
  }
    
    const payload: Payload = { email: email, sub: cat.id } ;

    return {
      token: this.jwtService.sign(payload)
    }
  
  }
}
