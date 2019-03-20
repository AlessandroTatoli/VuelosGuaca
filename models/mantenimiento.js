const sequelize = require('sequelize');
const db = require('../config/db');
const Avion = require('../models/avion');

const Mantenimiento = db.define('Mantenimiento', {
    N_Serial: {
        type: sequelize.INTEGER,

        references: {
            model: Avion,
            key: 'N_Serial',
        }
    },
    TipoMantenimiento: {
        type: sequelize.STRING,
        allowNull: false,
        primaryKey: true,

        validate: {
            notEmpty: true,
        }
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Mantenimiento;