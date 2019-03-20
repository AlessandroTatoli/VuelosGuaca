const sequelize = require('sequelize');
const db = require('../config/db');
const Fabricante = require('../models/fabricante');

const Servicios = db.define('Servicios', {
    Modelo: {
        type: sequelize.INTEGER,
        
        references: {
          model: Fabricante,
          key: "Modelo"
        }
    },
    Baños: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,

        validate: {
            isNumeric: true,
            notEmpty: true,
        }
    },
    Salidas: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            isNumeric: true,
            notEmpty: true,
        }
    },
    Medico: {
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

module.exports = Servicios;