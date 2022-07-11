import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt} from 'passport-jwt';
import { CatsRepository } from "src/cats/cats.repository";
import { Payload } from "./jwt.payload";

//인증시 사용
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly catsRepository: CatsRepository) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secret',
            ignoreExpiration: false,
        })
    }

    // async validate(payload: Payload) {
    //     const cat = await this.catsRepository.findById(
    //         payload.sub,
    //     );
    // }
}