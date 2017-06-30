using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using go_betz_backend.Models;

namespace go_betz_backend.Controllers
{
    [Route("api/team")]
    public class TeamController : ApiController
    {
        public DBController dbController = new DBController();

        public string table = "t_team";
        public string[] columns = new string[2]{"team_id", "team_name"};
        public string[] columnsNoID = new string[1]{"team_name"};

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
        
        [HttpPost("{name}")]
        public void Post(string name) 
        {
            string[] keys = new string[1]{name};
            
            try 
            {
                dbController.executeNonQuery(dbController.getInsertStr(this.table, this.columnsNoID, keys)); 
                dbController.closeConnection();

            } catch (Exception e)
            {

            }
        }
    }
}