import express from 'express';
import dotenv from 'dotenv';
import { connect_database } from './config/database.js';
import cors from 'cors';
import loginRouter from './routes/loginRoute.js';
import registerRouter from './routes/registerRoute.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

connect_database();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', registerRouter);
app.use('/api', loginRouter);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
})