import winston from 'winston';
import { config } from '../config/env.config';
import { Boolean, Color, Enviornment, Level } from '../constants/app.contant';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = (): string => {
  const env = config.NODE_ENV ?? Enviornment.DEVELOPMENT;
  const isDevelopment = env === Enviornment.DEVELOPMENT;
  return isDevelopment ? Level.DEBUG : Level.WARN;
};

const colors = {
  error: Color.RED,
  warn: Color.YELLOW,
  info: Color.GREEN,
  http: Color.MAGENTA,
  debug: Color.WHITE,
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: Boolean.TRUE }),
  winston.format.printf(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    (info: any) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

const transports = [new winston.transports.Console()];

const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

export default Logger;
