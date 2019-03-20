const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/db');
const Aviones = require('../models/avion');

const controller = {};

controller.getAviones = async function (callback) {
    try{
        let response = await Aviones.findAll({
        });
        let aviones = response.map(result => result.dataValues);
        console.log(aviones);
        callback(aviones, null);
    }catch (error) {
        callback(null,error);
    }
};

controller.getAvionesDisponibles = async function (callback) {
    try{
        let response = await Aviones.findAll({

            where: {
                Estado: 'Disponible',
            }
        });
        let aviones = response.map(result => result.dataValues);
        console.log(aviones);
        callback(aviones, null);
    }catch (error) {
        callback(null,error);
    }
};

controller.getAvionesMantenimiento = async function (callback) {
    try{
        let response = await Aviones.findAll({

            where: {
                Estado: 'En Mantenimiento',
            }
        });
        let aviones = response.map(result => result.dataValues);
        console.log(aviones);
        callback(aviones, null);
    }catch (error) {
        callback(null,error);
    }
};

controller.createAvion = async function(data){
    Aviones.create(data);
}

controller.deleteAvion = async function (N_Serial, callback) {
    try {
        let response = await Aviones.destroy(
         {
            where: {
                N_Serial
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
}

controller.updateAvionEstado = async function (data, callback) {
    try {
        let response = await Aviones.update( {
            Estado: 'En Mantenimiento',
        },
         {
            where: {
                N_Serial: data.N_Serial,
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
}

controller.updateAvionMantenimiento = async function (data, callback) {
    try {
        let response = await Aviones.update( {
            Estado: 'Disponible',
        },
         {
            where: {
                N_Serial: data.N_Serial,
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
}

controller.getAviones2 = async function (N_Serial, callback) {
    try{
        let response = await Aviones.findAll({

            where: {
                N_Serial
            }
        });
        let aviones = response.map(result => result.dataValues);
        console.log(aviones);
        callback(aviones, null);
    }catch (error) {
        callback(null,error);
    }
};

controller.getDisponibles = async function(callback) {

    try {
        
        db.query(

            "SELECT COUNT(`Aviones`.`Estado`) AS 'Numero'" +
            "FROM `Aviones`" +
            "WHERE `Aviones`.`Estado` = 'Disponible'"

        ).spread((disponibles, metada) => {
            console.log(disponibles, metada);
            callback(disponibles, null)
        });
    } catch (error) {
        callback(error, null);
    }
};

controller.getMant = async function(callback) {

    try {
        
        db.query(

            "SELECT COUNT(`Aviones`.`Estado`) AS 'Numero'" +
            "FROM `Aviones`" +
            "WHERE `Aviones`.`Estado` = 'En Mantenimiento'"

        ).spread((mant, metada) => {
            callback(mant, null)
        });
    } catch (error) {
        callback(error, null);
    }
};

module.exports = controller;