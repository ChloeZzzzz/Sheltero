const mongoose = require('mongoose');

const authorSchema = mongoose.Schema(
  {
    id: String,
    first_name: String,
    last_name: String
  }
)

const Author = mongoose.Model("Author", authorSchema);

module.exports= Author;

require('./author');