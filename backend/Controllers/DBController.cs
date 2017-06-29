using Data.DBConnection;
using MySql.Data.MySqlClient;

namespace backend.Controllers
{
    public class DBController
    {
        public DBConnection db = new DBConnection();

        public SQLDataReader executeQuery(string query) 
        {
            var dbCon = db.Instance();

            if (dbCon.IsConnect())
            {
                var cmd = new MySqlCommand(query, dbCon.Connection);
                var reader = cmd.ExecuteReader();
                return reader;
            }
        }
        
        public void executeNonQuery(string query) 
        {
            var dbCon = db.Instance();

            if (dbCon.IsConnect())
            {
                var cmd = new MySqlCommand(query, dbCon.Connection);
                cmd.ExecuteNonQuery();
            }
        }

        public void closeConnection() 
        {
            try{
                dbCon.Close();
            } catch (Exception e){
            }
        }

        public string getSelectStr(string tableName, string[] columns, string[] keys = null, string[] values = null) 
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

        public string getInsertStr(string tableName, string[] columns, string[] values) 
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