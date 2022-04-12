// const sqlite3 = require("sqlite3");

const { at } = require('lodash');
const Logger = require('nodemon/lib/utils/log');
const { Player } = require('./Classes');

const data =' {"query":{"apikey":"9567f350-b607-11ec-8e9c-3d53f745e2bf","league_id":"237"},"data":[{"season_id":352,"name":"20\/21","is_current":0,"country_id":42,"league_id":237,"start_date":"2020-09-11","end_date":"2021-05-24"},{"season_id":359,"name":"19\/20","is_current":0,"country_id":42,"league_id":237,"start_date":"2019-08-09","end_date":"2020-07-26"},{"season_id":370,"name":"18\/19","is_current":0,"country_id":42,"league_id":237,"start_date":"2018-08-10","end_date":"2019-05-13"},{"season_id":1980,"name":"21\/22","is_current":1,"country_id":42,"league_id":237,"start_date":"2021-08-14","end_date":"2022-05-22"}]}'

const obj = JSON.parse(data)
// console.log(obj.data.filter(element => element.is_current === 1)[0].season_id);
// console.log(obj.data.filter(element => element.is_current === 1));



// var request = require('request');

// var options = { 
//   url: 'https://app.sportdataapi.com/api/v1/soccer/players?apikey=9567f350-b607-11ec-8e9c-3d53f745e2bf&country_id=48&max_age=19' 
// };

// function callback(error, response, body) {
// 	if (!error && response.statusCode == 200) {
// 		console.log(body);
// 	}
// }

// request(options, callback);
 //'https://app.sportdataapi.com/api/v1/soccer/matches?apikey=9567f350-b607-11ec-8e9c-3d53f745e2bf&season_id='+ obj.data.filter(element => element.is_current === 1)[0].season_id+'&date_from=2020-09-19' 
//console.log(url);
// var request = require('request');

// var options = { 
//   url:  'https://app.sportdataapi.com/api/v1/soccer/matches?apikey=9567f350-b607-11ec-8e9c-3d53f745e2bf&season_id='+ obj.data.filter(element => element.is_current === 1)[0].season_id+'&date_from=2022-04-04&date_to=2022-04-4' 

// };

// function callback(error, response, body) {
// 	if (!error && response.statusCode == 200) {
// 		console.log(typeof body);
// 	}
// }

// request(options, callback);

// const makeqlai = () =>{

//     console.log("start");
//     setTimeout(() =>{
//         console.log("chopping tomatos");
//         setTimeout(() => {
//             console.log("putting them on the pan");
//             setTimeout(()=>{
//                 console.log("serve to the customer");
//             },2000)
//         },2000)
//     },2000)
// }
// makeqlai()


//const shopOpen = false
// const order = (work,time)=>{
    
//     return new Promise((resolve,reject) =>{
//         if(shopOpen){
//         setTimeout(() => {
//             resolve(work())
//         }, time);
//     }
//     else{
//         console.log("shop closed");
//     }
//     })
// }
// console.log("start");
// order(()=>{console.log("chopping tomatoes");}, 2000)
// .then(()=> {
//     return order(()=>{console.log("putting them on pan");}, 2000)
// })
// .then(()=> {
//     return order(()=>{console.log("serve to customer");}, 2000)
// })
// .catch(()=>{
//     console.log("Customer left")
//   })
// .finally(()=>{
//       console.log("thanks for your sevices");
//   })



// var child_process = require('child_process');

// function runCmd(cmd)
// {
//   var resp = child_process.execSync(cmd);
//   var result = resp.toString('UTF8');
//   return result;
// }

//  var cmd = "curl -X 'GET' \
//  'https://futdb.app/api/leagues?page=1' \
//  -H 'accept: application/json' \
//  -H 'X-AUTH-TOKEN: 8415bb86-0e9c-4fe9-b195-56e0bf3bf469'";  
//  var result = runCmd(cmd);

//  console.log(result);


// var request = require('request');

// var options = { 
//   url: 'https://app.sportdataapi.com/api/v1/soccer/seasons?apikey=9567f350-b607-11ec-8e9c-3d53f745e2bf&league_id=237' 
// };

// function callback(error, response, body) {
// 	if (!error && response.statusCode == 200) {
// 		console.log(body);
// 	}
// }
// request(options, callback);




//npm start
//npm i sqlite3
// var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database('database.sqlite');
// db.all("SELECT * FROM Player where player_name = ", function(err,rows){

//     let contador = 0;

//     rows.forEach(function (row) {
//             console.log(row);    });
// });
// console.log('start');
// db.close();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.sqlite');
let name = "Abdullah&Oma"
  name = name.replace(/&/g, " ");
db.all("SELECT player_name,player_api_id, birthday,height,weight	 FROM Player where player_name = '"+name+"'", function(err,player){
  console.log(player);
  if(player.length ==0){
    console.log(player);
    //return
  }
  
  db.all("SELECT *	 FROM Player_Attributes where player_api_id = "+ player[0].player_api_id, function(err, attributes){
      let temp = player[0]
      let att = attributes[0]
      let age = 0;
      let thisplayer = new Player(temp.player_name, age, temp.height, temp.weight,att.overall_rating, att.potential, att.preferred_foot, att.attacking_work_rate, att.defensive_work_rate, att.crossing,att.finishing)  
});  
});
console.log('start');
db.close();







// const shopOpen = 1;
// const time =(t) =>{
//     return new Promise((resolve,reject) =>{
//         if(shopOpen){
//             setTimeout(resolve, t)
//         }
//         else{
//             reject(console.log("customer went home"))
//         }
//     })
// }
// async function cock(){
//     try{

//         // time taken to perform this 1 task
//              await time(1000)
//              console.log("hello")

//            }
        
//     catch(error){
//              console.log("Customer left", error)
//            }       
        
//     finally{
//               console.log("Day ended, shop closed")
//             }       
        
// }

// cock()
// console.log('j');
// let season = []

// var request = require('request');
// var options = { 
//   url: 'https://app.sportdataapi.com/api/v1/soccer/seasons?apikey=9567f350-b607-11ec-8e9c-3d53f745e2bf&league_id='+237,
  
// };
// function callback(error, response, body)  {
// 	if (!error && response.statusCode == 200) {
//         const obj = JSON.parse(body)
//         var sid = obj.data.filter(element => element.is_current === 1)[0].season_id
//         season.push(Number(sid))
// 	}
// }
// request(options, callback)
// var options1= { 
//     url: 'https://app.sportdataapi.com/api/v1/soccer/seasons?apikey=9567f350-b607-11ec-8e9c-3d53f745e2bf&league_id='+538,
    
//   };
// request(options1, callback)
// console.log(season);