const Todo = require('../models/todo');

const getAllTodos = async (req, res) => {
  try {
    const todo = await Todo.find();
    res.header(
      'Access-Control-Allow-Origin',
      process.env.NODE_ENV === 'production'
        ? 'https://tudu-backend-api.herokuapp.com/'
        : 'http://localhost:8080/api/v1/todos'
    );
    res.status(200).json(todo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getSingleTodo = async (req, res) => {
  res.send('Single todo item');
};

const postNewTodo = (req, res) => {
  res.send('Creating a new todo');
};

const updateTodo = (req, res) => {
  res.send('Update a todo');
};

const deleteTodo = (req, res) => {
  res.send('Item deleted');
};

module.exports = {
  getAllTodos,
  getSingleTodo,
  postNewTodo,
  updateTodo,
  deleteTodo,
};
