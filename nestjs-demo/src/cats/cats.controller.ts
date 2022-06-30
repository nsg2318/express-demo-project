import { CatsService } from './cats.service';
import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  private readonly catsService: CatsService;

  constructor(catsService: CatsService) {
    this.catsService = catsService;
  }

  @Get()
  getAllCat() {
    return 'all cat';
  }

  @Get(':id')
  getOneCat(@Param() param) {
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
