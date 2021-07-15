const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const todoRoutes = require('./routes/todos');

const app = express();
const PORT = process.env.PORT || 8080;

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to MongoDB Atlas')
);

// middlwares
app.use(cors());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use('/api/v1/todos', todoRoutes);

app.get('/', (req, res) => {
  res.send('Hello there, nothing to see here!');
});

app.listen(PORT, () => {
  console.log(`Backend service running on port ${PORT}`);
});
