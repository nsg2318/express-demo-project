import * as express from "express";
import catsRouter from './cats/cats.route';


class Server {
  public app: express.Application;

  constructor(){
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(express.json());
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    //logging
    this.app.use((req, res, next) => {
    console.log(req.rawHeaders[1]);
    console.log(`this is middleware`);
    next();
  })
    
  this.app.use((req,res,next) => {
    res.send({error: '라우터를 찾지 못하였습니다.'});
  })
  
  }

  public listen() {
    this.setRoute();
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log('server is on ...');
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();


