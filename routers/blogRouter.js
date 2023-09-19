import express from 'express';
import blogsController from '../controllers/blogs/blogsController'
const router = express.Router();

const blogRouter = () => {
  router.get('/list', blogsController.getBlogsList);

  return router;
}

export default blogRouter;