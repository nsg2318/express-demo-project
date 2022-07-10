import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cats.entity';
import { CatRequestDto } from './dto/cats.request.dto';

@Injectable()
export class CatsService {

  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<Cat>,
  ) {}

  // 왜 이렇게는 안되는 지
  // @InjectRepository(Cat)
  // private readonly catRepository: Repository<Cat>;

  // constructor(catResitory: Repository<Cat>) {
  //   this.catRepository = catResitory;
  // }

  async signUp(catRequestDto: CatRequestDto): Promise<Cat> {
    const { email, name, password } = catRequestDto;
    const createdDate: string = Date.now().toString();
    // const catOne = await this.catRepository.findOne(email);
    // if(catOne !== null){
    //   throw new HttpException(`already exists. catOne = ${catOne}`,403);
    // }

    // install error! 
    // const hashedPassword = await bycript

    const cat: Cat = this.catRepository.create({
      email,name,password, createdDate
    });

    this.catRepository.save(cat);

    return cat;
  }
  public getHelloCats(): string {
    return 'hello cats world~!';
  }
}
