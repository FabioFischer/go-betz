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

        public void closeConnection() 
        {
            try{
                dbCon.Close();
            } catch (Exception e){
            }
        }

        public string getSelectStr(string tableName, string[] columns, string[] keys = string[]{}, string[] values = string[]{}) 
        {
            if (keys.Lenght != values.Lenght) {
                return "";
            }
            
            string command = "SELECT ";

            for (int i = 0; i < columns.Lenght; i++) {
                command += columns[i] + (((i+1) != columns.Lenght) ? ", " : "");
            }

            command += ((keys.Lenght > 0) ? (" WHERE " + " FROM " + tableName) : + " FROM " + tableName);

            for (int i = 0; i < keys.Lenght; i++) {
                command += keys[i] + " = " + values[i];
                command += (((i+1) != keys.Lenght) ? " AND " : "");
            }

            return command;
        }

        public string getInsertString(string tableName, string[] columns, string[] values) 
        {
            if (columns.Lenght != values.Lenght) {
                return "";
            }

            string command = "INSERT INTO " + tableName +" (";

            for (int i = 0; i < columns.Lenght; i++) {
                command += columns[i] + (((i+1) != columns.Lenght) ? ", " : ") ");
            }

            for (int i = 0; i < values.Lenght; i++) {
                if (i == 0) {
                    command += "VALUES (";
                }
                command += values[i] + (((i+1) != values.Lenght) ? ", " : ") ");
            }

            return command;
        }
    }
}