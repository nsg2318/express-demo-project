import { CatsService } from './cats.service';
import {
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
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/commons/exceptions/http-exception.filter';
import { PositiveIntPipe } from 'src/commons/positiveInt.pipe';

@Controller('cats')
export class CatsController {
  private readonly catsService: CatsService;

  constructor(catsService: CatsService) {
    this.catsService = catsService;
  }

  @Get()
  @UseFilters(HttpExceptionFilter)
  getAllCat() {
    throw new HttpException('api is broken', HttpStatus.BAD_REQUEST);
    return 'all cat';
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param) {
    console.log(typeof param);
    return param;
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'update part';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete';
  }
}
