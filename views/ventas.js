
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