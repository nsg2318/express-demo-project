import { Injectable } from '@nestjs/common';
import { Cat } from './cats.entity';
import { CatsRepository } from './cats.repository';
import { CatRequestDto } from './dto/cats.request.dto';

@Injectable()
export class CatsService {

  private readonly catsRepository: CatsRepository;

  constructor(catsRepository: CatsRepository) {
    this.catsRepository = catsRepository;
  }

  async signUp(catRequestDto: CatRequestDto): Promise<Cat> {

    const aBool = await this.catsRepository.existsByEmail("aa@aa.com");
    console.log(aBool);

    const cat = this.catsRepository.save(catRequestDto);
    return cat;
  }
  public getHelloCats(): string {
    return 'hello cats world~!';
  }

}
