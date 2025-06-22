import dotenv from 'dotenv';
dotenv.config();

type Config = {
  NODE_ENV: string;
  PORT: string;
  MONGO_URL: string;
  JWT_SECRET: string;
  JWT_EXPIRATION: string;
};

export const config: Config = {
  NODE_ENV: process.env.NODE_ENV as '',
  PORT: process.env.PORT as '',
  MONGO_URL: process.env.MONGO_URL as '',
  JWT_SECRET: process.env.JWT_SECRET as '',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION as '',
};
