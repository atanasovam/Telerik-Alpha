'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Superheros", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "create-superhero",
    "created": "2018-02-26T15:58:10.156Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "Superheros",
        {
            "id": {
                "type": Sequelize.INTEGER,
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            },
            "name": {
                "type": Sequelize.STRING(60),
                "validate": {
                    "notNull": true,
                    "min": 3,
                    "max": 60
                },
                "allowNull": false,
                "unique": true
            },
            "secretIdentity": {
                "type": Sequelize.STRING(20),
                "validate": {
                    "notNull": true,
                    "min": 3,
                    "max": 20
                },
                "allowNull": false,
                "unique": true
            },
            "story": {
                "type": Sequelize.STRING,
                "allowNull": false
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
