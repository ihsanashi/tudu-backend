const Todo = require('../models/todo');

const getAllTodos = async (req, res) => {
  const userId = req.user.sub;

  try {
    const todos = await Todo.find({ userId });
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

const getSingleTodo = async (req, res) => {
  try {
    let todoItem = await Todo.findById(req.params.id);
    if (todoItem == null) {
      return res.status(404).json({ message: 'Todo item does not exist' });
    }

    return res.status(200).json(todoItem);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const postNewTodo = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.user.sub;

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

const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Todo.findByIdAndUpdate(id, updatedData, options);

    if (!result) {
      return res.status(404).json({
        message: 'Todo item does not exist',
      });
    }
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    let todoItem = await Todo.findByIdAndDelete(req.params.id);
    if (todoItem == null) {
      return res.status(404).json({ message: 'Todo item does not exist' });
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
