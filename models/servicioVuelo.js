const sequelize = require('sequelize');
const db = require('../config/db');
const Vuelos = require('../models/vuelo')

const serviciosVuelos = db.define('Servicios_Vuelos', {
    N_Vuelo: {
        type: sequelize.INTEGER,
        
        references: {
            model: Vuelos,
            key: 'N_Vuelo'
        }
    },
    Comida: {
        type: sequelize.STRING,
        allowNull: false,
        primaryKey: true,

        validate: {
            isAlpha: true,
            notEmpty: true,
        }
    },
    Internet: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true,
        }
    },
    TV: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            notEmpty: true,
        }
    },
    N_Serial: {
        type: sequelize.INTEGER,
        
        references: {
            model: Vuelos,
            key: 'N_Serial'
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
});
module.exports = serviciosVuelos;