using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/bets")]
    public class MatchBetController : Controller
    {
        public DBController dbController = new DBController();

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