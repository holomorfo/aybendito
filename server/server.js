var JsonDB = require('node-json-db');
// The second argument is used to tell the DB to save after each push
// If you put false, you'll have to call the save() method.
// The third argument is to ask JsonDB to save the database in an human readable format. (default false)
var db = new JsonDB("myDataBase", true, false);

console.log('Node test');
// Pushing the data into the database
// With the wanted DataPath
// By default the push will override the old value
db.push("/Cosa de mi casa","esta es una prueba");

db.push("/ingredients/list/vegetables","carrot");

// Get the data from the root
var data = db.getData("/ingredients");

console.log(data);
// Save the data (useful if you disable the saveOnPush)
db.save();

// In case you have a exterior change to the databse file and want to reload it
// use this method
db.reload();