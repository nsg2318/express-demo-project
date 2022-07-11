import {
  Body,
  Controller, Get, Post, UseFilters,
  UseInterceptors
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/commons/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/commons/interceptors/success.interceptor';
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/cats.request.dto';
import { ReadOnlyCatDto } from './dto/cats.response.dto';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(SuccessInterceptor)
export class CatsController {
  private readonly catsService: CatsService;
  // private readonly authService: AuthService;

  constructor(catsService: CatsService) {
    this.catsService = catsService;
    // this.authService = authService;
  }

  @Get()
  getCurrentCat() {
    return { cats: 'current cat' };
  }

  @ApiResponse({
    status:200,
    description: '성공',
    type: ReadOnlyCatDto
  })
  @ApiResponse({
    status:500,
    description: 'Server Error...'
  })
  @ApiOperation( { summary: '회원가입' } )
  @Post()
  async signUp(@Body() catRequestDto: CatRequestDto): Promise<any> {
    return await this.catsService.signUp(catRequestDto);
  }

  @ApiOperation( { summary: '로그인' } )
  @Post('login')
  logIn() {
    return 'login';
  }

  @ApiOperation( { summary: '로가웃' } )
  @Post('logout')
  logOut() {
    return 'logOut';
  }

  @ApiOperation( { summary: '업로드' } )
  @Post('upload/cats')
  uploadImg() {
    return 'upload';
  }
}
