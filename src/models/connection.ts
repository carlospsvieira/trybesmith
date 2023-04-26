import { createPool } from 'mysql2/promise';

const connection = createPool({
  host: 'db',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'Trybesmith',
});

export default connection;