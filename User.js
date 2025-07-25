const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  quizResults: Array,
  suggestions: Array
});

module.exports = mongoose.model('User', userSchema);