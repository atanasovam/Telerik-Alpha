'use strict';
module.exports = (sequelize, DataTypes) => {
  const Superhero = sequelize.define('Superhero', {
    name: {
      type: DataTypes.STRING(60),
      unique: true,
      allowNull: false,
      validate: {
        notNull: true,
        min: 3,
        max: 60,
      },
    },
    secretIdentity: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false,
      notNull: true,
      // min: 3,
      // max: 20,
    },

    story: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  }, {});

  Superhero.associate = function (models) {
    // associations can be defined here
  };
  return Superhero;
};
