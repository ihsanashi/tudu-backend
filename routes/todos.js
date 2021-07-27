const router = require('express').Router();
const jwtAuthz = require('express-jwt-authz');
const {
  getAllTodos,
  getSingleTodo,
  postNewTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todos');

// Get all todos
router.get('/', jwtAuthz(['read:todos']), getAllTodos);

// Get a single todo item
router.get('/:id', jwtAuthz(['read:todo']), getSingleTodo);

// Create a new todo item
router.post('/', jwtAuthz(['create:todos']), postNewTodo);

// Update an existing todo item
router.put('/:id', jwtAuthz(['update:todo']), updateTodo);

// Delete a todo item
router.delete('/:id', jwtAuthz(['delete:todo']), deleteTodo);

module.exports = router;
