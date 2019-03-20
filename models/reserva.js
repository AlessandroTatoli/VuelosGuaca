const sequelize = require('sequelize');
const db = require('../config/db');
const Pasajero = require('../models/pasajero');

const Reservas = db.define('Reservas', {
    Codigo: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        
        validate: {
            isNumeric: true,
            notEmpty: true,
        }
    },
    Pasajero_Pasaporte: {
        type: sequelize.STRING,
        references: {
          model: Pasajero,
          key: "Pasaporte"
        }},
    Estado:{
        type: sequelize.STRING,

        validate:{
            isAlpha: true,
            notEmpty: true,
        }
    },
    Precio:{
        type: sequelize.INTEGER,

        validate:{
            isNumeric: true,
            notEmpty: true,
        }
    }
}, {
    timestamps: false,
    freezeTableName: true
});

//Pasajero.hasMany(Reservas);
module.exports = Reservas;