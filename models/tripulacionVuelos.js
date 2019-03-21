const sequelize = require('sequelize');
const db = require('../config/db');
const Vuelo = require('../models/vuelo');
const Tripulacion = require('../models/tripulacion');

const Tripulacion_Vuelos = db.define('Tripulacion_Vuelos', {
    Cedula: {
        type: sequelize.INTEGER,
        primaryKey: true, 

        references: {
            model: Tripulacion,
            key: "Cedula",
        },
    },
    N_Vuelo: {
        type: sequelize.INTEGER, 

        references: {
            model: Vuelo,
            key: "N_Vuelo",
        },
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Tripulacion_Vuelos;