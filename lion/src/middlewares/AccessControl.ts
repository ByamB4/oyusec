// import { User } from '@prisma/client';
import * as express from 'express';
import HttpException from '../utils/HttpException';

type accessRole =
  | 'orderReadAccess'
  | 'userAddAccess'
  | 'projectReadAccess'
  | 'designReadWriteAccess'
  | 'materialReportReadAccess'
  | 'paymentHistoryReadAccess'
  | 'passwordWriteAccess'
  | 'imageWriteAccess';

export default (roles: accessRole[]) => {
  return (_req: express.Request, _res: express.Response, _next: express.NextFunction) => {
    // const user: Partial<User> = _req.user;
    // for (const role of roles) {
    //   // console.log({ role, userRole: user[role] });
    //   if (user[role]) {
    //     return _next();
    //   }
    // }
    _next(new HttpException(401, `unauthorized, do not have access. [${roles.join(', ')}]`));
  };
};
