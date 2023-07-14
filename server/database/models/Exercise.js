import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Exercise = sequelize.define('Exercise', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  outputExample: {
    type: DataTypes.STRING,
    allowNull: false
  },
  inputExample: {
    type: DataTypes.STRING,
    allowNull: true
  },
  proficiency: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  responses: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  instructor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false,
  logging: false
})

export default Exercise