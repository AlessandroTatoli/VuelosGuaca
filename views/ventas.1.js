
const sequelize = new Sequelize('b7gpjsvkbxqil3luopqr', 'ufyr8z5kb9ycudzk501l', 'nAfGhxXZieY2raJh4zcO', {
  host: 'b7gpjsvkbxqil3luopqr-mysql.services.clever-cloud.com',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});
console.log("script de mierda");
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    console.log('MARICO SIRVE');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

function x(){
    console.log("callese viejo lesbiano");
    models.User.build({
      username: req.body.username,
      password: req.body.password,
      first_name: req.body.firstName,
      last_name: req.body.lastName
    })
    .save()
    .then(function(task){
      // some function...
    })
    .catch(function(error){
      // some function...
    });


}