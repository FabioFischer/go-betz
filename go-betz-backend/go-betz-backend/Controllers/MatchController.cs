using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using go_betz_backend.Models;
using Newtonsoft.Json.Linq;
using System.Data;

namespace go_betz_backend.Controllers
{
    [Route("api/matches")]
    public class MatchController : ApiController
    {
        public dbController dbController = new dbController();
        public TeamController teamController = new TeamController();

        public string table = "t_match";
        public string[] columns = new string[6] { "match_id", "match_description", "team_a_id", "team_b_id", "winner_team_id", "date"};
        public string[] columnsNoID = new string[5] { "match_description", "team_a_id", "team_b_id", "winner_team_id", "date" };
        
        [HttpGet]
        public List<Match> Get() 
        {
            List<Match> matches = new List<Match>();

            DataTable data = dbController.ExecuteQuery(dbController.GetSelectStr(this.table, this.columns));

            foreach (DataRow row in data.Rows)
            {
                matches.Add(
                    new Match() {
                        id = row.Field<int>(0),
                        description = row.Field<string>(1),
                        teamA = (!row.Field<int>(2).Equals(DBNull.Value)) ? this.teamController.GetTeamByID(row.Field<int>(2)) : null,
                        teamB = (!row.Field<int>(3).Equals(DBNull.Value)) ? this.teamController.GetTeamByID(row.Field<int>(3)) : null,
                        winner = (!row.Field<int>(4).Equals(DBNull.Value)) ? this.teamController.GetTeamByID(row.Field<int>(4)) : null,
                        date = row.Field<string>(5)
                    }
                );
            }

            return matches;
        }   

        [HttpGet]
        public Match Get(int id) 
        {
            Match match = null;

            DataTable data = dbController.ExecuteQuery(dbController.GetSelectStr(this.table, this.columns, new string[1] { "match_id" }, new string[1] { id.ToString() }));

            foreach (DataRow row in data.Rows)
            {
                match = new Match()
                {
                    id = row.Field<int>(0),
                    description = row.Field<string>(1),
                    teamA = (!row.Field<int>(2).Equals(DBNull.Value)) ? this.teamController.GetTeamByID(row.Field<int>(2)) : null,
                    teamB = (!row.Field<int>(3).Equals(DBNull.Value)) ? this.teamController.GetTeamByID(row.Field<int>(3)) : null,
                    winner = (!row.Field<int>(4).Equals(DBNull.Value)) ? this.teamController.GetTeamByID(row.Field<int>(4)) : null,
                    date = row.Field<string>(5)
                };
            }

            return match;
        }   
        
        [HttpPost]
        public void Post([FromBody]JObject data)
        {
            string desc = data["desc"].ToObject<string>();
            int teamAID = data["teama_id"].ToObject<int>();
            int teamBID = data["teamb_id"].ToObject<int>();
            string date = data["date"].ToObject<string>();

            dbController.ExecuteNonQuery(dbController.GetInsertStr(this.table, this.columnsNoID, new string[5] { desc, teamAID.ToString(), teamBID.ToString(), null, date}));
        }
    }
}