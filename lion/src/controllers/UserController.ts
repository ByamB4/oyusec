import { User, PrismaClient } from '.prisma/client';
import { NextFunction, Request, Response, Router } from 'express';
import passport = require('passport');
import { HttpException } from '../utils';

const prisma = new PrismaClient();

class UserController {
  public async get(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: (req.user as User).id,
        },
        select: {
          firstName: true,
          lastName: true,
          description: true,
          avatar: true,
          website: true,
          phoneNumber: true,
          address: true,
        },
      });
      // console.log(req.user.id);
      return res.status(200).json({ status: true, data: user });
    } catch (error) {
      next(new HttpException(500, error.message));
    }
  }
}
export default () => {
  const controller = new UserController();
  const router = Router();
  router.get('/', passport.authenticate('jwt', { session: false }), controller.get);

  return router;
};
