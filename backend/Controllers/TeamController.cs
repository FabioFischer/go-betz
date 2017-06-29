using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    public class TeamController : Controller
    {
        public DBController dbController;

        public string table = "t_team";
        public string[] columns = new string[2]{"team_id", "team_name"};

        [HttpGet]
        public List<Team> Get() 
        {
            List<Team> teams = new List<Team>();

            try 
            {
                var reader = dbController.executeQuery(dbController.getSelectStr(this.table, this.columns)); 

                while(reader.Read())
                {
                    teams.Add(
                        new Team(){ id = reader.GetString(0), name = reader.GetString(1)}
                    ); 
                }
                
                dbController.closeConnection();

            } catch (Exception e)
            {

            }

            return teams;            
        }

        [HttpGet("{id}")]
        public Team Get(int id) 
        {
            Team team = null;
            string[] keys = new string[1]{"team_id"};
            string[] values = new string[1]{id.ToString()};
            
            try 
            {
                var reader = dbController.executeQuery(dbController.getSelectStr(this.table, this.columns, keys, values));
                
                while(reader.Read())
                {
                    team = new Team(){ id = reader.GetString(0), name = reader.GetString(1)};
                }

                dbController.closeConnection();

            } catch (Exception e)
            {

            }

            return team;
        }
        
        [HttpPut("{Team}")]
        public void Put(Team team) 
        {
            string[] keys = new string[2]{team.id.ToString(), team.name};
            
            try 
            {
                dbController.executeNonQuery(dbController.getInsertStr(this.table, this.columns, keys)); 
                dbController.closeConnection();

            } catch (Exception e)
            {

            }
        }
    }
}