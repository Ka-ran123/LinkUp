import express from 'express';
import './config/database.config';
import { connectDB } from './config/database.config';
import Logger from './utils/logger';
import { config } from './config/env.config';
import errorHandler from './middlewares/errorHandler.middleware';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(errorHandler);

connectDB().then(() => {
  app.listen(config.PORT, () => {
    Logger.info(
      `Server running in ${config.NODE_ENV} mode on port ${config.PORT}`
    );
  });
});
