const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/db');
const Tripulacion_Vuelos = require('../models/tripulacionVuelos');

const controller = {};

controller.getTripulacionVuelos = async function (callback) {
    try{
        let response = await Tripulacion_Vuelos.findAll({
            
        });
        let tripulacionVuelos = response.map(result => result.dataValues);
        console.log(tripulacionVuelos);
        callback(tripulacionVuelos, null);
    }catch (error) {
        callback(null,error);
    }
};

controller.createTripulacionVuelos = async function (data) {
    Tripulacion_Vuelos.create(data);
};

controller.deleteTripulante = async function (Cedula, callback) {
    try {
        let response = await Tripulacion_Vuelos.destroy(
         {
            where: {
                Cedula,
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
};

module.exports = controller;