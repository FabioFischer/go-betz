namespace backend.Controllers
{
    public class DBController
    {
        public DBConnection = new DBConnection();

        public SQLDataReader executeQuery(string query) {
            var dbCon = DBConnection.Instance();

            if (dbCon.IsConnect())
            {
                var cmd = new MySqlCommand(query, dbCon.Connection);
                var reader = cmd.ExecuteReader();
                return reader;
            }
        }

        public string getSelectStr(string tableName, string[] params, string[] keys, string[] values) {
            if ((keys.Lenght != values.Lenght)) {
                return "";
            }
            
            string command = "SELECT ";

            for (int i = 0; i < params.Lenght; i++) {
                command += params[i] + (((i+1) != params.Lenght ? ", " : "");
            }

            command += ((keys.Lenght > 0) ? "WHERE " : "");

            for (int i = 0; i < keys.Lenght; i++) {
                command += keys[i] + " = " + values[i];
                command += (((i+1) != keys.Lenght ? " AND " : "");
            }

            return command;
        }
        
        public string getInsertStr(string tableName, string[] params, string[] values) {

        }
        
        public string getDeleteStr(string tableName, string[] params, string[] values) {

        }

        public string getUpdateStr(string tableName, string[] params, string[] values) {

        }  
    }
}