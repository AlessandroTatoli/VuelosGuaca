const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/db');
const Fabricantes = require('../models/fabricante');

const controller = {};

controller.getFabricantes = async function (callback) {
    try{
        let response = await Fabricantes.findAll({
            
        });
        let fabricate = response.map(result => result.dataValues);
        console.log(fabricate);
        callback(fabricate, null);
    }catch (error) {
        callback(null,error);
    }
};

module.exports = controller;