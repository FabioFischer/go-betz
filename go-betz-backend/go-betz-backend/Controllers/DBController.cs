using go_betz_backend.Services;
using MySql.Data.MySqlClient;
using System.Data;

namespace go_betz_backend.Controllers
{
    public class dbController
    {
        public dbConnection db = new dbConnection();

        public DataTable ExecuteQuery(string query) 
        {
            DataTable data = null;

            db.OpenConnection();
            data = db.GetData(query);
            db.CloseConnection();

            return data;
        }
        
        public void ExecuteNonQuery(string query)
        {
            db.OpenConnection();
            db.ExecuteNonQuery(query);
            db.CloseConnection();
        }

        public string GetSelectStr(string tableName, string[] columns, string[] keys = null, string[] values = null) 
        {
            if (keys.Length != values.Length) {
                return "";
            }
            
            string command = "SELECT ";

            for (int i = 0; i < columns.Length; i++) {
                command += columns[i] + (((i+1) != columns.Length) ? ", " : "");
            }

            command += ((keys.Length > 0) ? (" WHERE " + " FROM " + tableName) : " FROM " + tableName);

            for (int i = 0; i < keys.Length; i++) {
                command += keys[i] + " = " + values[i];
                command += (((i+1) != keys.Length) ? " AND " : "");
            }

            return command;
        }

        public string GetInsertStr(string tableName, string[] columns, string[] values) 
        {
            if (columns.Length != values.Length) {
                return "";
            }

            string command = "INSERT INTO " + tableName +" (";

            for (int i = 0; i < columns.Length; i++) {
                command += columns[i] + (((i+1) != columns.Length) ? ", " : ") ");
            }

            for (int i = 0; i < values.Length; i++) {
                if (i == 0) {
                    command += "VALUES (";
                }
                command += values[i] + (((i+1) != values.Length) ? ", " : ") ");
            }

            return command;
        }
    }
}