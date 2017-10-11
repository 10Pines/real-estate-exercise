'use strict';
module.exports = (sequelize, DataTypes) => {
  var Seller = sequelize.define('Seller', {
    propertyAddress: DataTypes.STRING,
    propertyPriceList: DataTypes.DOUBLE,
    seller: DataTypes.DATE,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Seller.belongsTo(models.User);
      }
    }
  });
  return Seller;
};