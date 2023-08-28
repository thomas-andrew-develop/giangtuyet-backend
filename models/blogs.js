const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const BlogsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Blogs', BlogsSchema);