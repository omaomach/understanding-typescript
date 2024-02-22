"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 7] = "READ_ONLY";
    Role[Role["AUTHOR"] = 100] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Omao",
    age: 25,
    hobbies: ["Boxing", "Coding"],
    role: Role.ADMIN
};
if (person.role === Role.AUTHOR) {
    console.log("Yippy Kai Ye");
}
