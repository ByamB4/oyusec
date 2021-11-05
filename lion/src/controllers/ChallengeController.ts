import { PrismaClient } from '.prisma/client';
import { NextFunction, Request, Response, Router } from 'express';
import { HttpException } from '../utils';

const prisma = new PrismaClient();

class ChallengeController {
  public async getList(_req: Request, res: Response, next: NextFunction) {
    try {
      const record = await prisma.challenge.findMany({});
      return res.status(200).json({ status: true, data: record });
    } catch (error) {
      next(new HttpException(500, error.message));
    }
  }
}
export default () => {
  const controller = new ChallengeController();
  const router = Router();
  router.get('/list', controller.getList);

  return router;
};
