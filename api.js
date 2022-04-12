const LaLiga = 538
const PremierLeague = 237
let season = []
// post get delete put 
const express = require('express');
const { param } = require('express/lib/request');
const app = express()
var request = require('request');
const {getMatches} = require('./match.js');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.sqlite');
const {Player}  = require('./Classes')

// var options = { 
//   url: 'https://app.sportdataapi.com/api/v1/soccer/seasons?apikey=9567f350-b607-11ec-8e9c-3d53f745e2bf&league_id='+LaLiga,
  
// };
// function callback(error, response, body)  {
// 	if (!error && response.statusCode == 200) {
//         const obj = JSON.parse(body)
//         var sid = obj.data.filter(element => element.is_current === 1)[0].season_id
//         season.push(Number(sid))
// 	}
// }
// request(options, callback)
// options = { 
//     url: 'https://app.sportdataapi.com/api/v1/soccer/seasons?apikey=9567f350-b607-11ec-8e9c-3d53f745e2bf&league_id='+PremierLeague,
    
//   };
// request(options, callback)


app.get('/api/matches/:league/:date', (req, res) => {

    // console.log(season);
    const date = req.params.date
    const league = req.params.league

    var this_Season

    if(league =='laliga'){
        this_Season = season[0]
    }else{
        this_Season = season[1]
    }
    var options = {  url:  'https://app.sportdataapi.com/api/v1/soccer/matches?apikey=9567f350-b607-11ec-8e9c-3d53f745e2bf&season_id='+ this_Season+'&date_from='+'2022-04-04'+'&date_to='+date };

        function callback(error, response, body) {
        	if (!error && response.statusCode == 200) {
                const apiResponse = getMatches(body)
                res.status(200).json(apiResponse)

        	}
            else{
                res.status(200).json({})
            }
        }
    request(options, callback);
  })
  app.get('/api/players/:name', (req, res) => {

    let name = req.params.name
    name = name.replace(/&/g, " ");
    db = new sqlite3.Database('database.sqlite');
    db.all("SELECT player_name,player_api_id, birthday,height,weight FROM Player where player_name= '"+name+"'", function(err,player){
        if(player.length == 0)
            {db.close()
            res.status(200).json({})
        }
            else{
        db.all("SELECT * FROM Player_Attributes where player_api_id = "+ player[0].player_api_id, function(err, attributes){
            let temp = player[0]
            let att = attributes[0]
            let age = 0;
            let thisplayer = new Player(temp.player_name, age, temp.height, temp.weight,att.overall_rating, att.potential, att.preferred_foot, att.attacking_work_rate, att.defensive_work_rate, att.crossing,att.finishing) 
            db.close();
            res.status(200).json(thisplayer.obj()) 
            

      }); }
      });

  })
  
  app.listen(5003,() => {
    console.log('Server is listening on port 5000....')
  })
  