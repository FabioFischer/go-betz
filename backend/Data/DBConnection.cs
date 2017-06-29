using MySql.Data.MySqlClient;

namespace backend.Data
{
    public class DBConnection
    {
        private MySqlConnection connection = null;
        private static DBConnection _instance = null;

        private string connString = "";
        
        connString = "Server=dbgobetz.mysql.uhserver.com; database=dbgobetz; " + "UID=gobetzadmin; password=@go-2017Betz";

        private DBConnection()
        {
        }

        public MySqlConnection Connection
        {
            get { return connection; }
        }

        public static DBConnection Instance()
        {
            if (_instance == null) {
                _instance = new DBConnection();
            }
           
           return _instance;
        }

        public bool IsConnect()
        {
            bool result = false;
            if (Connection == null)
            {
                if (String.IsNullOrEmpty(connString)) {
                    return false;
                }
                    
                connection = new MySqlConnection(connString);
                connection.Open();
                result = true;
            }

            return result;
        }

        public void Close()
        {
            connection.Close();
        }        
    }
}