using Microsoft.Extensions.Configuration;
using System.Runtime.CompilerServices;

namespace SampleConApp
{
    class AccountFactory
    {
        public static Account CreateAccount(string name)
        {
            Account account = null;
            if (name == "SB")
                account = new SbAccount();
            else
                account = new RDAccount();
            return account;
        }
    }
    internal class Program
    {
        public static IConfigurationRoot Configuration { get; private set; }    
        static void Display(Account account)
        {
            var color = Console.BackgroundColor;
            Console.BackgroundColor = ConsoleColor.Green;
            Console.WriteLine("******************************************************");
            Console.WriteLine($"Account Holder: {account.AccountHolder}\nAccount Balance: {account.Balance}");
            var current = account.Balance;
            var interest = account.CalculateInterest();
            Console.WriteLine($"Account Interest for this Quarter: {interest}");
            Console.WriteLine("******************************************************");
            Console.BackgroundColor= color;
        }
        static void Main(string[] args)
        {
            Configuration = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json").Build();

            Console.WriteLine("Enter the Type of acount U Want to open");
            string type = Console.ReadLine() ?? string.Empty;
            var account = AccountFactory.CreateAccount(type);
            account.AccountHolder = "Phaniraj";
            account.AccountNo = 123;
            //account.Credit(6000);
            account.Credit(300000);
            var interest = account.CalculateInterest();
            account.Credit((int)interest);
            Display(account);
            Console.WriteLine("Press any key to continue..");
            Console.ReadKey();
        }
    }
}
