using go_betz_backend.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace go_betz_backend.Controllers
{
    public class UserController
    {
        public dbController dbController = new dbController();
        public FundController fundsController = new FundController();

        public string table = "t_user";
        public string[] columns = new string[4] { "user_id", "user_email", "user_name", "user_password" };
        public string[] columnsNoID = new string[3] { "user_email", "user_name", "user_password" };
        
        public User GetUserByID(int id)
        {
            User user = null;

            DataTable data = dbController.ExecuteQuery(dbController.GetSelectStr(this.table, this.columns, new string[1] { "user_id" }, new string[1] { id.ToString() }));

            foreach (DataRow row in data.Rows)
            {
                user = new User() {
                    id = row.Field<int>(0),
                    email = row.Field<string>(1),
                    name = row.Field<string>(2),
                    password = row.Field<string>(3)
                };
            }

            return user;
        }
    }
}