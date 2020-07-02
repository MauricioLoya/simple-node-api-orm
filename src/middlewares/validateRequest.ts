import { Request, Response } from "express";
import { validationResult } from "express-validator";

export default (req: Request, res: Response, next: Function) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  next();
};
