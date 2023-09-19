import { blogService } from '../../services'

const getBlogsList = async (req, res) => {
  const blogList = await blogService.getBlogList();
  console.log('blogList', blogList);
}

module.exports = {
  getBlogsList
}