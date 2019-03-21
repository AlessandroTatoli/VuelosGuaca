const sequelize = require('sequelize');
const db = require('../config/db');
const Pasajero = require('../models/pasajero');
const Vuelo = require('../models/vuelo')

const Boletos = db.define('Boletos', {
    N_Vuelo: {
        type: sequelize.INTEGER,
        references: {
          model: Vuelo,
          key: "N_Vuelo"
        }},

    Pasaporte: {
        type: sequelize.STRING,
        references: {
          model: Pasajero,
          key: "Pasaporte"
        }
    },

    N_Asiento: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,

        validate: {
            isNumeric: true,
            notEmpty: true,
        }
    },

    Equipaje: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            isNumeric: true,
            notEmpty: true,
        }
    },

    Tipo_Asiento: {
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
module.exports = Boletos;