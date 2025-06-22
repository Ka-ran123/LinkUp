import express from 'express';
import './config/database.config';
import { connectDB } from './config/database.config';
import Logger from './utils/logger';
import { config } from './config/env.config';

const app = express();

connectDB().then(() => {
  app.listen(config.PORT, () => {
    Logger.info(
      `Server running in ${config.NODE_ENV} mode on port ${config.PORT}`
    );
  });
});

