const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/db');
const Rutas = require('../models/ruta');

const controller = {};

controller.getRutas = async function (callback) {
    try{
        let response = await Rutas.findAll({
            
        });
        let rutas = response.map(result => result.dataValues);
        console.log(rutas);
        callback(rutas, null);
    }catch (error) {
        callback(null,error);
    }
};

controller.createRuta = async function(data){
    Rutas.create(data);
};

controller.deleteRuta = async function (data, callback) {
    try {
        let response = await Rutas.destroy(
         {
            where: {
                N_Serial: data.N_Serial,
                Origen: data.Origen,
                Destino: data.Destino,
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
};

module.exports = controller;