import express from 'express';
import dotenv from 'dotenv';
import { connect_database } from './config/database.js';

dotenv.config();
const app = express()
const port = process.env.PORT || 3000;

connect_database();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
})