const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/db');
const Reservas = require('../models/reserva');

const controller = {};

controller.getReservas = async function (callback) {
    try {
        let response = await Reservas.findAll({

        });
        let reservas = response.map(result => result.dataValues);
        console.log(reservas);
        callback(reservas, null);        
    } catch (error) {
        callback(null,error);
    }
};

controller.deleteReserva = async function (Codigo, callback) {
    try {
        let response = await Reservas.destroy(
         {
            where: {
                Codigo
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
};

controller.createReserva = async function (Pasajero_Pasaporte, Estado, Precio) {
    Reservas.create({Pasajero_Pasaporte, Estado, Precio});
};

controller.getCantidadReservas = async function(callback) {

    try {
        
        db.query(

            "SELECT COUNT(Reservas.Codigo) AS 'Numero'" +
            "FROM Reservas"

        ).spread((reservas, metada) => {
            console.log(reservas, metada);
            callback(reservas, null)
        });
    } catch (error) {
        callback(error, null);
    }
};

controller.getGanancias = async function(callback) {

    try {
        
        db.query(

            "SELECT SUM(Reservas.Precio) AS 'Ganancias'"+
            "FROM Reservas"

        ).spread((ganancias, metada) => {
            console.log(ganancias, metada);
            callback(ganancias, null)
        });
    } catch (error) {
        callback(error, null);
    }
};

module.exports = controller;