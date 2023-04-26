import express from 'express';
import productRoutes from './routers/productRoutes';
import userRoutes from './routers/userRoutes';
import orderRoutes from './routers/orderRoutes';
import errorMiddleware from './middleware/error.middleware';

const app = express();

app.use(express.json());
app.use(productRoutes);
app.use(userRoutes);
app.use(orderRoutes);
app.use(errorMiddleware);

export default app;
