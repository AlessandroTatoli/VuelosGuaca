const sequelize = require('sequelize');
const db = require('../config/db');
const Avion = require('../models/avion');

const Rutas = db.define('Rutas', {
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
        primaryKey: true,

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

module.exports = Rutas;