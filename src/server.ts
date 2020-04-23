import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';
import 'reflect-metadata';

import routes from './routes';
import uploadConfig from './config/upload';
import AppError from './errors/AppError';
import './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal serve error' });
});

// eslint-disable-next-line no-console
app.listen(3333, () => console.log('🎃 Backend is running'));
