import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/db';

const StudentData = sequelize.define('StudentData', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  surName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  postName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  regNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  serialNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  qualificationName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  subProductDescription: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  productname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gateNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
  },
});

export default StudentData;
