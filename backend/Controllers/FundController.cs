using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/fund")]
    public class FundController : Controller
    {
        public DBController dbController = new DBController();

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