'use strict';

module.exports = (sequelize, DataTypes) => {
    const Superhero = sequelize.define('Superhero', {
        name: {
            type: DataTypes.STRING(3, 60),
            unique: true,
            allowNull: false,
        },
        secret_identity: {
            type: DataTypes.STRING(3, 20),
            unique: true,
            allowNull: false,
        },
        story: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    }, {});

    Superhero.associate = (models) => {
        const {
            /* Props */
        } = models;
    };
};
