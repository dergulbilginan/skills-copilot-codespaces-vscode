// Create web server
// Start web server
// Create route to handle GET request
// Create route to handle POST request
// Create route to handle PUT request
// Create route to handle DELETE request

// Import express
const express = require('express');

// Create an express application
const app = express();

// Middleware
app.use(express.json());

// Create a list of comments
const comments = [
  { id: 1, author: 'John Doe', text: 'Hello, World!' },
  { id: 2, author: 'Jane Doe', text: 'Hello, Universe!' },
];

// Route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Route to get a single comment
app.get('/comments/:id', (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  if (!comment) return res.status(404).json({ message: 'Comment not found' });
  res.json(comment);
});

// Route to create a comment
app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,