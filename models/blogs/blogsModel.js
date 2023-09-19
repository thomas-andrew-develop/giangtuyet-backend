import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const blogSchema = new Schema({
  author: {
    type: ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  categoryID: {
    type: Array,
    required: true,
  },
  sticky: {
    type: Boolean,
    required: true,
  },
},
{
  timestamps: true,
});


const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;