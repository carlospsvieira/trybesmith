import getAllOrders from '../models/orders.model';

async function handleAllOrders() {
  const result = await getAllOrders();

  if (!result) {
    throw new Error('PRODUCTS NOT FOUND');
  }

  return result;
}

export default handleAllOrders;