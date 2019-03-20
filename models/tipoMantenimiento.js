const sequelize = require('sequelize');
const db = require('../config/db');

const TiposMantenimieto = db.define('Tipo_Mantenimiento', {
    TipoMantenimiento: {
        type: sequelize.STRING,
        allowNull: false,
        primaryKey: true,

        validate: {
            isNumeric: true,
            notEmpty: true,
        }
    },
    Duracion: {
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

module.exports = TiposMantenimieto;