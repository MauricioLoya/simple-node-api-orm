import { Request, Response } from "express";

export default (req: Request, res: Response, next: Function) => {
  console.log('Check Token');
  next();
};
