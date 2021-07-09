import express from 'express';
import cors from 'cors';
import todoRoutes from './routes/todos.js';

const app = express();
const PORT = process.env.PORT || 8080;

// middlwares
app.use(cors());
app.use(express.json());
app.use(todoRoutes);

app.get('/', (req, res) => {
  res.send('Hello there!');
});

app.listen(PORT, () => {
  console.log(`Backend service running on port ${PORT}`);
});
