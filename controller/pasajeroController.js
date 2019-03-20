const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/db');
const Pasajeros = require('../models/pasajero');

const controller = {};

controller.getPasajeros = async function (callback) {
    try{
        let response = await Pasajeros.findAll({
            
        });
        let pasajeros = response.map(result => result.dataValues);
        console.log('hola');
        console.log(pasajeros);
        callback(pasajeros, null);
    }catch (error) {
        callback(null,error);
    }
};

controller.createPasajero = async function (data) {
    
        console.log(data.IDVuelo, data.Origen, data.Destino, data.Precio, data.EE, data.EPC, data.PME, data.Duracion);
        Pasajeros.create(data);
};

controller.deletePasajero = async function (Pasaporte, callback) {
    try {
        let response = await Pasajeros.destroy(
         {
            where: {
                Pasaporte
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
};

controller.updatePasajero = async function (data, callback) {
    try {
        let response = await Pasajeros.update( {
            Telefono:data.Telefono
        },
         {
            where: {
                Pasaporte:data.Pasaporte
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
}

module.exports = controller;