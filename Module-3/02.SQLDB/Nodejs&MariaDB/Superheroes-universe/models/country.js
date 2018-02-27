'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    name: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false,
      validation: {
        notNull: true,
        // min: 2,
        // max: 20,
      },
    },
  }, {});
  Country.associate = function (models) {
    // associations can be defined here
  };
  return Country;
};