'use strict';
module.exports = (sequelize, DataTypes) => {
  const Powers = sequelize.define('Powers', {
    name: {
      type: DataTypes.STRING(35),
      unique: true,
      allowNull: false,
      validation: {
        notNull: true,
        // min: 3,
        // max: 35,
      },
    },

  }, {});
  Powers.associate = function (models) {
    // associations can be defined here
  };
  return Powers;
};