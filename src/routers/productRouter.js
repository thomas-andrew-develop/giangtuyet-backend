import express from 'express';
const router = express.Router();

const productRouter = () => {
  router.get('/list', (req, res) => {
    res.send('products');
  })

  return router;
}

export default productRouter;