import * as express from "express";
import {Cats, Cat} from './app.model';

const app: express.Express = express();

//미들 웨어 인터셉팅 같은 기능. Express는 위에서부터 찾으므로, app.use 가 중간 또는 아래에 있으면 그 위의 라우터에는 작동하지 않는다.
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log(`this is middleware`);
  next();
})

//use라고 안 하고, HTTP 메서드라도 next 파라미터만 주면 같은 기능을 만들 수 있다. 이 경우 /cats/blue 엔드포인트에 대해
//use 미들웨어, get미들웨어, get라우터 순으로 실행된다.
app.get('/cats/blue', (req, res, next) => {
  console.log('blue middle ware');
  next();
})

app.get('/', (req: express.Request, res: express.Response) => {
  res.send(Cats);
})

app.get('/cats/blue', (req, res) => {
  res.send(Cats[0]);
})

app.use((req,res,next) => {
  console.log('아무 라우터도 찾지 못했습니다.');
  res.send('아무 라우터도 찾지 못했습니다.');
})
app.listen(8000, () => {
  console.log('server is on ...');
});
