import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const blogSchema = new Schema({
  author: ObjectId,
  title: String,
  slug: String,
  body: String,
  excerpt: String,
  categoryID: Array,
  image: String
},
{
  timestamps: true,
});


const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;