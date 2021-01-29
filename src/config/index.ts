const dbConfig = {
  development: {
    username: 'root',
    password: 'password',
    database: 'sequelize',
    host: 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: 'password',
    database: 'sequelize',
    host: 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: 'mysql',
  },
};

export default dbConfig;
