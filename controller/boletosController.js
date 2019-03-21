const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/db');
const Boletos = require('../models/boleto');

const controller = {};

controller.createBoleto = async function(N_Vuelo,Pasaporte,N_Asiento,Equipaje,Tipo_Asiento){
    Boletos.create({N_Vuelo, Pasaporte, N_Asiento,Equipaje,Tipo_Asiento});
}

controller.deleteBoleto = async function (N_Vuelo, callback) {
    try {
        let response = await Boletos.destroy(
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

controller.getCantidadAbordaron = async function(callback){
    try {
        
        db.query(

            "SELECT `Boletos`.`N_Vuelo` AS 'Vuelo', COUNT(`Boletos`.`N_Vuelo`) AS 'NumeroV', `Aviones`.`Modelo` AS 'Modelo'"+
            "FROM `Boletos`"+
            "INNER JOIN `Vuelos`"+
            "ON `Boletos`.`N_Vuelo` = `Vuelos`.`N_Vuelo`"+
            "INNER JOIN `Aviones`"+
            "ON `Vuelos`.`N_Serial` = `Aviones`.`N_Serial`"+
            "GROUP BY 'Vuelo'"

        ).spread((cantidadAbordaron, metada) => {
            console.log(cantidadAbordaron, metada);
            callback(cantidadAbordaron, null)
        });
    } catch (error) {
        callback(error, null);
    }
}

controller.getSobreventa = async function (callback) {

    try {

        db.query(

            "SELECT COUNT(`Reservas`.`Estado`) AS 'Numero'" +
            "FROM `Reservas`" +
            "WHERE `Reservas`.`Estado` = 'Sobreventa'"

        ).spread((sobreventa, metada) => {
            callback(sobreventa, null)
        });
    } catch (error) {
        callback(error, null);
    }
};

controller.getSobreventaPorcentual = async function (callback) {

    try {

        db.query(

            "SELECT `Reservas`.`Estado`, (COUNT(`Reservas`.`Estado`)* 100 / (SELECT COUNT(*) FROM `Reservas`)) AS 'Score'"+
            "From `Reservas`"+
            "WHERE `Reservas`.`Estado` = 'Sobreventa'"+
            "GROUP BY 'Score'"

        ).spread((sobreventaPorcentual, metada) => {
            callback(sobreventaPorcentual, null)
        });
    } catch (error) {
        callback(error, null);
    }
};

controller.getPromPeso = async function (callback) {

    try {

        db.query(

            "SELECT AVG(`Boletos`.`Equipaje`) AS 'Numero'" +
            "FROM `Boletos`"

        ).spread((prompeso, metada) => {
            callback(prompeso, null)
        });
    } catch (error) {
        callback(error, null);
    }
};

module.exports = controller;