import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response, Router } from 'express';
import * as passport from 'passport';
import { JWTExpire } from '../constants';
import { JWTPayload } from '../interfaces';
import { URL } from 'url';
import { HttpException } from '../utils';

class AuthController {
  public async getCurrentUser(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json({
        status: true,
        message: 'okay',
        data: {
          user: req.user,
        },
      });
    } catch (error) {
      next(new HttpException(500, error.message));
    }
  }
  public async googleCallback(req: Request, res: Response, next: NextFunction) {
    try {
      const user = req.user as any;
      const payload: JWTPayload = {
        id: user.id,
        googleId: user.googleId,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: JWTExpire,
      });

      const redirectUrl = new URL(
        `${process.env.FRONTEND_URL}?token=${token}&googleAccessToken=${user.googleAccessToken}&googleRefreshToken=${user.googleRefreshToken}`,
      );
      res.redirect(redirectUrl.toString());
    } catch (error) {
      next(new HttpException(500, error.message));
    }
  }

  public async facebookCallback(req: Request, res: Response, next: NextFunction) {
    try {
      const user = req.user as any;
      const payload: JWTPayload = {
        id: user.id,
        facebookId: user.facebookId,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: JWTExpire,
      });

      const redirectUrl = new URL(
        `${process.env.FRONTEND_URL}/redirect?token=${token}&facebookAccessToken=${user.facebookAccessToken}`,
      );
      res.redirect(redirectUrl.toString());
    } catch (error) {
      next(new HttpException(500, error.message));
    }
  }
}

export default () => {
  const controller = new AuthController();
  const router = Router();
  router.get('/user', passport.authenticate('jwt', { session: false }), controller.getCurrentUser);
  router.get(
    '/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
      accessType: 'offline',
      prompt: 'consent',
    }),
  );
  router.get(
    '/google/callback',
    passport.authenticate('google', {
      session: false,
    }),
    controller.googleCallback,
  );
  router.get(
    '/facebook',
    passport.authenticate('facebook', {
      scope: ['email', 'public_profile', 'user_photos'],
    }),
  );
  router.get('/facebook/callback', passport.authenticate('facebook', { session: false }), controller.facebookCallback);
  return router;
};
