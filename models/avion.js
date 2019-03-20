const sequelize = require('sequelize');
const db = require('../config/db');

const Aviones = db.define('Aviones', {
    N_Serial: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        
        validate: {
            isNumeric: true,
            notEmpty: true,
        }
    },

    Modelo: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            isNumeric: true,
            notEmpty: true,
        }
    },

    Alquilado: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true,
        }
    },

    Estado: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            notEmpty: true,
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
});
module.exports = Aviones;