const mongoose = require('mongoose');

const authorSchema = mongoose.Schema(
  {
    first_name: String,
    last_name: String
  }
)

const Author = mongoose.model("author", authorSchema, "author");

module.exports= Author;

require('./author');