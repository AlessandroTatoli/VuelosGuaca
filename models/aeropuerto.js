const sequelize = require('sequelize');
const db = require('../config/db');

const Aeropuertos = db.define('Aeropuertos', {
    Codigo_IATA: {
        type: sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        
        validate: {
            isAlpha: true,
            notEmpty: true,
        }
    },
    Ciudad: {
        type: sequelize.STRING,
        allowNull: false,
        
        validate: {
            isAlpha: true,
            notEmpty: true,
        }
    },
    Pais: {
        type: sequelize.STRING,
        allowNull: false,
        
        validate: {
            isAlpha: true,
            notEmpty: true,
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
});
module.exports = Aeropuertos;