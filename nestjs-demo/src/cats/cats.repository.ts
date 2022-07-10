import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cats.entity';
import { CatRequestDto } from "./dto/cats.request.dto";

@Injectable()
export class CatsRepository {
    constructor(
        @InjectRepository(Cat)
        private catRepository: Repository<Cat>,
      ) {}

    async existsByEmail(email: string): Promise<boolean> {
        const result = await this.catRepository.findOne({where: {email: `${email}`}});
        console.log(`결과는 = ${result}`);
        if(result === undefined){
            return false;
        } else {
            return true;
        }
    }

    async save(catRequestDto: CatRequestDto): Promise<Cat> {
        const { email, name, password } = catRequestDto;
        const createdDate: string = Date.now().toString();
        const cat: Cat = this.catRepository.create({
            email,name,password, createdDate
        });

        return this.catRepository.save(cat);
    }
}

