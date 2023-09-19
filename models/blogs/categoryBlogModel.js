import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const categoryBlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  description: String,
  category_parent_id: ObjectId,
},
{
  timestamps: true,
})


const CategoryBlog = mongoose.model('category_blog', categoryBlogSchema);

module.exports = CategoryBlog;