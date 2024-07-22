import express from 'express';
import { createChain } from './llm';

// Create an Express application
const app = express();

// Set the port number for the server
const port = 4455;

// Define a route for the root path ('/')
app.get('/', async (req, res) => {
  // Send a response to the client
  const response = await createChain()
  res.json(response);
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});
