using MySql.Data.MySqlClient;
using System;
using System.Data;

namespace go_betz_backend.Services
{
    public class dbConnection
    {
        public MySqlConnection mySqlConnection;

        public dbConnection()
        {
            mySqlConnection = new MySqlConnection(this.getConnectionString()); 
        }

        //public DataTable testConnection(string query)
        //{
        //    MySqlConnection con = new MySqlConnection("Server=dbgobetz.mysql.uhserver.com; database=dbgobetz; " + "UID=gobetzadmin; password=@go-2017Betz");

        //    if (con != null && mySqlConnection.State == ConnectionState.Closed)
        //    {
        //        con.Open();
        //    }
        //}

        private string getConnectionString()
        {
            string server = "dbgobetz.mysql.uhserver.com";
            string db = "dbgobetz";
            string uid = "gobetzadmin";
            string pass = "@2017goBetz";

            var connectionString = 
                String.Format("server = {0}; database = {1}; UID = {2}; password = {3};", server, db, uid, pass);
            
            return connectionString.ToString();
        }

        public void OpenConnection()
        {
            if (mySqlConnection != null && mySqlConnection.State == ConnectionState.Closed)
            {
                mySqlConnection.Open();
            }
        }

        public void CloseConnection()
        {
            if (mySqlConnection != null && mySqlConnection.State == ConnectionState.Open)
            {
                mySqlConnection.Close();
                this.Finalize();
            }
        }

        public MySqlCommand InitSqlCommand(string query)
        {
            var mySqlCommand = new MySqlCommand(query, this.mySqlConnection);
            return mySqlCommand;
        }

        public void ExecuteNonQuery(string query)
        {
            MySqlCommand mySqlCommand = this.InitSqlCommand(query);
            mySqlCommand.ExecuteNonQuery();
        }

        public DataTable GetData(string query)
        {
            var dataTable = new DataTable();
            var dataSet = new DataSet();
            var dataAdapter = new MySqlDataAdapter { SelectCommand = InitSqlCommand(query) };

            dataAdapter.Fill(dataSet);
            dataTable = dataSet.Tables[0];
            return dataTable;
        }
        private void Finalize()
        {
            if (mySqlConnection != null && mySqlConnection.State == ConnectionState.Closed)
                mySqlConnection.Dispose();
        }
    }
}