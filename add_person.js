const settings = require("./settings");
const knex = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
  }
});

let data = process.argv;

knex('famous_people').insert({first_name: data[2], last_name: data[3], birthdate: data[4]}).asCallback(function(err, rows){
  console.log("new person added!")
})

knex.select().from('famous_people').asCallback(function(err, rows){
  console.log(err, rows);

})