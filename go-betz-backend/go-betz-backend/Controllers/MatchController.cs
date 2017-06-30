using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using go_betz_backend.Models;
using Newtonsoft.Json.Linq;

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

        [HttpGet]
        public Match Get(int id) 
        {
            Match match = null;

            return match;
        }   
        
        [HttpPost]
        public void Post([FromBody]JObject data)
        {
            string desc = data["desc"].ToObject<string>();
            int teamAID = data["teama_id"].ToObject<int>();
            int teamBID = data["teamb_id"].ToObject<int>();
            string date = data["date"].ToObject<string>();
        }
    }
}