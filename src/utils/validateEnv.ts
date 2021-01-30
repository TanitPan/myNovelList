import { cleanEnv, port, str } from 'envalid';

function validateEnv() {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port({ default: 3000 }),
    DB_USER: str({ default: 'root' }),
    DB_PASSWORD: str({ default: 'password' }),
    DB_HOST: str({ default: 'localhost' }),
    DB_DATABASE: str({ default: 'sequelize' }),
    DB_PORT: port({ default: 3306 }),
    DB_DIALECT: str({ default: 'mysql' }),
    JWT_SECRET: str({ default: 'jwt_secret' }),
  });
}

export default validateEnv;
