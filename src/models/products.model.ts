import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Product } from '../types/Product';
import connection from './connection';

async function insertProduct(name: string, amount: string): Promise<Product> {
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  const product = { id, name, amount };
  return product;
}

async function getAllProducts(): Promise<Product[]> {
  const [row] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products',
  );

  return row as Product[];
}

export { getAllProducts, insertProduct };
