namespace go_betz_backend.Models
{
    public class Transaction
    {
        public int id { get; set; }
        public User user { get; set; }
        public string creditCard { get; set; }
        public string expirationDate { get; set; }
        public string cvv { get; set; }
        public float value { get; set; }
    }
}