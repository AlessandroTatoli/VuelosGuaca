const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/db');
const Asientos = require('../models/asiento');

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

controller.getAsientos2 = async function (N_Serial, callback) {
    try{
        let response = await Asientos.findAll({

            where: {
                N_Serial
            }
        });
        let asientos = response.map(result => result.dataValues);
        console.log(asientos);
        callback(asientos, null);
    }catch (error) {
        callback(null,error);
    }
};

module.exports = controller;