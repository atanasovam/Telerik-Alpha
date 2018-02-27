'use strict';
module.exports = (sequelize, DataTypes) => {
  const Faction = sequelize.define('Faction', {
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
  Faction.associate = function (models) {
    // associations can be defined here
  };
  return Faction;
};