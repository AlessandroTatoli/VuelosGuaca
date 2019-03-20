const sequelize = require('sequelize');
const db = require('../config/db');

const Fabricantes = db.define('Fabricante', {
    Modelo: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,

        validate: {
            isNumeric: true,
            notEmpty: true,
        }
    },
    Fabricante: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true,
        }}
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Fabricantes;