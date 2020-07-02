import { Router } from 'express';
import AuthController from './authController';

const authRouter = Router();
const authController = new AuthController();

authRouter.route('/login').post(authController.login);
