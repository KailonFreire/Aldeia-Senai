// const Sequelize = require('sequelize');
import Sequelize from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config()

export const sequelize = new Sequelize('aldeia_senai_ps', '94wzs3o6hxe4ka6uajsy', 'pscale_pw_KO12X5Jr3PAvfkMZAjT8BztdEnlk3jUH2D39Kru3Uda', {
  host: process.env.DATABASE_URL,
  dialect: 'mysql',
});

export default sequelize;
