import express, { Application } from 'express';
import morgan from 'morgan';
import { Request, Response } from 'express';
import { createConnection } from "typeorm";

//Routes
import userRouter from './modules/user/userRoutes';
import photoRouter from './modules/photos/photoRoutes';


export default class Server {

  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    // Enable CORS
    this.app.use((req: Request, res: Response, next) => {
      res.header("Access-Control-Allow-Origin", "*"); // Update to match the domain you will make the request from
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    this.settings();
    this.middleware();
    this.routes();
  }

  settings = () => {
    this.app.set('port', this.port || process.env.PORT || 4300);
  };

  middleware = () => {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  };

  routes = () => {
    // Add your routes here
    this.app.use(userRouter);
    this.app.use(photoRouter);
  };

  createConnection = async () => {
    await createConnection();
  }

  listen = async () => {
    await this.app.listen(this.app.get('port'));
    console.log('Server on port', this.app.get('port'));
  };
}
