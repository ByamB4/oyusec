import * as express from 'express';
import HttpException from '../utils/HttpException';

export default (err: HttpException, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  // handle errors
  const statusCode = err.status || 500;
  const message = err.message || 'Something went wrong';
  res.status(statusCode).json({
    status: false,
    message,
    data: null,
  });
  console.log('\x1b[36m', '------------------------------ERROR---------------------------------', '\x1b[0m');
  console.log('\x1b[36m', '------------------------------BODY----------------------------------', '\x1b[0m');
  console.log(_req.body);
  console.log('\x1b[36m', '------------------------------TRACE---------------------------------', '\x1b[0m');
  console.error(err);
  console.log('\x1b[36m', '--------------------------------------------------------------------', '\x1b[0m');
};
