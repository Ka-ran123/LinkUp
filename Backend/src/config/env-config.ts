import dotenv from 'dotenv';
dotenv.config();

type Config = {
  NODE_ENV: string;
  PORT: string;
  MONGO_URL: string;
  JWT_SECRET: string;
  CLOUDINARY_CLOUD_NAME: string;
  CLOUDINARY_API_KEY: string;
  CLOUDINARY_API_SECRET: string;
};

export const config: Config = {
  NODE_ENV: process.env.NODE_ENV as '',
  PORT: process.env.PORT as '',
  MONGO_URL: process.env.MONGO_URL as '',
  JWT_SECRET: process.env.JWT_SECRET as '',
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME as '',
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY as '',
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET as '',
};
