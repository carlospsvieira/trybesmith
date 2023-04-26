import express from 'express';
import productRoutes from './routers/productRoutes';
import errorMiddleware from './middleware/error.middleware';

const app = express();

app.use(express.json());
app.use(productRoutes);
app.use(errorMiddleware);

export default app;
