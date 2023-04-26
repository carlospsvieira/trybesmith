import { Router } from 'express';
import { createNewProduct, findAllProducts } from '../controllers/product.controller';

const router = Router();

router
  .get('/products', findAllProducts)
  .post('/products', createNewProduct);

export default router;