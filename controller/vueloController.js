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
                Origen,
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
};

controller.getUsos = async function(callback) {

    try {
        
        db.query(

            "SELECT `Vuelos`.`N_Serial` AS 'Avion' , COUNT(`Vuelos`.`N_Serial`) AS 'Usos'" +
            "FROM `Vuelos`" +
            "GROUP BY `Avion`"

        ).spread((avionesUsos, metada) => {
            console.log(avionesUsos, metada);
            callback(avionesUsos, null)
        });
    } catch (error) {
        callback(error, null);
    }
};

controller.getMasVisitados = async function (callback) {

    try {

        db.query(

            "SELECT `Vuelos`.`Destino` AS 'Numero'" +
            "FROM `Vuelos`" +
            "GROUP BY 'Numero'" +
            "ORDER BY COUNT(`Vuelos`.`Destino`) DESC"

        ).spread((masusados, metada) => {
            console.log("Mas Usados",masusados)
            callback(masusados, null)
        });
    } catch (error) {
        callback(error, null);
    }
};

controller.getAeroMasVisitados = async function (callback) {

    try {

        db.query(

            "SELECT `Vuelos`.`Origen` AS 'Numero'" +
            "FROM `Vuelos`" +
            "GROUP BY 'Numero'" +
            "ORDER BY COUNT(`Vuelos`.`Origen`) DESC"

        ).spread((aeromasusados, metada) => {
            callback(aeromasusados, null)
        });
    } catch (error) {
        callback(error, null);
    }
};

controller.getDemograficas = async function (callback) {

    try {

        db.query(

            "SELECT `Vuelos`.`Destino`, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER() AS 'Numero'" +
            "FROM `Vuelos`" +
            "GROUP BY 'Numero'" 

        ).spread((demo, metada) => {
            callback(demo, null)
        });
    } catch (error) {
        callback(error, null);
    }
};

module.exports = controller;