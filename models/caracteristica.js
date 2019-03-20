const sequelize = require('sequelize');
const db = require('../config/db');
const Aeropuerto = require('../models/aeropuerto');

const Caracteristicas = db.define('Caracteristicas', {
    Codigo_IATA: {
        type: sequelize.STRING,

        references: {
            model: Aeropuerto,
            key: "Codigo_IATA"
        }
    },
    Pista: {
        type: sequelize.FLOAT,
        allowNull: false,
        primaryKey: true,
        
        validate: {
            notEmpty: true,
        }}
}, {
    timestamps: false,
    freezeTableName: true
});

//Aeropuerto.hasMany(Caracteristicas);
module.exports = Caracteristicas;