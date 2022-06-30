import { CatsService } from './cats/cats.service';
import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly appService: AppService;
  private readonly catsService: CatsService;

  constructor(appService: AppService, catsService: CatsService) {
    this.appService = appService;
    this.catsService = catsService;
  }

  @Get('hello')
  getHello(): string {
    const result: string = this.appService.getHello();
    return result;
  }

  @Get('hello/catss')
  getCat() {
    return this.catsService.getHelloCats();
  }
}
