import * as path from 'path';
import * as dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'prod') {
  dotenv.config({
    override: true,
    path: path.resolve(
      process.cwd(),
      `env/${process.env.NODE_ENV || 'dev'}.env`,
    ),
  });
}

export default {
  PORT: process.env.PORT,
  mongo_uri: process.env.mongo_uri,
};
