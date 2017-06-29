namespace backend.Models
{
    public class CreditCard
    {
        public int id {get; set;}
        public User user {get; set;}
        public string creditCard {get; set;}
        public string expirationDate {get; set;}
        public string cvv {get; set;}
        
    }
}