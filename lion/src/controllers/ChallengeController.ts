import { PrismaClient } from '.prisma/client';
import { NextFunction, Request, Response, Router } from 'express';
import { HttpException } from '../utils';

const prisma = new PrismaClient();

class ChallengeController {
  public async challengeList(_req: Request, res: Response, next: NextFunction) {
    try {
      const record = await prisma.challenge.findMany({
        select: {
          id: true,
          name: true,
          description: true,
          category: {
            select: {
              id: true,
            },
          },
        },
      });
      return res.status(200).json({ status: true, data: record });
    } catch (error) {
      next(new HttpException(500, error.message));
    }
  }
  public async categoryList(_req: Request, res: Response, next: NextFunction) {
    try {
      const record = await prisma.challengeCategory.findMany({});
      return res.status(200).json({ status: true, data: record });
    } catch (error) {
      next(new HttpException(500, error.message));
    }
  }
}
export default () => {
  const controller = new ChallengeController();
  const router = Router();
  router.get('/list', controller.challengeList);
  router.get('/category/list', controller.categoryList);

  return router;
};
