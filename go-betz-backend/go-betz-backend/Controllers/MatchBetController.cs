using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using go_betz_backend.Models;

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

        [HttpGet("{id}")]
        public MatchBet Get(int id) 
        {
            MatchBet bet = null;

            return bet;
        }    

        [HttpPost("{date, team_id, match_id}")]
        public MatchBet Get(int id, int team_id, int match_id) 
        {
            MatchBet bet = null;

            return bet;
        }            
    }
}