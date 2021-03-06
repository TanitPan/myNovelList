import Sequelize from 'sequelize';
import config from '../config';
import { logger } from '../utils/logger';
import UserModel from '../models/users.model';
import NovelModel from '../models/novels.model';
import ReadingModel from '../models/readings.model';

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize.Sequelize(config[env].database, config[env].username, config[env].password, {
  host: config[env].host,
  port: config[env].port,
  dialect: config[env].dialect,
  timezone: '+09:00',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: true,
    freezeTableName: true,
  },
  pool: config[env].pool,
  logQueryParameters: env === 'development',
  logging: (query, time) => {
    logger.info(time + 'ms' + ' ' + query);
  },
  benchmark: true,
});

// Start connection
sequelize
  .authenticate()
  .then(() => {
    logger.info('🟢 The database is connected.');
  })
  .catch((error: Error) => {
    logger.error(`🔴 Unable to connect to the database: ${error}.`);
  });

// TODO: Create Readings table
// We are trying to export this object to make available to other files
const DB = {
  Users: UserModel(sequelize), // create users table in database
  Novels: NovelModel(sequelize), // create novels table in database
  Readings: ReadingModel(sequelize), // create readings table in database
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

export default DB;
