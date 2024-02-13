import * as path from 'path';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

class Config {
	private readonly env: { [key: string]: string };

	constructor() {
		const envPath = path.join(__dirname, '../../.env');
		this.env = dotenv.parse(fs.readFileSync(envPath));
	}

  get<T>(key: string): T {
    return this.env[key] as unknown as T;
  }
}

export default new Config();
