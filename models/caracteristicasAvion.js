const sequelize = require('sequelize');
const db = require('../config/db');
const Fabricante = require('../models/fabricante');

const caracteristicasAviones = db.define('CaracteristicasAviones', {
    Modelo: {
        type: sequelize.INTEGER,
        
        references: {
          model: Fabricante,
          key: "Modelo"
        }
    },
    VelocidadMaxima: {
        type: sequelize.STRING,
        allowNull: false,
        primaryKey: true,

        validate: {
            isAlpha: true,
            notEmpty: true,
        }
    },
    VelocidadCrucero: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true,
        }
    },
    PesoVacio: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true,
        }
    },
    PesoMaximo: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true,
        }
    },
    EquipajeMaximo: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true,
        }
    },
    EquipajeCabina: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true,
        }
    },
    Combustible: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true,
        }
    },
    DistanciaDespegue: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true,
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = caracteristicasAviones;