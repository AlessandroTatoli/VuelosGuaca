const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/db');
const Vuelos = require('../models/vuelo');

const controller = {};

controller.getVuelos = async function (callback) {
    try{
        let response = await Vuelos.findAll({
            
        });
        let vuelos = response.map(result => result.dataValues);
        console.log(vuelos);
        callback(vuelos, null);
    }catch (error) {
        callback(null,error);
    }
};

controller.createVuelo = async function (data,tarifa) {
    console.log("WENAS",tarifa[0].Precio);
    console.log(data);
    Vuelos.create({N_Vuelo:data.N_Vuelo,N_Serial:data.N_Serial,Origen:data.Origen,Destino:data.Destino,Precio:tarifa[0].Precio});
};

controller.deleteVuelo = async function (N_Vuelo, callback) {
    try {
        let response = await Vuelos.destroy(
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

controller.deleteVueloPorDesvio = async function (N_Serial, Origen, callback) {
    try {
        let response = await Vuelos.destroy(
         {
            where: {
                N_Serial,
                Origen: {$notIn: [Origen]},
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
};

controller.getVuelosACancelar = async function (N_Serial, Origen, callback) {
    try{
        let response = await Vuelos.findAll({
            
            where: {
                N_Serial,
                Origen: {$notIn: [Origen]},
            }
        });
        let vuelos = response.map(result => result.dataValues);
        console.log(vuelos);
        callback(vuelos, null);
    }catch (error) {
        callback(null,error);
    }
};

controller.updateDestino = async function (data, callback) {
    try {
        let response = await Vuelos.update( {
            
            Destino: data.Destino
        },
         {
            where: {
                N_Vuelo: data.N_Vuelo
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
}

module.exports = controller;