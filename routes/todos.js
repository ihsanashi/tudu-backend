const router = require('express').Router();
const verify = require('../helpers/verifyToken');

// Get all todos
router.get('/', verify, (req, res) => {
  res.send('List of all items');
});

// Get a single todo item
router.get('/:id', verify, (req, res) => {
  res.send('Single Todo item');
});

// Create a new todo item
router.post('/', verify, (req, res) => {
  res.send('Adding a new todo');
});

// Update an existing todo item
router.put('/:id', verify, (req, res) => {
  res.send('Updating a todo');
});

// Delete a todo item
router.delete('/:id', verify, (req, res) => {
  res.send('Item deleted');
});

module.exports = router;
