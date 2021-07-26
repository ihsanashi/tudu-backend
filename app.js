const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const app = express();
const todoRoutes = require('./routes/todos');

const PORT = process.env.PORT || 8080;
dotenv.config();

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.JWT_JWKS_URI,
  }),
  audience: process.env.JWT_AUDIENCE,
  issuer: process.env.JWT_ISSUER,
  algorithms: ['RS256'],
});

// Connect to DB and start server
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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

// middlwares
app.use(cors());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(checkJwt);
app.use('/api/v1/todos', todoRoutes);
