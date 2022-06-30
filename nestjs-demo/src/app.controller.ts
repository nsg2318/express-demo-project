import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  private readonly appService: AppService;

  constructor(appService: AppService) {
    this.appService = appService;
  }
  // constructor(private readonly appService: AppService) {}

  @Get('hello/:id')
  getHello(@Req() req: Request, @Body() Body, @Param() Param): string {
    console.log(req);
    console.log(Body);
    console.log(Param);
    const result: string = this.appService.getHello();
    return result;
  }
}
