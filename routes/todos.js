const router = require('express').Router();
const requireAuth = require('../middlewares/auth');

// Get all todos
router.get('/', requireAuth, (req, res) => {
  res.send('List of all items');
});

// Get a single todo item
router.get('/:id', requireAuth, (req, res) => {
  res.send('Single Todo item');
});

// Create a new todo item
router.post('/', requireAuth, (req, res) => {
  res.send('Adding a new todo');
});

// Update an existing todo item
router.put('/:id', requireAuth, (req, res) => {
  res.send('Updating a todo');
});

// Delete a todo item
router.delete('/:id', requireAuth, (req, res) => {
  res.send('Item deleted');
});

module.exports = router;
