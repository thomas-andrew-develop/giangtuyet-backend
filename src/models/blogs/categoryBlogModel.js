import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const categoryBlogSchema = new Schema({
  title: String,
  slug: String,
  description: String,
  category_parent_id: ObjectId,
},
{
  timestamps: true,
})


const CategoryBlog = mongoose.model('category_blog', categoryBlogSchema);

module.exports = CategoryBlog;