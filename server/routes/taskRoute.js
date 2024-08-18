import express from 'express';
import { addTask } from '../controller/taskController.js';
import { authMiddleware } from '../middleware/Auth.js';

const taskRouter = express.Router();

taskRouter.post('/addTask', authMiddleware, addTask);

export default taskRouter;