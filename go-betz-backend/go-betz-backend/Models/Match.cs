namespace go_betz_backend.Models
{
    public class Match
    {        
        public int id {get; set;}
        public string description {get; set;}
        public Team teamA {get; set;}
        public Team teamB {get; set;}
        public Team winner {get; set;}
        public string date {get; set;}
    }
}