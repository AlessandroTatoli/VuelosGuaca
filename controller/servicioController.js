const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/db');
const Servicios = require('../models/servicio');

const controller = {};

controller.getServicios = async function (callback) {
    try{
        let response = await Servicios.findAll({
            
        });
        let servicio = response.map(result => result.dataValues);
        console.log(servicio);
        callback(servicio, null);
    }catch (error) {
        callback(null,error);
    }
};

module.exports = controller;