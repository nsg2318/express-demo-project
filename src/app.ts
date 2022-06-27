import * as express from "express";
import {Cats, Cat} from './app.model';

const app: express.Express = express();

//미들 웨어 인터셉팅 같은 기능. Express는 위에서부터 찾으므로, app.use 가 중간 또는 아래에 있으면 그 위의 라우터에는 작동하지 않는다.
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log(`this is middleware`);
  next();
})

app.get('/', (req: express.Request, res: express.Response) => {
  res.send(Cats);
})

app.get('/cats/blue', (req, res) => {
  res.send(Cats[0]);
})

app.listen(8000, () => {
  console.log('server is on ...');
});
