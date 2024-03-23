import { v4 as uuidv4 } from 'uuid';
import { DataTypes } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StudentData', {
      id: {
        allowNull: false,
        defaultValue: uuidv4,
        primaryKey: true,
        type: DataTypes.UUID,
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('StudentData');
  },
};
