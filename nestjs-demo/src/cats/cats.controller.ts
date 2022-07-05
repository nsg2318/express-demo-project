import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/commons/exceptions/http-exception.filter';
import { PositiveIntPipe } from 'src/commons/positiveInt.pipe';
import { SuccessInterceptor } from 'src/commons/interceptors/success.interceptor';
import { Any } from 'typeorm';
import { CatRequestDto } from './dto/cats.request.dto';
import { CatsService } from './cats.service';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(SuccessInterceptor)
export class CatsController {
  private readonly catsService: CatsService;

  constructor(catsService: CatsService) {
    this.catsService = catsService;
  }

  @Get()
  getCurrentCat() {
    return { cats: 'current cat' };
  }

  @Post()
  async signUp(@Body() catRequestDto: CatRequestDto): Promise<any> {
    return await this.catsService.signUp(catRequestDto);
  }

  @Post('login')
  logIn() {
    return 'login';
  }

  @Post('logout')
  logOut() {
    return 'logOut';
  }

  @Post('upload/cats')
  uploadImg() {
    return 'upload';
  }
}
