'use strict';
module.exports = (sequelize, DataTypes) => {
  var Vendor = sequelize.define('Vendor', {
    type: DataTypes.STRING,
    companyName: DataTypes.STRING,
    companyAddress: DataTypes.STRING,
    phone: DataTypes.STRING,
    license: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Vendor.belongsTo(models.User);
      }
    }
  });
  return Vendor;
};