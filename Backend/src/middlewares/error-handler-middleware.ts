// middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import { config } from '../config/env-config';
import Logger from '../utils/logger';
import { Enviornment } from '../constants/app-contants';
import messages from '../utils/message';

/**
 * Global error handler middleware.
 *
 * @param {Error} err - The error that occurred.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The Express next function (not used).
 *
 * If the error has a `statusCode` property, it will be used as the HTTP status
 * code. Otherwise, the default is 500 (Internal Server Error). If the server is
 * not running in production mode, the error stack will be logged to the
 * console. The error message will be sent as JSON in the response body.
 */
const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode = err.statusCode || 500;
  const isProduction = config.NODE_ENV === Enviornment.PRODUCTION;

  if (!isProduction) {
    Logger.error(err);
  }

  res.status(statusCode).json({
    success: false,
    message: err.message || messages.common.INTERNAL_ERROR,
    stack: isProduction ? null : err.stack,
  });
};

export default errorHandler;
