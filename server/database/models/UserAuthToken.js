import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const UserToken = sequelize.define('Users_Auth_Token', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  expiration_date: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  timestamps: false,
  freezeTableName: true
})

export default UserToken;