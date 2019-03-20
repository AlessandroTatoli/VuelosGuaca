const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/db');
const Caracteristicas = require('../models/caracteristica');

const controller = {};

controller.getCaracteristicas = async function (callback) {
    try {
        let response = await Caracteristicas.findAll({

        });
        let caracteristicas = response.map(result => result.dataValues);
        console.log(caracteristicas);
        callback(caracteristicas, null);        
    } catch (error) {
        callback(null,error);
    }
};

module.exports = controller;