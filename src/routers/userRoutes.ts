import { Router } from 'express';
import createNewUser from '../controllers/users.controller';

const router = Router();

router
  .post('/users', createNewUser);

export default router;