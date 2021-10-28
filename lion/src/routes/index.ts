import { Router } from 'express';
import { AuthController } from '../controllers';

export default () => {
  const routes = Router();

  routes.use('/auth', AuthController());
  return routes;
};
