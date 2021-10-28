require('dotenv').config({ silent: false });
import * as cors from 'cors';
import * as express from 'express';
import { createServer, Server } from 'http';
import * as morgan from 'morgan';
import * as passport from 'passport';
import { SystemDefaults } from './constants';
import { ErrorResponse, Passport } from './middlewares';
import Routes from './routes';

class MainServer {
  private _app: express.Application;
  private server: Server;
  private port: string | number;

  constructor() {
    Passport();
    this.port = process.env.PORT || SystemDefaults.PORT;
    this._app = express();
    this._app.set('trust proxy', 1);
    this._app.use(cors());
    this._app.use(express.json({ limit: '5mb' }));
    this._app.use(passport.initialize());
    this._app.use(morgan('dev'));
    this._app.options('*', cors());
    this._app.get('/', (_req, res) => {
      res.send('Success');
    });
    this._app.use('/api/v1', Routes());
    this.app.use(ErrorResponse);

    this.server = createServer(this._app);
    this.listen();
  }

  private listen(): void {
    this.server.listen(this.port, () => {
      console.log('*** Listening on port: %s ***', this.port);
    });
  }
  get app(): express.Application {
    return this._app;
  }
}

export default new MainServer().app;
