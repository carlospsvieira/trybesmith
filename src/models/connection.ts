import { createPool } from 'mysql2/promise';

const connection = createPool({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
});

export default connection;
