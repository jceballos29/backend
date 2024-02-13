import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import config from './config';
import { connect } from './database';
import productRoutes from './modules/products/products.routes';
import { logger } from './utils/logger';
import router from './modules';

dotenv.config();
const app: Application = express();
const PORT: number = config.get<number>('PORT');

app.use(express.json());
app.use(cors({ origin: '*'}));

app.use('/', router);

app.listen(PORT, async () => {
  logger.info(`Server is running at http://${config.get<string>("HOST")}:${PORT}`);
  await connect(config.get<string>('MONGO_URI'));
});
