import { Request, Response } from "express";
import createUser from "./services/createUser";
import { User } from "../../entity/User";
import findUserById from "./services/findUserById";
import getAllUsers from "./services/getAllUsers";

export default class UserController {

  listUsers = async (req: Request, res: Response) => {
    let users = await getAllUsers();
    users = users?.map((user: User) => {
      delete user.password;
      return user;
    });
    res.json({ users, error: false });
  };

  /**
   * @swagger
   * definitions:
   *  User:
   *    type: object
   *    properties:
   *      name:
   *        type: string
   *
   */
  addUser = async (req: Request, res: Response) => {
    const user = req.body.user;
    const result = await createUser(user as User);
    // Hidden password
    if (result) delete result.password;

    res.json({ result, error: false });
  };

  findUser = async (req: Request, res: Response) => {
    const user = await findUserById(req.params.userId);
    if (user) delete user.password;
    res.json({ user, error: false });
  };



}
