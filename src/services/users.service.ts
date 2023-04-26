import jwt from 'jsonwebtoken';
import insertUser from '../models/users.module';

async function handleInsertUser(
  username: string,
  vocation: string,
  level: number,
  password: string,
) {
  const result = await insertUser(username, vocation, level, password);

  if (!result) {
    throw new Error('USER NOT AUTHORIZED');
  }
  
  return { token: jwt.sign({ username }, `${process.env.JWT_SECRET}`) };
}

export default handleInsertUser;