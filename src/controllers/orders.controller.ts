import { Request, Response } from 'express';
import handleAllOrders from '../services/orders.service';

async function findAllOrders(_req: Request, res: Response) {
  const result = await handleAllOrders();

  return res.status(200).json(result);
}

export default findAllOrders;