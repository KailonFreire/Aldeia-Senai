import DataTypes from 'sequelize';
import sequelize from '../db.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
  // createdAt: {
  //   type: DataTypes.DATE,
  //   allowNull: false,
  //   defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
  // },
  // updatedAt: {
  //   type: DataTypes.DATE,
  //   allowNull: false,
  //   defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
  // },
}, {
  timestamps: false
});

export default User;
