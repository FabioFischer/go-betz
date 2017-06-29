using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    public class TeamController : Controller
    {
        public DBController dbController;

        public const string table = "t_team";
        public const string[] columns = new string{"team_id", "team_name"};

        [HttpGet]
        public List<> Get() {
            List<Team> teams = new List<Team>();

            var reader = dbController.executeQuery(dbController.getSelectStr(this.table, this.columns)); 

            while(reader.Read())
            {
                teams.add(new Team(
                    id = reader.GetString(0),
                    name = reader.GetString(1)
                )); 
            }
            
            dbController.closeConnection();

            return teams;            
        }

        [HttpGet("{id}")]
        public Team Get(int id) {
            Team team = new Team();
            string[] keys = new string{"team_id"};
            string[] values = new string{id};
            
            var reader = dbController.executeQuery(dbController.getSelectStr(this.table, this.columns, keys, values));

            while(reader.Read())
            {
                team.id = reader.GetString(0);
                team.name = reader.GetString(1).toString();
            }

            dbController.closeConnection();

            return team;
        }
        
        // PUT api/values/5
        [HttpPut("{Team}")]
        public void Put(Team team) {
            string[] keys = new string{team.id, team.name};

            var reader = dbController.executeQuery(dbController.getSelectStr(this.table, this.columns, keys)); 

            dbController.closeConnection();
        }
    }
}