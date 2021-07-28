const router = require('express').Router();
const jwtAuthz = require('express-jwt-authz');
const checkJwt = require('../utils/checkJwt');
const {
  getAllTodos,
  getSingleTodo,
  postNewTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todos');

// Get all todos
router.get('/', checkJwt, jwtAuthz(['read:todos']), getAllTodos);

// Get a single todo item
router.get('/:id', checkJwt, jwtAuthz(['read:todos']), getSingleTodo);

// Create a new todo item
router.post('/', checkJwt, jwtAuthz(['create:todos']), postNewTodo);

// Update an existing todo item
router.put('/:id', checkJwt, jwtAuthz(['update:todo']), updateTodo);

// Delete a todo item
router.delete('/:id', checkJwt, jwtAuthz(['delete:todo']), deleteTodo);

module.exports = router;
