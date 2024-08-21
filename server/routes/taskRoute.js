import express from 'express';
import { addTask, deleteTask, getTask } from '../controller/taskController.js';
import { authMiddleware } from '../middleware/Auth.js';

const taskRouter = express.Router();

taskRouter.post('/addTask', authMiddleware, addTask);
taskRouter.get('/fetchTask', authMiddleware, getTask);
taskRouter.delete('/deleteTask', deleteTask);

export default taskRouter;