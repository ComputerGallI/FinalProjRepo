const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid login' });
  }

  res.json(user);
});

router.get('/fake-seed', async (req, res) => {
  const users = [
    { username: 'IndieMovies', password: '12345!', email: 'indie@example.com', quizResults: [], suggestions: [] },
    { username: 'Ryanator', password: '12345!', email: 'ryan@example.com', quizResults: [], suggestions: [] },
  ];
  await User.insertMany(users);
  res.send('Seeded fake users');
});

module.exports = router;