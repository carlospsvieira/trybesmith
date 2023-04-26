import { Router } from 'express';
import findAllOrders from '../controllers/orders.controller';

const router = Router();

router
  .get('/orders', findAllOrders);

export default router;