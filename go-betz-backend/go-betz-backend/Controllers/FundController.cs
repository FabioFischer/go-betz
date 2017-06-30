using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using go_betz_backend.Models;

namespace go_betz_backend.Controllers
{
    [Route("api/fund")]
    public class FundController : ApiController
    {
        public dbController dbController = new dbController();

        [HttpGet("{id}")]
        public void Get(int id) 
        {
        }   

        [HttpPost("{user_id, value, creditcard, expiration, cvv, name, address, fone}")]
        public void Post(string user_id, float value, string creditcard, string expiration, string cvv, string name, string address, string fone) 
        {
        }  
    }
}