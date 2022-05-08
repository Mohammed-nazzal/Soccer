class Country{
    constructor(id, name){
        this.id = id;
        this.name = name
    }
    json(){
        return JSON.stringify({
            "id":this.id,
            "name":this.name
        })
    }
}

class League{
    constructor(id, Country_id, name){
        this.id = id
        this.Country_id = Country_id
        this.name = name
    }
    json(){
        return JSON.stringify({
            "id":this.id,
            "name":this.name,
            "Country_id":this.Country_id,
        })

    }
}

class Match{
    constructor(league_id, match_id, League,match_start, home_team, away_team, stats, venue, status ){
        this.League_id = league_id
        this.League = League
        this.match_id = match_id
        this.match_start = match_start
        this.home_team = home_team
        this.away_team = away_team
        this.stats = stats
        this.venue = venue 
        this.status = status
    }
    obj(){
        return {

            League : this.League,
            match_start : this.match_start,
            home_team : this.home_team,
            away_team : this.away_team,
            match_id: this.match_id,
            stats : this.stats,
            venue :this.venue,
            status : this.status
        }
    }
}
class Player{
    constructor(name, age, height, weight,  rating, potential, foot,  attacking, defencing, crossing, finishing){
        this.name = name
        this.age = age
        this.height = height
        this.weight = weight
        this.rating = rating
        this.potential = potential
        this.foot = foot
        this.attacking =attacking
        this.defencing = defencing
        this.crossing  =crossing
        this.finishing = finishing
        
    }
    obj(){
        return {

            name : this.name ,
            age : this.age ,
            height : this.height,
            weight : this.weight ,
            rating : this.rating ,
            potential : this.potential,
            foot : this.foot ,
            attacking : this.attacking ,
            defencing : this.defencing ,
            crossing : this.crossing  ,
            finishing : this.finishing
        }
    }
}
class Team{
    constructor(name, short_name, buildUpPlaySpeed, buildUpPlaySpeedClass, buildUpPlayPassing,  buildUpPlayPassingClass, defencePressure, defencePressureClass,  chanceCreationPassing, chanceCreationPassingClass){
        this.name = name
        this.short_name = short_name
        this.buildUpPlaySpeed = buildUpPlaySpeed
        this.buildUpPlaySpeedClass = buildUpPlaySpeedClass
        this.buildUpPlayPassing = buildUpPlayPassing
        this.buildUpPlayPassingClass = buildUpPlayPassingClass
        this.defencePressure = defencePressure
        this.defencePressureClass =defencePressureClass
        this.chanceCreationPassing = chanceCreationPassing
        this.chanceCreationPassingClass  =chanceCreationPassingClass  

    }
    obj(){
        return {

            name : this.name,
            short_name : this.short_name,
            buildUpPlaySpeed : this.buildUpPlaySpeed,
            buildUpPlaySpeedClass : this.buildUpPlaySpeedClass,
            buildUpPlayPassing : this.buildUpPlayPassing,
            buildUpPlayPassingClass : this.buildUpPlayPassingClass,
            defencePressure : this.defencePressure,
            defencePressureClass :this.defencePressureClass,
            chanceCreationPassing : this.chanceCreationPassing,
            chanceCreationPassingClass  : this.chanceCreationPassingClass ,

        }
    }
}
module.exports = {Match, Player,Team}