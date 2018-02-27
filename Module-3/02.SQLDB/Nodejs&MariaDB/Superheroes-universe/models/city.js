'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false,
      validation: {
        notNull: true,
        // min: 2,
        // max: 20,
      },
    },
  }, {});
  City.associate = function (models) {
    // associations can be defined here
  };
  return City;
};
