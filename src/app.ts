import * as express from "express";
import {Cats, Cat} from './app.model';

const app: express.Express = express();

const data = [1,2,3,4];

app.get('/', (req: express.Request, res: express.Response) => {
  console.log(req.rawHeaders[1]);
  res.send(Cats);
})

app.get('/cats/blue', (req, res) => {
  console.log(req.rawHeaders[1]);
  res.send(Cats[0]);
})

app.listen(8000, () => {
  console.log('server is on ...');
});
