const u1 = { name: "Joel", age: 22 };
function greet(user) {
    console.log("Hi " + user.name);
}
function isOlder(user) {
    return user.age > 24;
}
greet({ name: "Joash", age: 25 });
console.log(isOlder({ name: "Joash", age: 25 }));
const button = document.getElementById('btn');
button.addEventListener('click', () => {
    console.log("Clicked");
});
