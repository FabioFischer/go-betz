namespace backend.Models
{
    public class MatchBet
    {
        public int id {get; set;}
        public Match match {get; set;}
        public User user {get; set;}
        public Team team {get; set;}
        public float value {get; set;}
        public String date {get; set;}
    }
}