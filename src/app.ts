import * as express from "express";
import {Cats, Cat} from './app.model';

const app: express.Express = express();

//logging
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log(`this is middleware`);
  next();
})

app.use(express.json());

app.post("/cats",(req: express.Request, res: express.Response) => {
  try {
    //이렇게 body 가져올 수 있어보이지만, express에서는 body 가져오려면 미들웨어 추가해야한다.
    const body = req.body;
    const id: string = body.id;
    const name: string = body.name;
    const newCat: Cat = {
      id: id,
      name: name,
      age: 99,
      species: 'ETC',
      isCute: true,
      friends: ['abcd']
    }
    Cats.push(newCat);
    res.send(newCat);
  } catch (error) {
    console.log('aa');
  }
})

app.get("/cats",(req: express.Request, res: express.Response) => {
  try {
    const cats: Cat[] = Cats;
    res.status(200).send({
      success: true,
      data: {
        cats,
      }
    }); 
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    })
  }
  
})

app.get("/cats/:id",(req: express.Request, res: express.Response) => {
  const id: string = req.params.id;
  const cat = Cats.find((cat) => {return cat.id === id});
  res.status(200).send({
    success: true,
    data: {
      cat,
    }
  })
})

app.use((req,res,next) => {
  res.send({error: '라우터를 찾지 못하였습니다.'});
})
app.listen(8000, () => {
  console.log('server is on ...');
});
