const Sequelize = require('sequelize')

const sequelize = new Sequelize('b7gpjsvkbxqil3luopqr', 'ufyr8z5kb9ycudzk501l', 'nAfGhxXZieY2raJh4zcO', {
  host: 'b7gpjsvkbxqil3luopqr-mysql.services.clever-cloud.com',
  dialect: 'mysql',
})

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

  module.exports = sequelize;