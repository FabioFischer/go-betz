using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/matches")]
    public class MatchController
    {
        public DBController dbController = new DBController();

        [HttpGet]
        public List<Match> Get() 
        {
            List<Match> matches = null; 

            return matches;
        }   

        [HttpGet("{id}")]
        public Match Get(int id) 
        {
            Match match = null;

            return match;
        }   
        
        [HttpPost("{desc, teama_id, teamb_id, date}")]
        public void Post(string desc, string teama_id, string teamb_id, string date) {

        }
    }
}