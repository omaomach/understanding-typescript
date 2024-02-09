type User = { name: string; age: number }; // This allows you to avoid unnecessary repetition and manage types centrally
const u1: User = { name: "Joel", age: 22 };

// We can simplify this code
// function greet(user: { name: string; age: number }) {
//   console.log("Hi, I am " + user.name);
// }

// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }

// To

function greet(user: User) {
    console.log("Hi " + user.name)
}

function isOlder(user: User) {
    return user.age > 24
}

greet({name: "Joash", age: 25})
console.log(isOlder({name: "Joash", age: 25}))

