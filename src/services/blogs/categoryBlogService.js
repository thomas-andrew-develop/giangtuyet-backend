import { categoryBlogModel } from '../../models';

const countCategoryBlog = async (status) => {
  try {
    const countCategoryList = await categoryBlogModel.countDocuments();
    return countCategoryList;
  } catch (error) {
    throw error;
  }
}

const getCategoryBlogList = async (search, page, limit) => {
  try {
    const categoryList = await categoryBlogModel.find().skip((page - 1) * limit).limit(limit);
    return categoryList;
  } catch (error) {
    throw error;
  }
}

const createCategoryBlog = async (data) => {
  try {
    const { title, slug, description } = data
    await categoryBlogModel.create({
      title,
      slug,
      description
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getCategoryBlogList,
  createCategoryBlog,
  countCategoryBlog
}