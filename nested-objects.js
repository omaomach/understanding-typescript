"use strict";
// const product: {
//     id: string;
//     price: number;
//     tags: string[];
//     details: object;
//     color: [number, string];  // a tuple - a special array with exactly two elements 
// } = {
//     id: "jersey",
//     price: 12.99,
//     tags: ["great-offer", "hot-and-new"],
//     details: {
//         title: "Coach Jersey",
//         description: "A black coach jersey"
//     },
//     color: [1, "White"]
// }
// for (const tag of product.tags) {
//     console.log(tag.toUpperCase())
// }
// let favoriteActivities: string[];
// favoriteActivities = ["coding", "boxing"];
// product.color.push("green")  // for some reason, this is allowed and typescript is unable to catch this error
// product.color[1] = 10;
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// enum Role { ADMIN, READ_ONLY, AUTHOR } // doesn't have to be all caps
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR } // READ_ONLY will 6 in that order
// enum Role { ADMIN = "admin", READ_ONLY, AUTHOR = "author" }
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
//# sourceMappingURL=nested-objects.js.map