import express from 'express';
import { createChain } from './llm';
import * as dotenv from "dotenv";
import { connectDB } from './config/mongo'
dotenv.config();
const app = express();
const port = 4455;

app.get('/', async (req, res) => {
  const response = await createChain()
  res.json(response);
});

app.listen(port, async() => {
  await connectDB()
  console.log(`Server is running on http://localhost:${port}`);
});
