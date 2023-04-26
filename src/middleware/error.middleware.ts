import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (err: unknown, _req, res, _next) => {
  if (err instanceof Error && err.message === 'PRODUCT NOT AUTHORIZED') {
    return res.status(401).json({ message: 'Could not enter product' });
  }

  if (err instanceof Error && err.message === 'PRODUCTS NOT FOUND') {
    return res.status(404).json({ message: 'Could not find products' });
  }

  return res.status(500).json({ message: 'Unexpected Error' });
};

export default errorMiddleware;