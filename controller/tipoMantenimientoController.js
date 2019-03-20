const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/db');
const TiposMantenimientos = require('../models/tipoMantenimiento');

const controller = {};

controller.getTiposMantenimiento = async function (callback) {
    try{
        let response = await TiposMantenimientos.findAll({
        });
        let tiposMantenimientos = response.map(result => result.dataValues);
        console.log(tiposMantenimientos);
        callback(tiposMantenimientos, null);
    }catch (error) {
        callback(null,error);
    }
};

module.exports = controller;