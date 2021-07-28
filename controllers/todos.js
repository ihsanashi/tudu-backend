const Todo = require('../models/todo');

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
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
