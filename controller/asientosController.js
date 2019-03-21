const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/db');
const Asientos = require('../models/asiento');
const Fabricante = require('../models/fabricante');

const controller = {};

controller.getAsientos = async function (callback) {
    try{
        let response = await Asientos.findAll({
            
        });
        let asiento = response.map(result => result.dataValues);
        console.log(asiento);
        callback(asiento, null);
    }catch (error) {
        callback(null,error);
    }
};

controller.getAsientos2 = async function (Modelo, callback) {
    try{
        let response = await Asientos.findAll({

            where: {
                Modelo
            }
        });
        let asientos = response.map(result => result.dataValues);
        console.log(asientos);
        callback(asientos, null);
    }catch (error) {
        callback(null,error);
    }
};

controller.getCantidadProgramada = async function(callback){
    try {
        
        db.query(

            "SELECT `Asientos`.`Modelo` AS 'Modelo', SUM(`Asientos`.`Asientos`) AS 'NumeroA'"+
            "FROM `Asientos`"+
            "INNER JOIN `Fabricante`"+
            "ON `Asientos`.`Modelo` = `Fabricante`.`Modelo`"+
            "GROUP BY 'Modelo'"

        ).spread((cantidadProgramada, metada) => {
            console.log(cantidadProgramada, metada);
            callback(cantidadProgramada, null)
        });
    } catch (error) {
        callback(error, null);
    }
}

module.exports = controller;