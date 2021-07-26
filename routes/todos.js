const router = require('express').Router();
const {
  getAllTodos,
  getSingleTodo,
  postNewTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todos');

// Get all todos
router.get('/', getAllTodos);

// Get a single todo item
router.get('/:id', getSingleTodo);

// Create a new todo item
router.post('/', postNewTodo);

// Update an existing todo item
router.put('/:id', updateTodo);

// Delete a todo item
router.delete('/:id', deleteTodo);

module.exports = router;
