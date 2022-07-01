import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { NextFunction, Request } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger();

  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(req.ip, req.originalUrl);
    next();
  }
}
