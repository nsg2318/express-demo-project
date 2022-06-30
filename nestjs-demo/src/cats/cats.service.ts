import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  public getHelloCats(): string {
    return 'hello cats world~!';
  }
}
