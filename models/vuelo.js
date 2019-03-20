const sequelize = require('sequelize');
const db = require('../config/db');
const Avion = require('../models/avion');

const Vuelos = db.define('Vuelos', {
    N_Vuelo: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,

        validate: {
            isNumeric: true,
            notEmpty: true,
        }
    },
    N_Serial: {
        type: sequelize.INTEGER,

        references: {
            model: Avion,
            key: "N_Serial"
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
    Precio: {
        type: sequelize.INTEGER,

        validate:{
            notEmpty: true,
            isNumeric: true,
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Vuelos;