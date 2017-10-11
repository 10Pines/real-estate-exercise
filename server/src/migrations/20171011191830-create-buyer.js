'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Buyers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      downPayment: {
        type: Sequelize.DOUBLE
      },
      purchaseMethod: {
        type: Sequelize.STRING
      },
      maximumPurchasePrice: {
        type: Sequelize.DOUBLE
      },
      earnestMoneyDeposit: {
        type: Sequelize.DOUBLE
      },
      closingDays: {
        type: Sequelize.INTEGER
      },
      approved: {
        type: Sequelize.BOOLEAN
      },
      userId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Buyers');
  }
};