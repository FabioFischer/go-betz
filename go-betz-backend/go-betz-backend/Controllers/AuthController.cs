using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using go_betz_backend.Models;

namespace go_betz_backend.Controllers
{
    [Route("api/auth")]
    public class AuthController : ApiController
    {
        public dbController dbController = new dbController();
        
        [HttpPost("{ email, username, password }")] 
        public void Post(string email, string username, string password) 
        {
        }
        
        [HttpPost("sign_in")]
        public void Post() 
        {
        }
    }
}