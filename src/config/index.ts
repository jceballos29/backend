import zennv from 'zennv';
import { z } from 'zod';

class Config {
	private env: any;

	constructor() {
		this.env = zennv({
			dotenv: true,
			schema: z.object({
				PORT: z.number(),
				MONGO_URI: z.string(),
			}),
		});
	}

	get<T>(key: string): T {
		return this.env[key] as unknown as T;
	}
}

export default new Config();
