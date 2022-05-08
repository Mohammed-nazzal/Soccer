function getSeasons(){
    const LaLiga = 538
    const PremierLeague = 237
    var request = require('request-promise');
    
    let season = []
    function callback(error, response, body)  { 
        if (!error && response.statusCode == 200) {
                const obj = JSON.parse(body)
                var sid = obj.data.filter(element => element.is_current === 1)[0].season_id
                season.push(Number(sid))    
        }  
    }
    const getSeasonID = async () => {
    
    var options = { 
        url: 'https://app.sportdataapi.com/api/v1/soccer/seasons?apikey=9567f350-b607-11ec-8e9c-3d53f745e2bf&league_id='+LaLiga,
    };
    await request(options, callback)
    options = { 
          url: 'https://app.sportdataapi.com/api/v1/soccer/seasons?apikey=9567f350-b607-11ec-8e9c-3d53f745e2bf&league_id='+PremierLeague,
    };
    await request(options, callback)
    console.log(season);
    
    }
    getSeasonID()
    return season
}

module.exports.getSeasons = getSeasons


