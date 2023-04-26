import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../types/User';

async function insertUser(
  username: string,
  vocation: string,
  level: number,
  password: string,
): Promise<User> {
  const [row] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  
  return row as unknown as User;
}

export default insertUser;