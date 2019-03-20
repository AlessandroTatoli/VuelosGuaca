const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/db');
const Mantenimientos = require('../models/mantenimiento');

const controller = {};

controller.getMantenimientos = async function (callback) {
    try {
        let response = await Mantenimientos.findAll({

        });
        let mantenimientos = response.map(result => result.dataValues);
        console.log(mantenimientos);
        callback(mantenimientos, null);        
    } catch (error) {
        callback(null,error);
    }
};

controller.createMantenimiento = async function(data){
    Mantenimientos.create(data);
};

controller.deleteMantenimiento = async function (N_Serial, callback) {
    try {
        let response = await Mantenimientos.destroy(
         {
            where: {
                N_Serial
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
};

module.exports = controller;