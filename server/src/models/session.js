"use strict";
module.exports = (sequelize, DataTypes) => {
  var Session = sequelize.define("Session", {
    token: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        Session.belongsTo(models.User);
      }
    }
  });
  return Session;
};