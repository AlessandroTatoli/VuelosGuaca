const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/db');
const caracteristicasAviones = require('../models/caracteristicasAvion');

const controller = {};

controller.getCaracteristicasAvion = async function (callback) {
    try{
        let response = await caracteristicasAviones.findAll({
            
        });
        let caracteristicasAvion = response.map(result => result.dataValues);
        console.log(caracteristicasAvion);
        callback(caracteristicasAvion, null);
    }catch (error) {
        callback(null,error);
    }
};

module.exports = controller;