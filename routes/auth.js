const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userValidation = require('../helpers/userValidation');

// Registration
router.post('/register', async (req, res) => {
  // Validate inputs before saving data
  const { error } = userValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  // Check if the user already exists in the database
  const emailExist = await User.findOne({ email: req.body.email });

  if (emailExist)
    return res.status(400).send('Email already exists. Try logging in.');

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create a new user
  const user = new User({
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Login
router.post('/login', async (req, res) => {
  // Validate inputs before saving data
  const { error } = userValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  // Check if a user exists with the entered email
  const user = await User.findOne({ email: req.body.email });

  if (!user)
    return res.status(400).send('We could not find a user with that email.');

  // Check if password is correct
  const passwordIsValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!passwordIsValid) return res.status(400).send('Password is incorrect.');

  // Create and assign user a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send({ token: token });
});

module.exports = router;
