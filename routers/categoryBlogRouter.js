import express from 'express';
import { categoryBlogController } from '../controllers';
const router = express.Router();

const categoryBlogRouter = () => {
  router.get('/list', categoryBlogController.getCategoryBlogList);
  router.post('/create', categoryBlogController.createCategoryBlogList);

  return router;
}

module.exports = categoryBlogRouter;