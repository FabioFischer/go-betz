namespace backend.Controllers
{
    public class TeamController
    {
        public DBController dbController;

        public List<> getTeams() {
            while(reader.Read())
            {
                string someStringFromColumnZero = reader.GetString(0);
                string someStringFromColumnOne = reader.GetString(1);
                Console.WriteLine(someStringFromColumnZero + "," + someStringFromColumnOne);
            }            
        }
    }
}