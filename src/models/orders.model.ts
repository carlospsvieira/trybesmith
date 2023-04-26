import { RowDataPacket } from 'mysql2';
import { Order } from '../types/Order';
import connection from './connection';

async function getAllOrders(): Promise<Order[]> {
  const [orders] = await connection.execute<RowDataPacket[]>(
    `SELECT orders.id AS id, 
    orders.user_id AS userId, 
    JSON_ARRAYAGG(products.id) AS productsIds 
  FROM 
    Trybesmith.orders 
    JOIN Trybesmith.products ON orders.id = products.order_id 
  GROUP BY 
    orders.id     
    `,
  );

  return orders as Order[];
}

export default getAllOrders;