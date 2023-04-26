import express from 'express';
import productRoutes from './routers/productRoutes';
import userRoutes from './routers/userRoutes';
import errorMiddleware from './middleware/error.middleware';

const app = express();

app.use(express.json());
app.use(productRoutes);
app.use(userRoutes);
app.use(errorMiddleware);

export default app;
