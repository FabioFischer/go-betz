using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using go_betz_backend.Models;

namespace go_betz_backend.Controllers
{
    [Route("api/matches")]
    public class MatchController : ApiController
    {
        public dbController dbController = new dbController();

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