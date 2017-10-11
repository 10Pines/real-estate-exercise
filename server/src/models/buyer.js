'use strict';
module.exports = (sequelize, DataTypes) => {
  var Buyer = sequelize.define('Buyer', {
    downPayment: DataTypes.DOUBLE,
    purchaseMethod: DataTypes.STRING,
    maximumPurchasePrice: DataTypes.DOUBLE,
    earnestMoneyDeposit: DataTypes.DOUBLE,
    closingDays: DataTypes.INTEGER,
    approved: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Buyer.belongsTo(models.User);
      }
    }
  });
  return Buyer;
};