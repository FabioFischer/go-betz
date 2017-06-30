using System;
using System.Collections.Generic;
using System.Web.Http;
using go_betz_backend.Models;
using Newtonsoft.Json.Linq;
using System.Data;

namespace go_betz_backend.Controllers
{
    [Route("bets")]
    public class MatchBetController : ApiController
    {
        public dbController dbController = new dbController();
        public TeamController teamController = new TeamController();
        public MatchController matchController = new MatchController();
        public UserController userController = new UserController();

        public string table = "t_match_bets";
        public string[] columns = new string[6] { "match_bets_id", "match_id", "user_id", "team_id", "bet_value", "bet_date" };
        public string[] columnsNoID = new string[5] { "match_id", "user_id", "team_id", "bet_value", "bet_date" };

        [HttpGet]
        public List<MatchBet> Get() 
        {
            List<MatchBet> bets = null;

            DataTable data = dbController.ExecuteQuery(dbController.GetSelectStr(this.table, this.columns));

            foreach (DataRow row in data.Rows)
            {
                bets.Add(
                    new MatchBet()
                    {
                        id = row.Field<int>(0),
                        match = matchController.GetMatchByID(row.Field<int>(1)),
                        user = userController.GetUserByID(row.Field<int>(2)),
                        team = teamController.GetTeamByID(row.Field<int>(3)),
                        value = row.Field<float>(4),
                        date = row.Field<string>(5)
                    });
            }

            return bets;
        }   

        [HttpGet]
        public MatchBet Get(int id) 
        {
            MatchBet bet = null;

            DataTable data = dbController.ExecuteQuery(dbController.GetSelectStr(this.table, this.columns, new string[1] { "match_bet_id" }, new string[1] { id.ToString() }));

            foreach (DataRow row in data.Rows)
            {
                bet = new MatchBet()
                {
                    id = row.Field<int>(0),
                    match = matchController.GetMatchByID(row.Field<int>(1)),
                    user = userController.GetUserByID(row.Field<int>(2)),
                    team = teamController.GetTeamByID(row.Field<int>(3)),
                    value = row.Field<float>(4),
                    date = row.Field<string>(5)
                };
            }

            return bet;
        }    

        [HttpPost]
        public void Post([FromBody]JObject data)
        {
            int matchID = data["match_id"].ToObject<int>();
            int userID = data["user_id"].ToObject<int>();
            int teamID = data["team_id"].ToObject<int>();
            float value = data["value"].ToObject<float>();
            string date = data["date"].ToObject<string>();

            dbController.ExecuteNonQuery(
                dbController.GetInsertStr(this.table, this.columnsNoID, new string[5] { matchID.ToString(), userID.ToString(), teamID.ToString(), value.ToString(), date }));
        }            
    }
}