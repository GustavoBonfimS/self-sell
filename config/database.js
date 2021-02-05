require('dotenv').config();

module.exports = {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: 'self_sell',
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
    instanceName: 'localhost',
    domain: '',
  },
};
