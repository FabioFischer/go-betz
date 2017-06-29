namespace backend.Controllers
{
    public abstract class DBController
    {
        public DBConnection = new DBConnection();

        public SQLDataReader executeQuery(String query) {
            var dbCon = DBConnection.Instance();

            if (dbCon.IsConnect())
            {
                var cmd = new MySqlCommand(query, dbCon.Connection);
                var reader = cmd.ExecuteReader();
                return reader;
            }
        }

        public string getSelectStr(String tableName, String[] params, String[] keys, String[] values) {
            if ((keys.Lenght != values.Lenght)) {
                return "";
            }
            
            String command = "SELECT ";

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
        
        public string getInsertStr(String tableName, String[] params, String[] values) {

        }
        
        public string getDeleteStr(String tableName, String[] params, String[] values) {

        }

        public string getUpdateStr(String tableName, String[] params, String[] values) {

        }  
    }
}