// interface Person { // interfaces are used to define objects
//     name: string
//     age: number

//     greet(phrase: string) : void;

// }

// let user: Person;

// user = {
//     name: "Kangaroo Joash"  ,
//     age: 30,
//     greet(phrase: string) {
//         console.log(phrase + ' ' + this.name)   
//     }
// }

// user.greet(`Hi there, welcome to`)


// USING INTERFACES WITH CLASSES
interface Greetable {  // similar to an abstract class except that you cant have any implementations at all, an interface provides the structure/features a class should have
    name: string;

    greet(phrase: string) : void;

}

class Person implements Greetable {
    name: string;
    age: number = 30;

    constructor(n : string) {
        this.name = n
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name)
    }

}

const user2 = new Person("Joash")
user2.greet("Be smart")
console.log(user2.name)

let user3: Greetable;

user3 = new Person('Joel')
user3.greet("Be smart")
console.log(user3.name)


let user4 : Greetable;
user4 = new Person("Joshua")
console.log(user4)

