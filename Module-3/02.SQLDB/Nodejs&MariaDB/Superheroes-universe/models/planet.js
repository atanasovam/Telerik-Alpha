'use strict';
module.exports = (sequelize, DataTypes) => {
  const Planet = sequelize.define('Planet', {
    name: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false,
      validation: {
        notNull: true,
        // min: 2,
        // max: 30,
      },
    },
  }, {});
  Planet.associate = function (models) {
    // associations can be defined here
  };
  return Planet;
};
