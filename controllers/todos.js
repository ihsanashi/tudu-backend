const Todo = require('../models/todo');

const getAllTodos = async (req, res) => {
  const { userId } = req.body;
  try {
    if (!userId)
      return res.status(400).json({
        message: `Bad request. 'userId' field is required to be a part of request body to query the database.`,
      });
    const todos = await Todo.find({ userId });
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const getSingleTodo = async (req, res) => {
  try {
    let todoItem = await Todo.findById(req.params.id);
    if (todoItem == null) {
      return res.status(404).json({ message: 'Todo item not found' });
    }

    return res.status(200).json(todoItem);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const postNewTodo = async (req, res) => {
  const { title, description, userId } = req.body;

  const todoItem = new Todo({
    title,
    description,
    userId,
  });

  try {
    if (!title) {
      return res
        .status(400)
        .json({ message: 'Bad request. Title field is required.' });
    }

    const newTodo = await todoItem.save();
    return res.status(201).json(newTodo);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// TODO! Work on this update todo function
const updateTodo = async (req, res) => {
  res.send('Update a todo');
};

const deleteTodo = async (req, res) => {
  try {
    let todoItem = await Todo.findByIdAndDelete(req.params.id);
    if (todoItem == null) {
      return res.status(404).json({ message: 'Todo item not found' });
    }

    return res.status(200).json({
      message: `Todo item titled '${todoItem.title}' successfully deleted.`,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTodos,
  getSingleTodo,
  postNewTodo,
  updateTodo,
  deleteTodo,
};
