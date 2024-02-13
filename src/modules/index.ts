import { Request, Response, Router } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { logger } from '../utils';

const clearFileName = (fileName: string) => {
	const file = fileName.split('.').shift();
	return file;
};

const router = Router();

// Health check
router.get('/health', (_req: Request, res: Response) => {
	res.status(200).json({ message: 'Server is running' });
});

const modulesPath = path.join(__dirname, './');
const modules = fs.readdirSync(modulesPath);

modules.forEach((module) => {
	const modulePath = path.join(modulesPath, module);
	const routesPath = path.join(
		modulePath,
		`${clearFileName(module)}.routes.ts`,
	);
	if (fs.existsSync(routesPath)) {
		const routes = require(routesPath).default;
    const name = clearFileName(module);
		logger.info(`Load routes: /${name}`);
		router.use(`/api/${name}`, routes);
	}
});

export default router;