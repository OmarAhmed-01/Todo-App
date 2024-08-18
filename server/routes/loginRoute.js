import express from 'express';
import { getUser, login } from '../controller/loginController.js';
import { authMiddleware } from '../middleware/Auth.js';

const loginRouter = express.Router();

loginRouter.post('/login', login);
loginRouter.get('/user', authMiddleware, getUser);

export default loginRouter;