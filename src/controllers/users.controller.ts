import { Request, Response } from 'express';
import handleInsertUser from '../services/users.service';

async function createNewUser(req: Request, res: Response) {
  const { username, vocation, level, password } = req.body;
  const result = await handleInsertUser(username, vocation, level, password);
  return res.status(201).json(result);
}

export default createNewUser;