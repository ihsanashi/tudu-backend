const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const dotenv = require('dotenv');

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

module.exports = checkJwt;
