const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/db');
const Aeropuertos = require('../models/aeropuerto');

const controller = {};

controller.getAeropuertos = async function (callback) {
    try{
        let response = await Aeropuertos.findAll({
            
        });
        let aeropuertos = response.map(result => result.dataValues);
        console.log(aeropuertos);
        callback(aeropuertos, null);
    }catch (error) {
        callback(null,error);
    }
};

module.exports = controller;