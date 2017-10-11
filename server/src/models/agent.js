'use strict';
module.exports = (sequelize, DataTypes) => {
  var Agent = sequelize.define('Agent', {
    numberOfListingsClosedIn12Months: DataTypes.INTEGER,
    companyName: DataTypes.STRING,
    breNumber: DataTypes.STRING,
    brokerBreNumber: DataTypes.STRING,
    companyAddress: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Agent.belongsTo(models.User);
      }
    }
  });
  return Agent;
};