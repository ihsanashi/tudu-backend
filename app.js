const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const todoRoutes = require('./routes/todos');

const PORT = process.env.PORT || 8080;
dotenv.config();

// cors
app.use(cors());

// Connect to DB and start server
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Backend service running on port ${PORT}`);
    })
  )
  .catch((error) => console.log(error.message));

app.get('/', (req, res) => {
  res.send('Hello there, nothing to see here!');
});

// middlewares
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use('/api/v1/todos', todoRoutes);
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Resource not found' });
});

// error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  return res
    .status(err.status)
    .json({ message: err.message, 'status code': err.status });
});
