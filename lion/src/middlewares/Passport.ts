import * as passport from 'passport';
import * as refresh from 'passport-oauth2-refresh';
import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { PrismaClient, User } from '@prisma/client';
import { VerifyCallback } from 'jsonwebtoken';
import { JWTPayload, CustomGoogleInterface } from '../interfaces';

const prisma = new PrismaClient();

const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.HOST}/api/v1/auth/google/callback`,
  },
  async (_accessToken: string, _refreshToken: string, profile: any, done: VerifyCallback) => {
    const googleUser: CustomGoogleInterface = profile._json;

    const userFoundWithEmail = await prisma.user.findUnique({
      where: { email: googleUser.email },
    });

    let user: User;
    if (userFoundWithEmail) {
      // user with email exists
      if (userFoundWithEmail.googleId === googleUser.sub) {
        // user already linked his google with his account
        user = userFoundWithEmail;
      } else {
        // link user with googleId
        const updatedUser = await prisma.user.update({
          where: {
            email: googleUser.email,
          },
          data: {
            googleId: googleUser.sub,
            firstName: googleUser.given_name,
            lastName: googleUser.family_name,
            avatar: googleUser.picture,
          },
        });

        user = updatedUser;
      }
    } else {
      const newUser: User = await prisma.user.create({
        data: {
          email: googleUser.email,
          firstName: googleUser.given_name,
          lastName: googleUser.family_name,
          googleId: googleUser.sub,
          avatar: googleUser.picture,
        },
      });
      user = newUser;
    }

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        googleAccessToken: _accessToken,
        googleRefreshToken: _refreshToken,
      },
    });

    done(null, { ...user, googleAccessToken: _accessToken, googleRefreshToken: _refreshToken });
  },
);

export default () => {
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
      },
      async (jwtPayload: JWTPayload, done) => {
        try {
          const user = await prisma.user.findUnique({
            where: {
              id: jwtPayload.id,
            },
          });
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      },
    ),
  );

  passport.serializeUser((user: User, done) => {
    console.log('serializeUser:', user);
    done(null, user.id);
  });

  passport.deserializeUser(async (id: string, done) => {
    console.log('deserializeUser:', id);

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    done(null, user);
  });

  // google oauth2
  passport.use(googleStrategy);
  refresh.use(googleStrategy);
};
