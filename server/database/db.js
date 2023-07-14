// const Sequelize = require('sequelize');
import dotenv from 'dotenv';
import Sequelize from 'sequelize';

dotenv.config();
// export const sequelize = new Sequelize('aldeia_senai', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

export const sequelize = new Sequelize(process.env.DATABASE_URL_PS, {
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true
    }
  }
})

export default sequelize;