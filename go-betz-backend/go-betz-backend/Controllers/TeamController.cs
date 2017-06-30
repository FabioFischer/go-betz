using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using go_betz_backend.Models;
using System.Data;
using Newtonsoft.Json.Linq;

namespace go_betz_backend.Controllers
{
    [Route("api/team")]
    public class TeamController : ApiController
    {
        public dbController dbController = new dbController();

        public string table = "t_team";
        public string[] columns = new string[2]{"team_id", "team_name"};
        public string[] columnsNoID = new string[1]{"team_name"};

        [HttpGet]
        public List<Team> Get() 
        {
            List<Team> teams = new List<Team>();
            
            DataTable data = dbController.ExecuteQuery(dbController.GetSelectStr(this.table, this.columns)); 

            foreach(DataRow row in data.Rows)
            {
                teams.Add(
                    new Team() { id = row.Field<int>(0), name = row.Field<string>(1) }
                );
            }                

            return teams;            
        }

        [HttpGet]
        public Team Get(int id) 
        {
            Team team = null;
            
            DataTable data = dbController.ExecuteQuery(dbController.GetSelectStr(this.table, this.columns, new string[1] { "team_id" }, new string[1] { id.ToString() }));

            foreach (DataRow row in data.Rows)
            {
                team = new Team() { id = row.Field<int>(0), name = row.Field<string>(1) };
            }

            return team;
        }
        
        [HttpPost]
        public void Post([FromBody]JObject data) 
        {            
            dbController.ExecuteNonQuery(dbController.GetInsertStr(this.table, this.columnsNoID, new string[1] { data["name"].ToObject<string>() })); 
        }
    }
}