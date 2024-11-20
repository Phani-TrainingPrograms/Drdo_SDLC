//Example for understanding Lists or Arrays in JS. 
const fruits = ["Apples", "Mangoes", "Oranges", "PineApples"]
console.log(fruits + " and its data type is " + typeof(fruits));
//iterate(Access one at a time) thru the fruits
for (let index = 0; index < fruits.length; index++) {
    console.log(`Fruit Name: ${fruits[index]} at the index ${index}`);
    
}
for (const fruit of fruits) {
    console.log(fruit);
}
console.log("Iterating using for...in loop");
for(const index in fruits){
    console.log(`Fruit Name: ${fruits[index]} at the index ${index}`);
}

fruits.push("Bananas") //add the element to the bottom of the list
fruits.unshift("Ooty Apples");//Adds to the begining of the list. 
fruits.splice(2, 1, "Ratnagiri Mangoes")
console.log(fruits);

