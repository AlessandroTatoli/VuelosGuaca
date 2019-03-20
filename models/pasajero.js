const sequelize = require('sequelize');
const db = require('../config/db');

const Pasajeros = db.define('Pasajeros', {
    Pasaporte: {
        type: sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    Nombre: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    Apellido: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    Cedula: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    Telefono: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    Correo: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Pasajeros;