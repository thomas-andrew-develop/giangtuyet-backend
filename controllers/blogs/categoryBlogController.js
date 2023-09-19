import { categoryBlogService } from '../../services';

const getCategoryBlogList = async (req, res) => {
  try {
    console.log(req.query);
    const search = req.query.search || null;
    const limit = Math.max(1, parseInt(req.query.limit || '10'));
    const page = Math.max(1, parseInt(req.query.page) || '0');
    const categoryList = await categoryBlogService.getCategoryBlogList(search, page, limit);
    const total = await categoryBlogService.countCategoryBlog();
    console.log('total', total);
    const totalPage = Math.ceil(total / limit);
    console.log(totalPage);
    return res.status(200).json({
      data: categoryList,
      page: page,
      limit: limit,
      totalPage: totalPage
    });
  } catch (error) {
    throw error;
  }
}

const createCategoryBlogList = async (req, res) => {
  await categoryBlogService.createCategoryBlog(req.body);
  return res.status(200).json('success');
}

module.exports = {
  getCategoryBlogList,
  createCategoryBlogList
}