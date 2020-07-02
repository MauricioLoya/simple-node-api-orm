import { Router } from 'express';
import UserController from './UserController';
import userRules from './userRules';
import validateRequest from '../../middlewares/validateRequest';

const userRouter = Router();
const userController = new UserController();

// Add your endpoints here
userRouter.route('/user').get(
  userController.listUsers
);

userRouter.route('/user').post(
  userRules.postUser,
  validateRequest,
  userController.addUser
);

userRouter.route('/user/:userId').get(
  userController.findUser
);

export default userRouter;
