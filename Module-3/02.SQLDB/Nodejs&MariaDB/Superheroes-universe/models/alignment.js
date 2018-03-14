'use strict';
module.exports = (sequelize, DataTypes) => {
  const Alignment = sequelize.define('Alignment', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validation: {
        notNull: true,
        // min: 4,
        // max: 7,
      },
    },
  }, {});
  Alignment.associate = function(models) {
    // associations can be defined here
  };
  return Alignment;
};
