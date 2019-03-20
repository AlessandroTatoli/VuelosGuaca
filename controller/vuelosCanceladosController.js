const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/db');
const VuelosCancelados = require('../models/vueloCancelado');

const controller = {};

controller.getVuelosCancelados = async function (callback) {
    try{
        let response = await VuelosCancelados.findAll({
            
        });
        let vuelosCancelados = response.map(result => result.dataValues);
        console.log(vuelosCancelados);
        callback(vuelosCancelados, null);
    }catch (error) {
        callback(null,error);
    }
};

controller.createVueloCancelado = async function (N_Vuelo, Origen, Destino) {
    VuelosCancelados.create({N_Vuelo, Origen, Destino});
};

controller.createVueloCancelado2 = async function (vuelos) {

    console.log(vuelos);
    for(var i=0; i<vuelos.lenght; i++){
        VuelosCancelados.create(vuelos[i].N_Vuelo, vuelos[i].Origen,vuelos[i].Destino)
    }
};

controller.deleteVuelo = async function (N_Vuelo, callback) {
    try {
        let response = await VuelosCancelados.destroy(
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

module.exports = controller;