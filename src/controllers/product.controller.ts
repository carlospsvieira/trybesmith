import { Request, Response } from 'express';
import { handleAllProducts, handleInsertProduct } from '../services/products.service';

async function createNewProduct(req: Request, res: Response) {
  const { name, amount } = req.body;
  const result = await handleInsertProduct(name, amount);
  return res.status(201).json(result);
}

async function findAllProducts(_req: Request, res: Response) {
  const result = await handleAllProducts();
  return res.status(200).json(result);
}

export { findAllProducts, createNewProduct };