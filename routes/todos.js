const router = require('express').Router();

// Get all todos
router.get('/', (req, res) => {
  res.send('List of all items');
});

// Get a single todo item
router.get('/:id', (req, res) => {
  res.send('Single Todo item');
});

// Create a new todo item
router.post('/', (req, res) => {
  res.send('Adding a new todo');
});

// Update an existing todo item
router.put('/:id', (req, res) => {
  res.send('Updating a todo');
});

// Delete a todo item
router.delete('/:id', (req, res) => {
  res.send('Item deleted');
});

module.exports = router;
