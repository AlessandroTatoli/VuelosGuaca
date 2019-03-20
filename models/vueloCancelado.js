const sequelize = require('sequelize');
const db = require('../config/db');
const Vuelo = require('../models/vuelo');

const VuelosCancelados = db.define('Vuelos_Cancelados', {
    N_Vuelo: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,

        validate: {
            notEmpty: true,
        }
    },
    Origen: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            notEmpty: true,
        }
    },
    Destino: {
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

module.exports = VuelosCancelados;