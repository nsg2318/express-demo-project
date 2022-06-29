import {Cats, Cat} from './cats.model';
import {Request, Response} from "express";


export const readAllCats = (req: Request, res: Response) => {
  try {
    const cats: Cat[] = Cats;
    res.status(200).send({
      success: true,
      data: {
        cats,
      }
    }); 
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    })
  }
};

export const createCat = function (req: Request, res: Response)  {
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
    console.log('post');
  }
}


export const readOneCat = ((req: Request, res: Response) => {
  const id: string = req.params.id;
  const cat = Cats.find((cat) => {return cat.id === id});
  res.status(200).send({
    success: true,
    data: {
      cat,
    }
  })
})

export const putOneCat = ((req: Request,res: Response) => {
  try {
    const param = req.params;
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
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    })
  }
})

export const patchOneCat = ((req: Request,res: Response) => {
  try {
    const param = req.params;
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
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    })
  }
})


export const deleteCat = ((req: Request,res: Response)=> {
  try {
    const param = req.params;
    const newCat = Cats.filter((cat)=> cat.id !== param.id);
    const id: string = req.params.id;
    const cat = Cats.find((cat)=> {return cat.id === id}); 
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    })
  }
})
