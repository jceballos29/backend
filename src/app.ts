import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import config from './config';
import { connect } from './database';
import { logger } from './utils/logger';
import products from './modules/products/products.routes';

dotenv.config();
const app: Application = express();
const PORT: number = config.get<number>('PORT');

app.use(express.json());
app.use(cors({ origin: '*'}));

app.get('/health', (_req: Request, res: Response) => {
	res.status(200).json({ message: 'Server is running' });
});

app.use('/routes', products);

app.listen(PORT, async () => {
  logger.info(`Server is running on ${PORT}`);
  await connect(config.get<string>('MONGO_URI'));
});
