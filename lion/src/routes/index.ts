import { Router } from 'express';
import { AuthController, UserController } from '../controllers';

export default () => {
  const routes = Router();

  routes.use('/auth', AuthController());
  routes.use('/user', UserController());
  return routes;
};
