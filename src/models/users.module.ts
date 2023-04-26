// import { ResultSetHeader } from 'mysql2';
// import { Product } from '../types/Product';
// import connection from './connection';

// async function insertUser(name: string, amount: string): Promise<Product> {
//   const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
//     'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
//     [name, amount],
//   );

//   const product = { id, name, amount };
//   return product;
// }