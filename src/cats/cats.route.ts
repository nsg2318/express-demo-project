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

router.put("/cats/:id", (req,res) => {
  try {
    const param: {id: string} = req.params;
    const body = req.body;
    let result;
    Cats.forEach((cat) => {
      if(cat.id === param.id) {
        cat = body;
        result = cat;
      }
    })
    const cat = Cats.find((cat) => {return cat.id === param.id});
    res.status(200).send({
      success: true,
      data: {
        cat: result, 
      },
    })
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    })
  }
})

router.patch("/cats/:id", (req,res) => {
  try {
    const param: {id: string} = req.params;
    const body = req.body;
    let result;
    Cats.forEach((cat) => {
      if(cat.id === param.id) {
        //구조 분해 할당 기존 키에서 중복되는 부분 value값을 바꿔준다.
        cat = { ...cat, ...body};
        result = cat;
      }
    })
    const cat = Cats.find((cat) => {return cat.id === param.id});
    res.status(200).send({
      success: true,
      data: {
        cat: result, 
      },
    })
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    })
  }
})


router.delete("/cats/:id",(req,res)=> {
  try {
    const param = req.params;
    const newCat = Cats.filter((cat)=> cat.id !== param.id);
    const id: string = req.params.id;
    const cat = Cats.find((cat)=> {return cat.id === id}); 
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    })
  }
})

//등록된 라우터 export
export default router;