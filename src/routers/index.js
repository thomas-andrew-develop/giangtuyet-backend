
import blogRouter from "./blogRouter";
import categoryBlogRouter from "./categoryBlogRouter";
import productRouter from "./productRouter";

const apiRouter = (app) => {
  app.use('/api/v1/blog', blogRouter());
  app.use('/api/v1/category-blog', categoryBlogRouter());
  app.use('/api/v1/product', productRouter());
}

export default apiRouter;