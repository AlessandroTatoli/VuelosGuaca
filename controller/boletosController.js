const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/db');
const Boletos = require('../models/boleto');

const controller = {};

controller.createBoleto = async function(N_Vuelo,Pasaporte,N_Asiento,Equipaje,Tipo_Asiento){
    Boletos.create({N_Vuelo, Pasaporte, N_Asiento,Equipaje,Tipo_Asiento});
}

module.exports = controller;