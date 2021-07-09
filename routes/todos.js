import express from 'express';

const router = express.Router();

// Get all todos
router.get('/api/v1/todos', (req, res) => {
  res.send('List of all items');
});

// Get a single todo item
router.get('/api/v1/todos/:id', (req, res) => {
  res.send('Single Todo item');
});

// Create a new todo item
router.post('/api/v1/todos', (req, res) => {
  res.send('Adding a new todo');
});

// Update an existing todo item
router.put('/api/v1/todos/:id', (req, res) => {
  res.send('Updating a todo');
});

// Delete a todo item
router.delete('/api/v1/todos/:id', (req, res) => {
  res.send('Item deleted');
});

export default router;
