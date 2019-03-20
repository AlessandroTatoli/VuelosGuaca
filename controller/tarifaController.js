const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/db');
const Tarifas = require('../models/tarifa');

const controller = {};

controller.getTarifas = async function (ruta,callback) {
    try {
        let response = await Tarifas.findAll({
            where:{
                Origen: ruta.Origen,
                Destino: ruta.Destino,
            }
        });
        let tarifas = response.map(result => result.dataValues);
        console.log(tarifas);
        callback(tarifas, null);        
    } catch (error) {
        callback(null,error);
    }
};

module.exports = controller;