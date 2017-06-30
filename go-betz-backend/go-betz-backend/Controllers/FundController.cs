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
    [Route("fund")]
    public class FundController : ApiController
    {
        public dbController dbController = new dbController();

        public string table = "t_transaction";
        public string[] columns = new string[9] { "transaction_id", "user_id", "credit_card", "expiration_date", "cvv", "value", "tran_name", "tran_adress", "tran_fone" };
        public string[] columnsNoID = new string[8] { "user_id", "credit_card", "expiration_date", "cvv", "value", "tran_name", "tran_adress", "tran_fone" };

        [HttpGet]
        public float Get(int id) 
        {
            float currentFunds = 0;

            DataTable data = dbController.ExecuteQuery(dbController.GetSelectStr(this.table, new string[1] {"value"}, new string[1] { "user_id" }, new string[1] { id.ToString() }));

            foreach (DataRow row in data.Rows) {
                currentFunds += row.Field<float>(0);
            }

            return currentFunds;
        }   

        [HttpPost]
        public void Post([FromBody]JObject data) 
        {
            string userID = data["user_id"].ToObject<string>();
            float value = data["value"].ToObject<float>();
            string creditCard = data["creditcard"].ToObject<string>();
            string expiration = data["expiration"].ToObject<string>();
            string cvv = data["cvv"].ToObject<string>();
            string name = data["name"].ToObject<string>();
            string address = data["address"].ToObject<string>();
            string fone = data["fone"].ToObject<string>();

            dbController.ExecuteNonQuery(
                dbController.GetInsertStr(this.table, this.columnsNoID, new string[8] { userID, value.ToString(), creditCard, expiration, cvv, name, address, fone}));
        }  
    }
}