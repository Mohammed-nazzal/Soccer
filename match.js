//var league

const { noop } = require('lodash')

// let str = '{"query":{"apikey":"9567f350-b607-11ec-8e9c-3d53f745e2bf","season_id":"2029","date_from":"2022-04-01","date_to":"2022-04-03"},"data":[{"match_id":325502,"status_code":3,"status":"finished","match_start":"2022-04-02 19:00:00","match_start_iso":"2022-04-02T19:00:00+00:00","minute":89,"league_id":538,"season_id":2029,"stage":{"stage_id":1,"name":"Regular Season"},"group":{"group_id":207,"group_name":"LaLiga"},"round":{"round_id":36151,"name":"30","is_current":null},"referee_id":950,"home_team":{"team_id":6406,"name":"Atletico Madrid","short_code":"ATM","common_name":"","logo":"https:\/\/cdn.sportdataapi.com\/images\/soccer\/teams\/100\/107.png","country":{"country_id":113,"name":"Spain","country_code":"es","continent":"Europe"}},"away_team":{"team_id":6512,"name":"Deportivo Alaves Sad","short_code":"ALA","common_name":"","logo":"https:\/\/cdn.sportdataapi.com\/images\/soccer\/teams\/100\/125.png","country":{"country_id":113,"name":"Spain","country_code":"es","continent":"Europe"}},"stats":{"home_score":4,"away_score":1,"ht_score":"1-0","ft_score":"4-1","et_score":null,"ps_score":null},"venue":{"venue_id":3061,"name":"Wanda Metropolitano","capacity":67942,"city":"Madrid","country_id":113}},{"match_id":325507,"status_code":3,"status":"finished","match_start":"2022-04-02 14:15:00","match_start_iso":"2022-04-02T14:15:00+00:00","minute":90,"league_id":538,"season_id":2029,"stage":{"stage_id":1,"name":"Regular Season"},"group":{"group_id":207,"group_name":"LaLiga"},"round":{"round_id":36151,"name":"30","is_current":null},"referee_id":956,"home_team":{"team_id":6541,"name":"UD Levante","short_code":"LEV","common_name":"","logo":"https:\/\/cdn.sportdataapi.com\/images\/soccer\/teams\/100\/126.png","country":{"country_id":113,"name":"Spain","country_code":"es","continent":"Europe"}},"away_team":{"team_id":6534,"name":"CF Villarreal","short_code":"VIL","common_name":"","logo":"https:\/\/cdn.sportdataapi.com\/images\/soccer\/teams\/100\/123.png","country":{"country_id":113,"name":"Spain","country_code":"es","continent":"Europe"}},"stats":{"home_score":2,"away_score":0,"ht_score":"0-0","ft_score":"2-0","et_score":null,"ps_score":null},"venue":{"venue_id":3097,"name":"Ciudad de Valencia","capacity":26354,"city":"Valencia","country_id":113}},{"match_id":325508,"status_code":3,"status":"finished","match_start":"2022-04-02 16:30:00","match_start_iso":"2022-04-02T16:30:00+00:00","minute":90,"league_id":538,"season_id":2029,"stage":{"stage_id":1,"name":"Regular Season"},"group":{"group_id":207,"group_name":"LaLiga"},"round":{"round_id":36151,"name":"30","is_current":null},"referee_id":949,"home_team":{"team_id":6539,"name":"RC Celta de Vigo","short_code":"RCC","common_name":"","logo":"https:\/\/cdn.sportdataapi.com\/images\/soccer\/teams\/100\/117.png","country":{"country_id":113,"name":"Spain","country_code":"es","continent":"Europe"}},"away_team":{"team_id":6402,"name":"Real Madrid","short_code":"RMA","common_name":"","logo":"https:\/\/cdn.sportdataapi.com\/images\/soccer\/teams\/100\/113.png","country":{"country_id":113,"name":"Spain","country_code":"es","continent":"Europe"}},"stats":{"home_score":1,"away_score":2,"ht_score":"0-1","ft_score":"1-2","et_score":null,"ps_score":null},"venue":{"venue_id":3091,"name":"Municipal de Balaidos","capacity":31800,"city":"Vigo","country_id":113}},{"match_id":325509,"status_code":3,"status":"finished","match_start":"2022-04-02 12:00:00","match_start_iso":"2022-04-02T12:00:00+00:00","minute":64,"league_id":538,"season_id":2029,"stage":{"stage_id":1,"name":"Regular Season"},"group":{"group_id":207,"group_name":"LaLiga"},"round":{"round_id":36151,"name":"30","is_current":null},"referee_id":254,"home_team":{"team_id":6533,"name":"CF Getafe","short_code":"GET","common_name":"","logo":"https:\/\/cdn.sportdataapi.com\/images\/soccer\/teams\/100\/131.png","country":{"country_id":113,"name":"Spain","country_code":"es","continent":"Europe"}},"away_team":{"team_id":6520,"name":"RCD Mallorca","short_code":"MAL","common_name":"","logo":"https:\/\/cdn.sportdataapi.com\/images\/soccer\/teams\/100\/119.png","country":{"country_id":113,"name":"Spain","country_code":"es","continent":"Europe"}},"stats":{"home_score":1,"away_score":0,"ht_score":"0-0","ft_score":"1-0","et_score":null,"ps_score":null},"venue":{"venue_id":3093,"name":"Coliseum Alfonso Pérez","capacity":17393,"city":"Getafe","country_id":113}}]}'
function getMatches(query) {
    const {Match} = require('./Classes')
    let r = JSON.parse(String(query))
    //console.log(r.data);
    let matches = []
    for(let match of r.data){
        let home_team = {}
        home_team.name = match.home_team.name
        home_team.short_code = match.home_team.short_code
        home_team.logo = match.home_team.logo
        let away_team = {}
        away_team.name = match.away_team.name
        away_team.short_code = match.away_team.short_code
        away_team.logo = match.away_team.logo
        let stats = {}
        stats.home_score = match.stats.home_score
        stats.away_score = match.stats.away_score
        let venue = {}
        if(match.venue != null)
            {venue.name = match.venue.name
            venue.city = match.venue.city}
        
        let match_id = match.match_id
        let status = match.status
        let match_start = match.match_start
        let league = match.group.group_name
        let league_id = match.league_id
        let thisMatch = new Match(league_id, match_id, league, match_start, home_team, away_team, stats, venue, status)
        matches.push(thisMatch.obj())

}
    return matches
}
module.exports.getMatches= getMatches