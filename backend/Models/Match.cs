namespace backend.Models
{
    public class Match
    {        
        public int id {get; set;}
        public String description {get; set;}
        public Team teamA {get; set;}
        public Team teamB {get; set;}
        public Team winner {get; set;}
        public String date {get; set;}
    }
}