import * as express from "express";
import catsRouter from './cats/cats.route';

const app: express.Express = express();

//logging
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log(`this is middleware`);
  next();
})

app.use(express.json());

app.use(catsRouter);

app.use((req,res,next) => {
  res.send({error: '라우터를 찾지 못하였습니다.'});
})
app.listen(8000, () => {
  console.log('server is on ...');
});
