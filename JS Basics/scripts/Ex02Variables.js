//syntax for creating variables in JS
let uname = "Phaniraj"
let age = 47
let salary = 65000
//try other data types like bool, object

let userInfo = { uname, age, salary} //Singleton object. 
console.log("The name is " + uname + ". His age is " + age + ". His Salary is " + salary)
console.log("The data type of uname is " + typeof(uname))
console.log("The data type of age is " + typeof(age))
console.log("The data type of salary is " + typeof(salary))
console.log("The data type of userInfo is " + typeof(userInfo))

age = parseInt(prompt("Enter the Age"))
salary = parseFloat(prompt("Enter the salary"))
//todo: check whether the value entered is a valid number and only then we shall add, else we show an message saying the age is invalid. 
console.log("The data type of age is " + typeof(age))
console.log("The age after 12 years shall be " + (age + 12));
console.log("The salary entered is " + salary);