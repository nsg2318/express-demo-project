import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){}
//AuthGuard는 (같은 디렉토리 내?) strategy를 자동으로 실행해줌