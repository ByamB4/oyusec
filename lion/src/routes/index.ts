import { Router } from 'express';
import { AuthController, UserController, ChallengeController } from '../controllers';

export default () => {
  const routes = Router();

  routes.use('/auth', AuthController());
  routes.use('/user', UserController());
  routes.use('/challenge', ChallengeController());
  return routes;
};
