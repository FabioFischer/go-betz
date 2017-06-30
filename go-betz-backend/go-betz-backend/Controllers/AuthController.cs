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
    [Route("api/auth")]
    public class AuthController : ApiController
    {
        public dbController dbController = new dbController();
        
        [HttpPost] 
        public void Post([FromBody]JObject data) 
        {
            string email = data["email"].ToObject<string>();
            string username = data["username"].ToObject<string>();
            string password = data["password"].ToObject<string>();
        }
        
        [HttpPost]
        [Route("api/auth/sign_in")]
        public void Post() 
        {
        }
    }
}