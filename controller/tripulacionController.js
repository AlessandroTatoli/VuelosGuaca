const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/db');
const Tripulacion = require('../models/tripulacion');

const controller = {};

controller.getTripulacion = async function (callback) {
    try{
        let response = await Tripulacion.findAll({
            
        });
        let tripulacion = response.map(result => result.dataValues);
        console.log(tripulacion);
        callback(tripulacion, null);
    }catch (error) {
        callback(null,error);
    }
};

controller.createTripulante = async function (data) {
    Tripulacion.create(data);
};

controller.deleteTripulante = async function (Cedula, callback) {
    try {
        let response = await Tripulacion.destroy(
         {
            where: {
                Cedula
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
};

module.exports = controller;