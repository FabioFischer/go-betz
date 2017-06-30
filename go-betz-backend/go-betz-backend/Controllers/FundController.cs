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
    [Route("api/fund")]
    public class FundController : ApiController
    {
        public dbController dbController = new dbController();

        [HttpGet]
        public void Get(int id) 
        {
        }   

        [HttpPost]
        public void Post([FromBody]JObject data) 
        {
            string userID = data["user_id"].ToObject<string>();
            float value = data["value"].ToObject<float>();
            string creditCard = data["creditcard"].ToObject<string>();
            string expiration = data["expiration"].ToObject<string>();
            string cvv = data["cvv"].ToObject<string>();
            string name = data["name"].ToObject<string>();
            string address = data["address"].ToObject<string>();
            string fone = data["fone"].ToObject<string>();
        }  
    }
}