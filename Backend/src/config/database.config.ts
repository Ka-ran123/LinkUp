import mongoose from 'mongoose';
import { config } from './env.config';
import Logger from '../utils/logger';

export const connectDB = async () => {
  const connectionInstance = await mongoose.connect(config.MONGO_URL, {
    autoIndex: true,
  });
  Logger.info(
    `MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
  );
};
