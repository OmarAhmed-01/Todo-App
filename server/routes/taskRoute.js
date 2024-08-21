import express from 'express';
import { addTask, deleteTask, getTask, updateTask } from '../controller/taskController.js';
import { authMiddleware } from '../middleware/Auth.js';

const taskRouter = express.Router();

taskRouter.post('/addTask', authMiddleware, addTask);
taskRouter.get('/fetchTask', authMiddleware, getTask);
taskRouter.delete('/deleteTask', deleteTask);
taskRouter.put('/updateTask/:id', updateTask);

export default taskRouter;