const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/db');
const serviciosAviones = require('../models/servicioVuelo');

const controller = {};

controller.getServiciosAviones = async function (callback) {
    try{
        let response = await serviciosAviones.findAll({
        });
        let serviciosA = response.map(result => result.dataValues);
        console.log(serviciosA);
        callback(serviciosA, null);
    }catch (error) {
        callback(null,error);
    }
};

controller.createServicioAvion = async function(data){
    serviciosAviones.create(data);
}

controller.deleteServicioVuelo = async function (N_Vuelo, callback) {
    try {
        let response = await serviciosAviones.destroy(
         {
            where: {
                N_Vuelo
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
};

controller.deleteServicioVueloPorDesvio = async function (N_Serial, callback) {
    try {
        let response = await serviciosAviones.destroy(
        {
            where: {
                N_Serial,
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
};

module.exports = controller;