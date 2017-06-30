namespace go_betz_backend.Models
{
    public class User
    {
        public int id {get; set;}
        public string name {get; set;}
        public string email {get; set;}
        public string password {get; set;}
        public float currentFund {get; set;}
    }
}