//This is the new syntax in JS based on ES 6 syntax

class Person{
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender
    }
    //this is a member function of this class..
    getInfo(){
        return `${this.name} is aged ${this.age} and is ${this.gender}`
    }
}

// let p1 = new Person("Srikumari", 30, "Female")

// let { name, age, gender } = p1
// console.log(p1)
// console.log(p1.getInfo()); 
// console.log(name)
// console.log(age)
// console.log(gender)
