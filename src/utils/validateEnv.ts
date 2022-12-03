import { cleanEnv, port, str } from 'envalid';
import * as dotenv from 'dotenv'

dotenv.config()

const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
  });
};

export default validateEnv;
