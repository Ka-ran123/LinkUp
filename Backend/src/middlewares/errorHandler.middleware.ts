// middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import { config } from '../config/env.config';
import Logger from '../utils/logger';

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode = err.statusCode || 500;
  const isProduction = config.NODE_ENV === 'production';

  if (!isProduction) {
    Logger.error(err);
  }

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Something went wrong!',
    stack: isProduction ? null : err.stack,
  });
};

export default errorHandler;
