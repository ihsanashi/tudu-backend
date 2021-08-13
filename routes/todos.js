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

const checkScopes = jwtAuthz(['manage:todos']);

// Get all todos
router.get('/', checkJwt, checkScopes, getAllTodos);

// Get a single todo item
router.get('/:id', checkJwt, checkScopes, getSingleTodo);

// Create a new todo item
router.post('/', checkJwt, checkScopes, postNewTodo);

// Update an existing todo item
router.patch('/:id', checkJwt, checkScopes, updateTodo);

// Delete a todo item
router.delete('/:id', checkJwt, checkScopes, deleteTodo);

module.exports = router;
