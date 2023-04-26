import express from 'express';
import { findAllProducts, createNewProduct } from './controllers/product.controller';

const app = express();

app.use(express.json());

app.get('/products', findAllProducts);
app.post('/products', createNewProduct);

export default app;
