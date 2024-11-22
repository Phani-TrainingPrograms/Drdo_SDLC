using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SampleConApp
{
    abstract class Account //abstract classes cannot be instantiated. 
    {
        public int AccountNo { get; set; }
        public string AccountHolder { get; set; }
        public int Balance { get; private set; }//Balance can be set only within the class..
        public void Credit(int amount) => Balance += amount;

        public void Debit(int amount)
        {
            if(Balance < amount) 
                throw new Exception("Insufficient Funds");
            Balance -= amount;
        }
        public abstract double CalculateInterest(); //pure virtual function which does not have implementation.  
    }

    class SbAccount : Account
    {
        public override double CalculateInterest()
        {
            int principle = this.Balance;
            double term = 0.25;
            double interest = 0.065;
            var interestAmount = principle * term * interest;
            return interestAmount;
        }
    }

    class RDAccount : Account
    {
        public override double CalculateInterest()
        {
            /*
             * A = P(1+R/N)^(Nt)*
                A: is the maturity amount
                P: is the amount of the periodic investment
                R: is the interest rate on the RD in decimals
                t: is the tenure or time duration of the RD
                N: is the compounding frequency, which is usually 4 because interest is compounded quarterly 
             */
            double principle = double.Parse(Program.Configuration.GetSection("baseAmount").Value);
            double rate = double.Parse(Program.Configuration.GetSection("interest").Value);
            double term = double.Parse(Program.Configuration.GetSection("term").Value);
            double n = 4;
            double amount = principle * (Math.Pow((1 + rate / n),(n * term)));
            return (amount - (principle * term));
        }
    }
}
