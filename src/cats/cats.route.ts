import * as express from "express";
import {Cats, Cat} from './cats.model';


//라우터 인스턴스 생성
const router = express.Router();

//라우터들 등록중 . . .
router.post("/cats",(req: express.Request, res: express.Response) => {
  try {
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

router.get("/cats",(req: express.Request, res: express.Response) => {
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

router.get("/cats/:id",(req: express.Request, res: express.Response) => {
  const id: string = req.params.id;
  const cat = Cats.find((cat) => {return cat.id === id});
  res.status(200).send({
    success: true,
    data: {
      cat,
    }
  })
})

router.delete("/cats/:id",(req,res)=> {
  const id: string = req.params.id;
  const cat = Cats.find((cat)=> {return cat.id === id});
  // 미완성. . .
})

//등록된 라우터 export
export default router;