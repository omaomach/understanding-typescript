var u1 = { name: "Joel", age: 22 };
// We can simplify this code
// function greet(user: { name: string; age: number }) {
//   console.log("Hi, I am " + user.name);
// }
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }
// To
function greet(user) {
    console.log("Hi " + user.name);
}
function isOlder(user) {
    return user.age > 24;
}
greet({ name: "Joash", age: 25 });
console.log(isOlder({ name: "Joash", age: 25 }));
var u2 = "Joseph";
u2 = "Michael";
console.log(u2);
