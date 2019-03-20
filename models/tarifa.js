const sequelize = require('sequelize');
const db = require('../config/db');

const Tarifas = db.define('Tarifas', {
    Id: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        
        validate: {
            isNumeric: true,
            notEmpty: true,
        }
    },
    Origen: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true,
        }
    },
    Destino:{
        type: sequelize.STRING,
        allowNull: false,

        validate:{
            isAlpha: true,
            notEmpty: true,
        }
    },
    Precio:{
        type: sequelize.INTEGER,
        allowNull: false,

        validate:{
            isNumeric: true,
            notEmpty: true,
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Tarifas;