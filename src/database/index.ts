import mongoose from 'mongoose';
import { logger } from '../utils/logger';

export const connect = async (databaseUri: string): Promise<void> => {
	try {
		await mongoose.connect(databaseUri);
		logger.info(
			`Connect to MongoDB: ${mongoose.connection.host}:${mongoose.connection.port}/${mongoose.connection.name}`,
		);
	} catch (error) {
		logger.error('Error connecting to MongoDB:', error);
		process.exit(1);
	}
};

export default mongoose;
