// const mongoose = require('mongoose')
// const schema = mongoose.schema
// const playersSchema = new schema({
// })
const {Player}  = require('./Classes')
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.sqlite');
db.all("SELECT player_api_id	 FROM Player where player_name = 'Aaron Appindangoye' ", function(err,rows){

    db.all("SELECT *	 FROM Player_Attributes where player_api_id = "+ rows[0].player_api_id, function(err,rows1){
        
        console.log(rows1[0]);    
    });
    console.log(rows[0]);    
});
console.log('start');
db.close();
