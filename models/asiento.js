const sequelize = require('sequelize');
const db = require('../config/db');
const Fabricante = require('../models/fabricante');

const Asientos = db.define('Asientos', {
    Modelo: {
        type: sequelize.INTEGER,
        
        references: {
          model: Fabricante,
          key: "Modelo"
        }
    },
    Clase: {
        type: sequelize.STRING,
        allowNull: false,
        primaryKey: true,

        validate: {
            isAlpha: true,
            notEmpty: true,
        }
    },
    Asientos: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            isNumeric: true,
            notEmpty: true,
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Asientos;