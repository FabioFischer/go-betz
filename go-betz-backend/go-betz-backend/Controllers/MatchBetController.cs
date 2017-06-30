using System;
using System.Collections.Generic;
using System.Web.Http;
using go_betz_backend.Models;
using Newtonsoft.Json.Linq;

namespace go_betz_backend.Controllers
{
    [Route("api/bets")]
    public class MatchBetController : ApiController
    {
        public dbController dbController = new dbController();

        [HttpGet]
        public List<MatchBet> Get() 
        {
            List<MatchBet> bets = null; 

            return bets;
        }   

        [HttpGet]
        public MatchBet Get(int id) 
        {
            MatchBet bet = null;

            return bet;
        }    

        [HttpPost]
        public MatchBet Post([FromBody]JObject data) 
        {
            int id = data["id"].ToObject<int>();
            int teamID = data["team_id"].ToObject<int>();
            int matchID = data["match_id"].ToObject<int>();
            
            MatchBet bet = null;

            return bet;
        }            
    }
}