const LaLiga = 538
const PremierLeague = 237

let season = []

const express = require('express');
const app = express()
var request = require('request');
const {getMatches} = require('./match.js');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.sqlite');
const {Player}  = require('./Classes')
const {Team}  = require('./Classes')

const {getSeasons} = require('./controllers')

season = getSeasons();


function getAge(date) { 
    var diff = Date.now() - date.getTime();
    var age = new Date(diff); 
    return Math.abs(age.getUTCFullYear() - 1970);
}

app.get('/', (req,res) => {res.status(200).json({})})
app.get('/api/matches/:league/:date', (req, res) => {

    const date = req.params.date
    const league = req.params.league

    var this_Season

    if(league =='laliga'){
        this_Season = season[0]
    }else{
        this_Season = season[1]
    }
    var datearray = date.split("-")
    var dateAsDate = new Date(datearray[0], datearray[1] - 1, datearray[2])
    dateAsDate.setDate(dateAsDate.getDate() + 1)
    console.log(dateAsDate.getFullYear());
    const today = (dateAsDate.getFullYear())+"-"+(dateAsDate.getMonth()+1)+"-"+(dateAsDate.getDate())
    

    var options = {  url:  'https://app.sportdataapi.com/api/v1/soccer/matches?apikey=9567f350-b607-11ec-8e9c-3d53f745e2bf&season_id='+ this_Season+'&date_from='+date+'&date_to='+today };

        function callback(error, response, body) {
        	if (!error && response.statusCode == 200) {
                console.log(body);
                const apiResponse = getMatches(body)

                res.status(200).json(apiResponse)

        	}
            else{
                res.status(200).json({})
            }
        }
    request(options, callback);
  });



  app.get('/api/teams/:teamname', (req, res) => {
    let name = req.params.teamname
    name = name.replace(/&/g, " ");
    db = new sqlite3.Database('database.sqlite');
    db.all("SELECT team_long_name,team_api_id,team_short_name FROM Team where team_long_name= '"+name+"'", function(err,team){
        if(team.length == 0)
            {db.close()
            res.status(200).json({})
        }
            else{
        db.all("SELECT * FROM Team_Attributes where team_api_id = "+ team[0].team_api_id, function(err, attributes){
            let temp = team[0]
            let att = attributes[0]
            let thisteam = new Team(temp.team_long_name, temp.team_short_name, att.buildUpPlaySpeed, att.buildUpPlaySpeedClass, att.buildUpPlayPassing,  att.buildUpPlayPassingClass, att.defencePressure, att.defencePressureClass,  att.chanceCreationPassing, att.chanceCreationPassingClass) 
            db.close();
            res.status(200).json(thisteam.obj())
            

      }); }
      });

  });

   
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
            let age = getAge(new Date(Number(temp.birthday.slice(0,4)), Number(temp.birthday.slice(5,7)), Number(temp.birthday.slice(7,9))));
            let thisplayer = new Player(temp.player_name, age, temp.height, temp.weight,att.overall_rating, att.potential, att.preferred_foot, att.attacking_work_rate, att.defensive_work_rate, att.crossing,att.finishing) 
            db.close();
            res.status(200).json(thisplayer.obj()) 
            

      }); }
      });

  });
  
  
  app.listen( 5004 || process.env.PORT,() => {
    console.log('Server is listening on port 5004....')
  })
  