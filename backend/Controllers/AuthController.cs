using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/auth")]
    public class AuthController : Controller
    {
        public DBController dbController = new DBController();
        
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