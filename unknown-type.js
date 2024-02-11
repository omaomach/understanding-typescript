var userInput; // a bit more ristictive as compared to the any type
// let userInput: any; // here typescript does not check for any types at all.
var userName;
userInput = 5;
userInput = "Joshua";
// userName = userInput;
if (typeof userInput === "string") {
    userName = userInput;
}
